from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired

dr = [DataRequired()]

class PostForm(FlaskForm):
    postText = StringField('postText', dr)
    userId = IntegerField()