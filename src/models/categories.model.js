// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const categories = sequelizeClient.define('categories', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0
    },

  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  // eslint-disable-next-line no-unused-vars
  categories.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    categories.belongsToMany(models.posts,
      {
        through: {
          model: models["to_categories"],
          unique: false,
        },
        foreignKey: 'categoryId',
        constraints: false

      });
  };

  return categories;
};
