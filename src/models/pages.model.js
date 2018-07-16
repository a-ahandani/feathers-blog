// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const pages = sequelizeClient.define('pages', {
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
  pages.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    pages.hasMany(models.comments,
      {
        foreignKey:'commentableId',
        constraints: false,
        scope: {
          commentable: 'pages'
        }
      }); 
      pages.belongsToMany(models.tags,
        {
          through: {
            model: models["to_tags"],
            unique: false,
            scope: {
              taggable: 'pages'
            }
          },
          foreignKey: 'taggableId',
          constraints: false
        });
      pages.belongsToMany(models.categories,
          {
            through: {
              model: models["to_categories"],
              unique: false,
              scope: {
                categorizable: 'pages'
              }
            },
            foreignKey: 'categorizableId',
            constraints: false
      });
  };

  return pages;
};
