const { Text, Checkbox, Password } = require('@keystonejs/fields');
module.exports = {
    fields: {
      name: {
        type: Text
      },
      email: {
        type: Text,
        isUnique: true,
      },
      isAdmin: {
        type: Checkbox,
      },
      password: {
        type: Password,
      },
    },

    // List-level access controls
  
    // access: {
    //   read: access.userIsAdminOrOwner,
    //   update: access.userIsAdminOrOwner,
    //   create: access.userIsAdmin,
    //   delete: access.userIsAdmin,
    //   auth: true,
    // },
  }
  