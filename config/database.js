const mongoose = require("mongoose");
const config = require("config");
const database = config.get("mongoURI");

const connectDatabase = async () => {
	try {
		await mongoose.connect(database, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		});
		console.log("Connection to MongoDB Successful!");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDatabase;
