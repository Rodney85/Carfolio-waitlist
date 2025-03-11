import { ConvexReactClient } from "convex/react";

// Create a client instance with the deployed Convex URL
export const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL || "https://original-pika-674.convex.cloud");
