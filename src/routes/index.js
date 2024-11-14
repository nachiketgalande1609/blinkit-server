import { categoryRoutes, productRoutes } from "./product.js";
import { authRoutes } from "./user.js";
import { orderRoutes } from "./order.js";

const prefix = "/api";

export const registerRoutes = (fastify) => {
    fastify.register(authRoutes, { prefix: prefix });
    fastify.register(productRoutes, { prefix: prefix });
    fastify.register(categoryRoutes, { prefix: prefix });
    fastify.register(orderRoutes, { prefix: prefix });
};
