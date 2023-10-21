import {AfterViewInit, Component, inject, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {WidgetStateService} from "../widget-state.service";
import {WidgetActionsService} from "../widget-actions.service";

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})

export class WeatherWidgetComponent implements AfterViewInit{
  state = inject(WidgetStateService);
  actions = inject(WidgetActionsService);

  /****** CreteEmbeddedView ************/
  // An imperative way of writing code ie without using ngTemplateOutlet
  // All the code written below can be replaced by ngTemplateOutlet structural directive

  @ViewChild('container', {read: ViewContainerRef}) container !: ViewContainerRef;
  @ViewChild('defaultHeader') headerTemplate !:TemplateRef<any>;
  ngAfterViewInit() {
    this.container.createEmbeddedView(this.headerTemplate);
  }

  /***********************/

}
