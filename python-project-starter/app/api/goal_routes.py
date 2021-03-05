from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import Goal, db
from app.forms import GoalForm

goal_routes = Blueprint('goals', __name__)


@goal_routes.route('/')
@login_required
def tasks():
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