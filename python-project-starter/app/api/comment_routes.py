from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import Comment, db
from app.forms import CommentForm
import ast

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/')
@login_required
def comments():
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}


@comment_routes.route('/post/<id>')
@login_required
def post_comments(id):
    comments = Comment.query.filter_by(postId=id).all()
    return {"comments": [comment.to_dict() for comment in comments]}


@comment_routes.route('/', methods = ["POST"])
def new_comment():
    # data = request.get_json() 
    # print(data,'balls')   

    # userId = data['userId']
    # postId = data['postId']
    # commentText = data['commentText']
    # # userId = data['userId']
    # new_comment = Comment(commentText=commentText, postId=postId,userId=userId)
    # db.session.add(new_comment)
    # db.session.commit()
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = Comment()
        form.populate_obj(data)
        data.userId = current_user.id
        db.session.add(data)
        db.session.commit()
        return data.to_dict()

    return 'bad data'

@comment_routes.route('/<id>')
@login_required
def comment(id):
    comments = Comment.query.filter_by(id=id).one()
    # print(posts, '--s-s-s-s--s-s')
    return comments.to_dict()

@comment_routes.route('/<id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    print('alalallalaal', comment)
    db.session.delete(comment)
    db.session.commit()
    return comment.to_dict()