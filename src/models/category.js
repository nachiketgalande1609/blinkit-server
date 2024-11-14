import mongoose from "mongoose";

const catregorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
});

export const Category = mongoose.model("Category", catregorySchema);
