import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { OverComponent } from './over/over.component';
import { WatchComponent } from './watch/watch.component';

@NgModule({
  declarations: [DynamicComponentComponent, MobileComponent, LaptopComponent, OverComponent, WatchComponent],
  imports: [CommonModule],
  exports: [DynamicComponentComponent],
})
export class DynamicComponentsModule {}
