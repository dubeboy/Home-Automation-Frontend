import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {ComponentsComponent} from './component/components/components.component';
import {SensorsComponent} from './component/components/sensors/sensors.component';
import {ActuatorsComponent} from './component/components/actuators/actuators.component';
import {SensorWidgetComponent} from './component/components/sensors/sensor-widget/sensor-widget.component';
import {ActuatorWidgetComponent} from './component/components/actuators/actuator-widget/actuator-widget.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {FlowsComponent} from './component/flows/flows.component';
import {FlowComponent} from './component/flows/flow/flow.component';
import {HttpClientModule} from '@angular/common/http';
import {PopoverModule} from 'ngx-popover';
import {ComponentsService} from './service/component/components.service';
import {RouterModule, Routes} from '@angular/router';
import {ComponentDetailComponent} from './component/components/component-detail/component-detail.component';
import {FlowService} from './service/flow/flow.service';
import {CapabilityService} from './service/capability/capability.service';

const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'component/:id', component: ComponentDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ComponentsComponent,
    SensorsComponent,
    ActuatorsComponent,
    SensorWidgetComponent,
    ActuatorWidgetComponent,
    NavbarComponent,
    FlowsComponent,
    FlowComponent,
    ComponentDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    PopoverModule
  ],
  providers: [
    ComponentsService,
    FlowService,
    CapabilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
