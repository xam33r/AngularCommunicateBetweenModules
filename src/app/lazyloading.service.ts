import { Injectable, Compiler, Injector, Type, ViewContainerRef, ComponentFactoryResolver, NgModuleFactory, Inject } from '@angular/core';
import { LAZY_TOKENS } from './lazyToken';
import { lazyMods } from './lazyMods';

@Injectable({
  providedIn: 'root'
})
export class LazyloadingService {

  constructor(private injector: Injector,
    private compiler: Compiler,
    @Inject(LAZY_TOKENS) private lazyMods: { [key: string]: () => Promise<NgModuleFactory<any> | Type<any>> }) { }


  async load(path: string, container: ViewContainerRef, selector:string) {
    const ngModuleOrNgModuleFactory = await this.lazyMods[path]();
 
    let moduleFactory;

    if (ngModuleOrNgModuleFactory instanceof NgModuleFactory) {
      // this means its is web view
      moduleFactory = ngModuleOrNgModuleFactory;
    } else {
      // this means its is angular ivy
      moduleFactory = await this.compiler.compileModuleAndAllComponentsAsync(ngModuleOrNgModuleFactory);
    }

    const moduleRef = moduleFactory.ngModuleFactory.create(this.injector);

    const componentFactory = moduleFactory.componentFactories
    .find(e => e.selector === selector);

    const comp = container.createComponent(componentFactory);
  }
}
