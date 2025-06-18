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

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
