const {
  Users
} = require("../../models");

exports.getUser = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const user = await Users.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password", "isAdmin"],
      },
    });

    res.send({
      status: "success",
      data: {
        user,
      }
    })

  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "password", "isAdmin"],
      },
    });

    res.send({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    await Users.destroy({
      where: {
        id: id,
      },
    });

    res.send({
      status: "success",
      message: `User with ID ${id} succesfuly deleted`
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};