import {
  Component,
  ComponentRef,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LaptopComponent } from '../laptop/laptop.component';
import { MobileComponent } from '../mobile/mobile.component';
import { OverComponent } from '../over/over.component';
import { WatchComponent } from '../watch/watch.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css'],
})
export class DynamicComponentComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  productNames: any = {
    mobile: 'mobile',
    laptop: 'laptop',
    over: 'over',
    watch: 'watch',
  };

  components = new Map<string, ComponentRef<any>>();
  index: number = 0;

  constructor() {}

  ngOnInit(): void {}

  createComponent(componentName: string) {
    const componentType = this.getComponentType(componentName);
    let uniqueName = componentName + '-' + this.index.toString();
    const component = this.container.createComponent(componentType);
    component.instance.name = uniqueName;
    this.components.set(uniqueName, component);
    component.instance.closed.subscribe((res: any) => {
      this.deleteComponent(res.name);
    });
    this.index++;
  }

  deleteComponent(componentName: string) {
    if (this.components.has(componentName)) {
      this.components.get(componentName)?.destroy();
      this.components.delete(componentName);
    }
  }

  getComponentType(name: string): Type<any> {
    let type: Type<any> = MobileComponent;
    switch (name) {
      case this.productNames.mobile: {
        type = MobileComponent;
        break;
      }

      case this.productNames.laptop: {
        type = LaptopComponent;
        break;
      }

      case this.productNames.over: {
        type = OverComponent;
        break;
      }

      case this.productNames.watch: {
        type = WatchComponent;
        break;
      }
    }
    return type;
  }
}
