from .db import db

class Comment(db.Model):
    __tablename__ = 'comments'


    id = db.Column(db.Integer, primary_key=True)
    commentText = db.Column(db.String(255), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey('posts.id'))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))


    user = db.relationship("User", back_populates="comments")
    post = db.relationship("Post", back_populates="comments")




    def to_dict(self):
      return {
        "id": self.id,
        "postText": self.postText,
        "userId": self.userId
      }