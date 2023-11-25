const Client = require("../models/client.model");
const User = require("../models/users.model");

const onboardClient = async (req, res) => {
  const {
    organizationName,
    location,
    state,
    timeZone,
    currency,
    language,
    clientType,
    phoneNumber,
  } = req.body;
  const { id } = req.user;

  try {
    const user = await User.findById(id);
    if (!user) {
      throw Error("Not authorized");
    }

    if (
      !(
        organizationName &&
        location &&
        state &&
        timeZone &&
        currency &&
        language &&
        phoneNumber
      )
    ) {
      throw Error("All fields are required");
    }

    // TODO: check using Phone number and organization name
    const exists = await Client.findOne({ organizationName });
    if (exists) {
      throw Error("Organization already exists");
    }
    
    await Client.create({
      organizationName,
      location,
      state,
      timeZone,
      currency,
      language,
      phoneNumber,
      clientType,
      addedBy: id,
    });

    const dataInfo = {
      message: "Client onboarded successfully",
    };
    res.status(200).json(dataInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getClients = async (req, res) => {
    const keySearch = req.query.keySearch;
    try {
        const clients = await Client.find({
            $or: [
                { organizationName: { $regex: keySearch, $options: "i" } },
                { location: { $regex: keySearch, $options: "i" } },
                { state: { $regex: keySearch, $options: "i" } },
                { timeZone: { $regex: keySearch, $options: "i" } },
                { currency: { $regex: keySearch, $options: "i" } },
                { language: { $regex: keySearch, $options: "i" } },
                { phoneNumber: { $regex: keySearch, $options: "i" } },
            ],
        }).select("-__v")
        .populate({
            path:"addedBy",
            select:"-password -__v -createdAt -updatedAt"
        })
        res.status(200).json(clients);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    }

module.exports = { onboardClient, getClients };
