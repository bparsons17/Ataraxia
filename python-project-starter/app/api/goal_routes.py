from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import Goal, db
from app.forms import GoalForm
import ast

goal_routes = Blueprint('goals', __name__)


@goal_routes.route('/')
@login_required
def goals():
    goals = Goal.query.filter_by(userId=current_user.id)
    return {"goals": [goal.to_dict() for goal in goals]}

@goal_routes.route('/', methods = ["POST"])
def create_goal():
    form = GoalForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = Goal()  
        form.populate_obj(data)
        data.userId = current_user.id
        db.session.add(data)
        db.session.commit()
        return data.to_dict()
    return 'invalid info'

@goal_routes.route('/<id>')
def goal(id):
    goals = Goal.query.filter_by(id=id).all()
    return {"goals": [goal.to_dict() for goal in goals]}

@goal_routes.route('/<id>', methods=['DELETE'])
def delete_goal(id):
    goal = Goal.query.filter_by(id=id).first()
    db.session.delete(goal)
    db.session.commit()
    return goal.to_dict()


@goal_routes.route('/update/<id>', methods=['POST'])
def update_goal(id):
    goal = Goal.query.filter_by(id=id).first()
    update = request.data.decode("utf-8")
    print(update, '---------------------')
    updated = ast.literal_eval(update)
    if "title" in updated.keys():
        title = updated["title"]
        goal.title = title
    if "steps" in updated.keys():
        steps = updated["steps"]
        goal.steps = steps
    if "description" in updated.keys():
        desc = updated["description"]
        goal.description = desc
    if 'deadline' in updated.keys():
        deadline = updated["deadline"]
        goal.deadline = deadline
        

    db.session.commit()

    return goal.to_dict()