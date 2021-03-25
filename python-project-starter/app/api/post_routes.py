from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import Post, db
from app.forms import PostForm
import ast

post_routes = Blueprint('posts', __name__)

@post_routes.route('/')
@login_required
def posts():
    posts = Post.query.all()
    return {'posts': [post.to_dict() for post in posts]}

@post_routes.route('/', methods = ["POST"])
@login_required
def create_post():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('--------')
    if form.validate_on_submit():
        data = Post()
        print('----', data)  
        form.populate_obj(data)
        data.userId = current_user.id
        db.session.add(data)
        db.session.commit()
        return data.to_dict()
    return 'invalid info'

@post_routes.route('/<id>')
@login_required
def post(id):
    posts = Post.query.filter_by(id=id).one()
    # print(posts, '--s-s-s-s--s-s')
    return posts.to_dict()

@post_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    post = Post.query.get(id)
    print('kskskskksks', post)
    db.session.delete(post)
    db.session.commit()
    return post.to_dict()
   