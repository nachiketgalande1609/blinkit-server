import mongoose from "mongoose";
import "dotenv/config.js";
import { Product, Category } from "./src/models/index.js";
import { categories, products } from "./seedData.js";

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        await Product.deleteMany({});
        await Category.deleteMany({});

        const categoryDocs = await Category.insertMany(categories);
        const categoryMap = categoryDocs.reduce((map, category) => {
            map[category.name] = category._id;
            return map;
        }, {});

        const productWithCategoryIds = products.map((product) => ({
            ...product,
            category: categoryMap[product.category],
        }));

        await Product.insertMany(productWithCategoryIds);
        console.log("Database seeded successfully");
    } catch (error) {
        console.log("Error while seeding: ", error);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();