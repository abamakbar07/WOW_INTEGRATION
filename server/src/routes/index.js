const express = require("express");
const router = express.Router();

const {
   getUsers,
   deleteUser,
   getUser,
   editUser
} = require("../controllers/users");

const {
   getBooks,
   getBookDetail,
   addBook,
   editBook,
   deleteBook,
} = require("../controllers/books");

const {
   addTransaction,
   editTransaction,
   getTransaction,
   getTransactions,
} = require("../controllers/transactions");

const {
   register,
   login,
   checkAuth
} = require("../controllers/auth");

const {
   uploadBookNew
} = require("../middlewares/uploadBook");
const {
   uploadTransactionProof
} = require("../middlewares/uploadTransaction");

const {
   loginAuth, userAuth
} = require("../middlewares/auth");

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user/edit", editUser);
router.delete("/user/:id", deleteUser);

router.get("/books", getBooks);
router.get("/book/:id", getBookDetail);
router.post("/book", uploadBookNew("bookThumbnail", "bookFile"), userAuth, addBook);
router.patch("/book/:id", userAuth, editBook);
router.delete("/book/:id", userAuth, deleteBook);

router.get("/transactions", userAuth, getTransactions);
router.get("/transaction/:users", userAuth, getTransaction);
router.post("/transaction", uploadTransactionProof("transferProof"), userAuth, addTransaction);
router.patch("/transaction/:id", userAuth, editTransaction);

router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", userAuth, checkAuth);

module.exports = router;