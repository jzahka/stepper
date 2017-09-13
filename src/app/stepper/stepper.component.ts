import { Directive, Component, AfterContentInit, ContentChildren, Inject,
  QueryList, Input, ViewContainerRef, ViewChild, forwardRef, TemplateRef } from '@angular/core';


@Directive({
  selector: '[appStep]'
})
export class StepDirective {

  constructor(
    public templateRef: TemplateRef<any>,
    @Inject(forwardRef(() => StepperComponent)) private _stepper: StepperComponent) {}

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
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements AfterContentInit {
  @ContentChildren(StepDirective) _steps: QueryList<StepDirective>;
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

  private _renderSelected() {
    const current = this._steps.toArray()[this.selectedIndex];
    this._contentPlaceholder.viewContainer.clear();
    this._contentPlaceholder.viewContainer.createEmbeddedView(current.templateRef, {}, 0);
  }

}
