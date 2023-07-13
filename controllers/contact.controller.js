const Contact = require("../models/contactModel");

class ContactController {
  async getContacts(req, res) {
    console.log("The request body is");
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  };

  async createContact(req, res) {
    console.log("The request body is:", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400)
      throw new Error("All fields are mandatory !")
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
    });
    res.status(201).json(contact);
  };

  async getContact(req, res) {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(201).json(contact);
  };

  async updateContact(req, res) {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }

    const updateContact = await Contact.findByIdUpdate(
      req.params.id,
      req.body,
      { new: true }
    );


    res.status(201).json(updateContact);
  };

  async deleteContact(req, res) {
    res.status(201).json({ message: `Delete contact for ${req.params.id}` });
  };
}

module.exports = new ContactController();