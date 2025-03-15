const users = [];

const userService = {
  createUser: (user) => {
    users.push(user);
    return user;
  },

  getUser: (id) => {
    return users.find((user) => user.id === id);
  },

  updateUser: (id, updatedUser) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      return users[index];
    }
    return null;
  },

  deleteUser: (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const deletedUser = users.splice(index, 1);
      return deletedUser[0];
    }
    return null;
  },

  getAllUsers: () => {
    return users;
  },
};

module.exports = userService;
