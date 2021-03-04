from .db import db

class Goal(db.Model):
    __tablename__ = 'goals'


    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    steps = db.Column(db.String(500), nullable=False)
    deadline = db.Column(db.Date)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))


    user = db.relationship("User", back_populates="goals")




    def to_dict(self):
        return {
        "id": self.id,
        "title": self.title,
        "description": self.description,
        "steps": self.steps,
        "deadline": self.deadline,
        "userId": self.userId
    }