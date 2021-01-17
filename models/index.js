const User = require('./User');
const ToDo = require('./ToDo');
const Recipe = require('./Recipe');
const Gift = require('./Gift');

//create associations
User.hasMany(ToDo, {
    foreignKey: 'user_id'
});

ToDo.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Recipe, {
    foreignKey: 'user_id'
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Gift.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


module.exports = { User, ToDo, Recipe, Gift };