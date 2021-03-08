from flask_wtf import FlaskForm
from wtforms import StringField, DateField, TextAreaField, SubmitField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired


dr = [DataRequired()]

class JournalForm(FlaskForm):
    text = TextAreaField('text', dr)
    mood = TextAreaField('mood', dr)
    currentdate = DateField('date', dr)
    userId = IntegerField()
    submit = SubmitField('Submit')