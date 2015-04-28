Meteor.publish('userProfile', function (username) {
    "use strict";
      check(username, String);
  
    return Users.findFaster({username: username}, {fields: {'profile': 1, 'username': 1, 'roles': 1}});
});
