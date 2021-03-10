from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import Journal, db
from app.forms import JournalForm

journal_routes = Blueprint('journals', __name__)

@journal_routes.route('/')
@login_required
def journals():
    journals = Journal.query.filter_by(userId=current_user.id)
    return {"journals": [journal.to_dict() for journal in journals]}


@journal_routes.route('/', methods = ["POST"])
def create_journal():
    form = JournalForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('----------')
    if form.validate_on_submit():
        data = Journal()
        print(data, '----------')  
        form.populate_obj(data)
        data.userId = current_user.id
        db.session.add(data)
        db.session.commit()
        return data.to_dict()
    return 'invalid info'

@journal_routes.route('/<id>')
def journal(id):
    journals = Journal.query.filter_by(id=id).all()
    return {"journals": [journal.to_dict() for journal in journals]}

@journal_routes.route('/<id>', methods=['DELETE'])
def delete_journal(id):
    journal = Journal.query.filter_by(id=id).first()
    db.session.delete(journal)
    db.session.commit()
    return journal.to_dict()