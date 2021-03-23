from .db import db

class Comment(db.Model):
    __tablename__ = 'comments'


    id = db.Column(db.Integer, primary_key=True)
    postId = db.Column(db.Integer, db.ForeignKey('posts.id'))
    commentText = db.Column(db.String(255), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))


    user = db.relationship("User", back_populates="comments")
    post = db.relationship("Post", back_populates="comments")




    def to_dict(self):
      username = self.user.username
      firstname = self.user.firstname
      lastname = self.user.lastname
      return {
        "id": self.id,
        "commentText": self.commentText,
        'postId': self.postId,
        "userId": self.userId,
        'username': username,
        'firstname': firstname,
        'lastname': lastname
      }