// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const comments = sequelizeClient.define('comments', {
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    commentable: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  comments.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    comments.belongsTo(models.posts,
      {
        foreignKey:'commentableId',
        constraints: false,
        as:'posts'
      });
    comments.belongsTo(models.pages,
      {
        foreignKey:'commentableId',
        constraints: false,
        as:'pages'
      });
  };

  return comments;
};
