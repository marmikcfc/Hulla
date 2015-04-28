Meteor.users.allow({
    insert: function (userId, doc) {
        return (userId === doc._id);
    },
    update: function (userId, doc, fields, modifier) {
        return userId === doc._id;
    }
});

/*
Notificationss.allow({
    insert: function (userId, doc) {
        return userId;
    },
    update: function (userId, doc, fields, modifier) {
        return userId;
    }
});
*/