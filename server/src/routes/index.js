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
   loginAuth, adminAuth
} = require("../middlewares/auth");

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user", editUser);
router.delete("/user/:id", deleteUser);

router.get("/books", getBooks);
router.get("/book/:id", getBookDetail);
router.post("/book", uploadBookNew("bookThumbnail", "bookFile"), adminAuth, addBook);
router.patch("/book/:id", adminAuth, editBook);
router.delete("/book/:id", adminAuth, deleteBook);

router.get("/transactions", adminAuth, getTransactions);
router.get("/transaction/:id", adminAuth, getTransaction);
router.post("/transaction", uploadTransactionProof("transferProof"), loginAuth, addTransaction);
router.patch("/transaction/:id", adminAuth, editTransaction);

router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", loginAuth, checkAuth);

module.exports = router;