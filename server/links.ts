import {Links} from 'collections/links';

function buildQuery(linkId?: string): Object {
  var isAvailable = {
    $or: [
      { public: true },
      {
        $and: [
          { owner: this.userId },
          { owner: { $exists: true } }
        ]
      }
    ]
  };

  if (linkId) {
    return { $and: [{ _id: linkId }, isAvailable] };
  }

  return isAvailable;
}

Meteor.publish('links', function () {
  return Links.find(buildQuery.call(this));
});

Meteor.publish('link', function (linkId: string) {
  return Links.find(buildQuery.call(this, linkId));
});
