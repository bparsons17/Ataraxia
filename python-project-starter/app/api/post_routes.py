from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import Post, db
from app.forms import PostForm
import ast

post_routes = Blueprint('posts', __name__)

@post_routes.route('/')
def posts():
    posts = Post.query.all()
    return {'posts': [post.to_dict() for post in posts]}

@post_routes.route('/', methods = ["POST"])
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
def post(id):
    posts = Post.query.filter_by(id=id).first()
    print(posts, '--s-s-s-s--s-s')
    return {'posts': posts.to_dict()}
   