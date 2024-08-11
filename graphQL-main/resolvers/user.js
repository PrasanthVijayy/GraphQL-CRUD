import User from "../models/user.js";

const resolvers = {
  Query: {
    getUsers: async ({ id }) => {
      // Get user by id
      try {
        const users = User.findOne({ where: { id } });
        return users;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Unable to fetch users.");
      }
    },

    getUsers: async () => {
      // Get all users
      try {
        const users = User.findAll();
        return users;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Unable to fetch users.");
      }
    },
  },

  Mutation: {
    createUser: async ({ input }) => {
      // Create user
      try {
        const user = User.create(input);
        return {
          success: true,
          message: "User created successfully.",
          user: user,
        };
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Unable to create user.");
      }
    },
  },

  updateUser: async ({ input }) => {
    // Update user
    try {
      const user = User.update(input, { where: { id: input.id } });
      return {
        success: true,
        message: "User updated successfully.",
        user: user,
      };
    } catch (error) {
      console.error("Error updating user:", error);
      throw new Error("Unable to update user.");
    }
  },

  deleteUser: async ({ id }) => {
    // Delete user
    try {
      const user = User.destroy({ where: { id } });
      return {
        success: true,
        message: "User deleted successfully.",
        user: user,
      };
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Unable to delete user.");
    }
  },
};

export default resolvers;
