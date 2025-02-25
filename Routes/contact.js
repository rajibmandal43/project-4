import express from "express";
import {
  deleteContactById,
  getAllContact,
  getContactById,
  getContactByUserId,
  newContact,
  updateContactById,
} from "../Controllers/contact.js";
import { isAthenticated } from "../Middlewares/Auth.js";

const router = express.Router();

// new contact
// @api dsc :- creating contact
// @api method :- post
// @api endPoint :- /api/contact/new
router.post("/new", isAthenticated, newContact);

// get all contact
router.get("/", getAllContact);

// get contact by id
router.get("/:id", getContactById);

// update contact by id
router.put("/:id",isAthenticated, updateContactById);

// delete contact by id
router.delete("/:id",isAthenticated, deleteContactById);

// get user specific contact
router.get("/userid/:id",getContactByUserId);

export default router;