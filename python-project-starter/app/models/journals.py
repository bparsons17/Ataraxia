from .db import db

class Journal(db.Model):
    __tablename__ = 'journals'


    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(255), nullable=False)
    mood = db.Column(db.String(255), nullable=False)
    currentDate = db.Column(db.Date)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))


    user = db.relationship("User", back_populates="journal")




    def to_dict(self):
        return {
            "id": self.id,
            "text": self.text,
            "mood": self.mood,
            "currentDate": self.currentDate,
            "userId": self.userId
        }