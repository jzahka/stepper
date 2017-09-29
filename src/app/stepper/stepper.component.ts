import { Directive, Component, AfterContentInit, ContentChildren, ContentChild, Inject,
  QueryList, Input, ViewContainerRef, ViewChild, forwardRef, TemplateRef, ViewEncapsulation,
  HostBinding } from '@angular/core';

import { StepLabelDirective } from './step-label.directive';
import { StepContentDirective } from './step-content.directive';

@Component({
  selector: 'vf-step',
  template: ''
})
export class StepComponent {
  @ContentChild(StepContentDirective) _content: StepContentDirective;
  @ContentChild(StepLabelDirective) _label: StepContentDirective;

  constructor(
    // work around for circular dependency
    @Inject(forwardRef(() => StepperComponent)) private _stepper: StepperComponent) {}

  select() {
    this._stepper.select(this);
  }

}

@Directive({selector: '[appHeaderPlaceholder]'})
export class HeaderPlaceholderDirective {
  constructor(public viewContainer: ViewContainerRef) { }
}

@Directive({selector: '[appContentPlaceholder]'})
export class ContentPlaceholderDirective {
  constructor(public viewContainer: ViewContainerRef) { }
}

@Component({
  selector: 'vf-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepperComponent implements AfterContentInit {
  @HostBinding('class') className = 'vf-stepper';
  @ContentChildren(StepComponent) _steps: QueryList<StepComponent>;
  @ViewChild(ContentPlaceholderDirective) _contentPlaceholder: ContentPlaceholderDirective;

  @Input() get selectedIndex() { return this._selectedIndex; }
  set selectedIndex(index: number) {
    this._selectedIndex = index;
    this._renderSelected();
  }
  _selectedIndex: number;

  constructor() { }

  ngAfterContentInit() {
    this.selectedIndex = this.selectedIndex || 0;
  }

  next() {
    this.selectedIndex = Math.min(this.selectedIndex + 1, this._steps.length - 1);
  }

  previous() {
    this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
  }

  select(step: StepComponent) {
    this.selectedIndex = this._steps.toArray().indexOf(step);
  }

  private _renderSelected() {
    const current = this._steps.toArray()[this.selectedIndex];
    this._contentPlaceholder.viewContainer.clear();
    this._contentPlaceholder.viewContainer.createEmbeddedView(current._content.templateRef, {}, 0);
  }

}
