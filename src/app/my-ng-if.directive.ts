import {
  Directive,
  EmbeddedViewRef, Injector,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {Mode} from "./app.component";

@Directive({
  selector: '[modeCheck]',
  standalone: true
})
export class MyNgIfDirective implements OnChanges {
  Mode = Mode;
  private _viewRef: EmbeddedViewRef<any>|null = null;

  constructor(private _viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
  }

  private _modeCheck: Mode | null = null;

  @Input()
  public modeCheck: Mode | null = null;

  @Input()
  public modeCheckElse: TemplateRef<any> | null = null;

  @Input()
  public modeCheckContext: Object | null = null;

  @Input()
  public modeCheckInjector: Injector | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    const viewContainerRef = this._viewContainerRef;
    if (changes['modeCheck'].currentValue === 'View' || changes['modeCheckElse'] || changes['modeCheckContext']) {
      const viewContainerRef = this._viewContainerRef;

      if (this._viewRef) {
        viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef))
      }

      if (this.modeCheck) {
        const {
          modeCheckElse: template,
          modeCheckContext: context,
          modeCheckInjector: injector
        } = this;
        if (template) {

          this._viewRef = viewContainerRef.createEmbeddedView(
            template, context, injector ? {injector} : undefined
          )
        }
      } else {
        this._viewRef = null
      }
    } else { // @ts-ignore
      if ( changes['modeCheck'].currentValue === 'Edit' || changes['modeCheckElse'] || changes['modeCheckContext']) {
            if (this._viewRef) {
              viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef))
            }
           const {
              modeCheckElse: template,
              modeCheckContext: context,
              modeCheckInjector: injector
            } = this;
            this._viewRef = viewContainerRef.createEmbeddedView(
              this.templateRef, context, injector ? {injector} : undefined
            )
          }
    }
  }


}

export class ModeCheckContext {
  $implicit: string | null = null;
}

