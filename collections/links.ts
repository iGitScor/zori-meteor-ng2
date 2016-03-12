export var Links = new Mongo.Collection<Link>('links');

Links.allow({
  insert: function() {
    return true;
  },
  update: function(userId, link, fields, modifier) {
    return fields.indexOf('nbClick') >= 0;
  },
  remove: function() {
    var user = Meteor.user();
    return !!user;
  }
});
