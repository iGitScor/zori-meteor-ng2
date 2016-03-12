import {Component, Input, ElementRef} from 'angular2/core';

import {Links} from 'collections/links';

let linkIdentifier = 1;

@Component({
  selector: 'zori-link',
  templateUrl: '/client/templates/link/link.html',
})
export class ZoriLinkComponent {

  // Unique id
  id = linkIdentifier++;

  // Dom elements
  domLink : any;

  // Directive input from template
  @Input() link: any;

  // Component style variables
  height : number = 10;
  hue    : number = 0;

  // Inject ElementRef to modify DomElement style
  constructor(private domElement: ElementRef) {
  }

  /** Component methods **/

  ngOnInit() {
    this.domLink = this
      .domElement
      .nativeElement
      .querySelector('li');
    this._refresh();
  }

  ngOnDestroy() {
    this.domLink = null;
  }

  /** Private methods **/

  private _save(content: any) {
    Links.update(this.link._id, {
      $set: content
    });
  }

  private _refresh() {
    this._componentStyle();
    this._resize();
    this._colorize();
  }

  private _componentStyle() {
    this.height  = Math.max(Math.min(this.link.nbClick * 3 + 7, 100), 10);
    this.hue     = Math.min(this.link.nbClick * 10, 100);
  }

  private _resize() {
    this.domLink.style.height = this.height + '%';
    this.domLink.style.top = (100 - this.height) / 2 + '%';
  }

  private _colorize() {
    this.domLink.classList.add('chart-item-block--style--' + this.hue);
  }

  private _incrementClick() {
    // Increment link clicks
    this.link.nbClick++;
    // Change style
    this.domLink.classList.remove('chart-item-block--style--' + this.hue);
    // Refresh element display
    this._refresh();
    // Save in the database
    this._save({
      nbClick: this.link.nbClick
    });
  }

  /** Public methods **/

  play() {
    this._incrementClick();
    // TODO: soundcloud & youtube player
    window.open(this.link.url, '_blank');
  }

}
