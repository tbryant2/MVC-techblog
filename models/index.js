const Comment = require('./Comment'); 
const Post = require('./Post'); 
const User = require('./User'); 

Post.belongsTo(User, {
    foreignKey: 'userId', 
    onDelete: 'CASCADE'
}); 

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId', 
    onDelete: 'CASCADE'
}); 

module.exports= {
    User, 
    Post, 
    Comment
}; 