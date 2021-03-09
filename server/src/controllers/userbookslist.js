const { Userlistbooks, Books } = require("../../models");

exports.addListbook = async (req, res) => {
  try {
    const { users, idBook } = req.body;
    const listbook = await Userlistbooks.create({
      users,
      idBook,
    });

    res.send({
      status: "Book success add to listbooks",
      data: {
        listbook,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

exports.getListbooks = async (req, res) => {
  try {
    const { users } = req.params
    
    const listbooks = await Userlistbooks.findAll({
      where: {
         users,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!listbooks) {
      return res.status(400).send({
        message: `Users with id ${users} did not have book list`,
      });
    }

    for (i = 0; i < listbooks.length; i++) {
      const book = await Books.findOne({
        where: {
          id: listbooks[i].idBook,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      listbooks[i].idBook = book;
    }

    res.send({
      status: "success",
      data: {
        listbooks,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};