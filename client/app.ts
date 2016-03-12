import {Component, View, NgZone, provide} from 'angular2/core';

import {bootstrap} from 'angular2-meteor';

import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';

import {LinksForm} from 'client/templates/links-form/links-form';

import {LinksList} from 'client/templates/links-list/links-list';

import {LinkDetails} from 'client/templates/link-details/link-details';

@Component({
    selector: 'app'
})
@View({
    templateUrl: '/client/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', as: 'LinksList', component: LinksList },
    { path: '/link/:linkId', as: 'LinkDetails', component: LinkDetails },
    { path: '/link/add', as: 'LinksForm', component: LinksForm }
])
class App {}

bootstrap(App, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
