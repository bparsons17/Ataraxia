from .db import db

class Post(db.Model):
    __tablename__ = 'posts'


    id = db.Column(db.Integer, primary_key=True)
    postText = db.Column(db.String(255), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))


    user = db.relationship("User", back_populates="posts")
    comments = db.relationship("Comment", back_populates="post")
    postLikes = db.relationship("PostLike", back_populates="post")


    def to_dict(self):
        return {
          "id": self.id,
          "postText": self.postText,
          "userId": self.userId
        }

