import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Add a new email to the waitlist
export const addToWaitlist = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(args.email)) {
      throw new Error("Invalid email format");
    }

    try {
      // Check if the email already exists
      const existingEntry = await ctx.db
        .query("waitlist")
        .withIndex("by_email", (q) => q.eq("email", args.email))
        .first();

      if (existingEntry) {
        // Return the existing entry without creating a duplicate
        return { success: true, message: "Email already registered", isNew: false };
      }

      // Add the email to the waitlist
      const id = await ctx.db.insert("waitlist", {
        email: args.email,
        createdAt: Date.now(),
      });

      return { 
        success: true, 
        message: "Successfully joined the waitlist", 
        isNew: true,
        id
      };
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      throw new Error("Failed to join waitlist. Please try again later.");
    }
  },
});

// Get all waitlist entries - for admin use
export const getAllWaitlistEntries = query({
  handler: async (ctx) => {
    const entries = await ctx.db.query("waitlist").collect();
    
    // Sort by creation date (newest first)
    return entries.sort((a, b) => b.createdAt - a.createdAt);
  },
});

// Get total count of waitlist entries
export const getWaitlistCount = query({
  handler: async (ctx) => {
    const waitlist = await ctx.db.query("waitlist").collect();
    return waitlist.length;
  },
});

// Delete a specific entry from the waitlist - for admin use
export const deleteWaitlistEntry = mutation({
  args: { id: v.id("waitlist") },
  handler: async (ctx, args) => {
    try {
      await ctx.db.delete(args.id);
      return { success: true, message: "Entry deleted successfully" };
    } catch (error) {
      console.error("Error deleting waitlist entry:", error);
      throw new Error("Failed to delete entry. Please try again.");
    }
  },
});

// Delete all entries from the waitlist - for admin use
export const clearWaitlist = mutation({
  handler: async (ctx) => {
    try {
      const allEntries = await ctx.db.query("waitlist").collect();
      
      // Delete each entry one by one
      for (const entry of allEntries) {
        await ctx.db.delete(entry._id);
      }
      
      return { 
        success: true, 
        message: "Waitlist cleared successfully", 
        count: allEntries.length 
      };
    } catch (error) {
      console.error("Error clearing waitlist:", error);
      throw new Error("Failed to clear waitlist. Please try again.");
    }
  },
})
