from flask_wtf import FlaskForm
from wtforms import StringField, DateField, TextAreaField, SubmitField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired

dr = [DataRequired()]

class CommentForm(FlaskForm):
    commentText = StringField('commentText', dr)
    postId = IntegerField()
    userId = IntegerField()
    submit = SubmitField('Submit')