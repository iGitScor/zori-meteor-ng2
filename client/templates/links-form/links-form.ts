import {Component, View} from 'angular2/core';

import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

import {Router} from 'angular2/router';

import {Links} from 'collections/links';

import {ValidationService} from 'validators/service';

@Component({
  selector: 'links-form'
})
@View({
  templateUrl: '/client/templates/links-form/links-form.html'
})
export class LinksForm {
  linksForm: ControlGroup;

  constructor(private router: Router) {
    var fb = new FormBuilder();
    this.linksForm = fb.group({
      url: ['', Validators.compose([Validators.required, ValidationService.urlValidator])],
      public: [false]
    });
  }

  addLink(link) {
    if (this.linksForm.valid) {
      Links.insert({
        url: link.url,
        public: link.public,
        owner: Meteor.userId(),
        nbClick: 0
      });

      // TODO: add the possibility to add another link without redirect
      // (<Control>this.linksForm.controls['url']).updateValue('');
      // (<Control>this.linksForm.controls['public']).updateValue(false);
      this.router.navigate(['LinksList']);
    }
  }
}
