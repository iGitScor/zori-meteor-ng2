import {Component, View} from 'angular2/core';

import {Links} from 'collections/links';

import {LinksForm} from 'client/templates/links-form/links-form';

import {RouterLink} from 'angular2/router';

import {AccountsUI} from 'meteor-accounts-ui';

import {MeteorComponent} from 'angular2-meteor';

import {ZoriLinkComponent} from 'client/templates/link/link.directive';

@Component({
  selector: 'links-list'
})
@View({
  templateUrl: '/client/templates/links-list/links-list.html',
  directives: [LinksForm, RouterLink, AccountsUI, ZoriLinkComponent]
})
export class LinksList extends MeteorComponent {
  links: Mongo.Cursor<Link>;

  constructor() {
    super();
    this.subscribe('links', () => {
      this.links = Links.find();
    }, true);
  }

  removeLink(link) {
    Links.remove(link._id);
  }

  search(value: string) {
    if (value) {
      this.links = Links.find({ url: value });
    } else {
      this.links = Links.find();
    }
  }
}
