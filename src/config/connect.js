import mongoose from "mongoose";

export const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to database");
    }
};
