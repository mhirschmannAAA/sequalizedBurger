module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  });
  return Post;
}
