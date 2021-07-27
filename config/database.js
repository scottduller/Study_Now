const mongoose = require("mongoose");
const config = require("config");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("SUCCESS! ... Connected to MongoDB");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
