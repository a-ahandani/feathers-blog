// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const posts = sequelizeClient.define('posts', {
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      body: {
          type: DataTypes.TEXT,
          allowNull: true
      },


  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  posts.associate = function (models) {
    posts.hasMany(models.comments,
      {
        foreignKey:'commentableId',
        constraints: false,
        scope: {
          commentable: 'posts'
        }
      }); 
      posts.belongsToMany(models.tags,
        {
          through: {
            model: models["to_tags"],
            unique: false,
            scope: {
              taggable: 'posts'
            }
          },
          foreignKey: 'taggableId',
          constraints: false
        });
      posts.belongsToMany(models.categories,
          {
            through: {
              model: models["to_categories"],
              unique: false,
              scope: {
                categorizable: 'posts'
              }
            },
            foreignKey: 'categorizableId',
            constraints: false
      });
    
  




  };

  return posts;
};
