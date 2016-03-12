import {Component, View} from 'angular2/core';

import {RouteParams} from 'angular2/router';

import {Links} from 'collections/links';

import {RouterLink} from 'angular2/router';

import {RequireUser} from 'meteor-accounts';

import {MeteorComponent} from 'angular2-meteor';

@Component({
  selector: 'link-details'
})
@View({
  templateUrl: '/client/templates/link-details/link-details.html',
  directives: [RouterLink]
})
@RequireUser()
export class LinkDetails extends MeteorComponent {
  link: Link;

  constructor(params: RouteParams) {
    super();
    var linkId = params.get('linkId');
    this.subscribe('link', linkId, () => {
      this.link = Links.findOne(linkId);
    }, true);
  }

  saveLink(link) {
    if (Meteor.userId()) {
      Links.update(link._id, {
        $set: {
          url: link.url
        }
      });
    } else {
      alert('Please log in to change this link');
    }
  }
}
