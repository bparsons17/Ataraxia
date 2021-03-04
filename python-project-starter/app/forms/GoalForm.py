from flask_wtf import FlaskForm
from wtforms import StringField, DateField, TextAreaField, SubmitField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired

dr = [DataRequired()]

class GoalForm(FlaskForm):
    title = StringField('title', dr)
    description = TextAreaField('description', dr)
    steps = TextAreaField('steps', dr)
    deadline = DateField('deadline')
    userId = IntegerField()
    submit = SubmitField('Submit')