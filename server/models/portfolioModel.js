import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  labelSkills: {
    type: [String],
  },
  contacts: [],
  about: [],
  education: [],
  skillsList: [],
});
