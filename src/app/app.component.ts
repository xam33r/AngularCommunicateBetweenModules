import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { LazyloadingService } from './lazyloading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("lazyContainer", { read: ViewContainerRef, static: false }) lazyContainer: ViewContainerRef;
  @ViewChild("moreLazyContainer", { read: ViewContainerRef, static: false })  moreLazyContainer: ViewContainerRef;

constructor(private lazyLoader:LazyloadingService) {}

  title = 'Angular lazy loading modules without route.';

  loadLazy() {
    this.lazyContainer.clear();
    this.lazyLoader.load("lazy", this.lazyContainer, 'app-lazy');
  }
  
  loadMoreLazy() {
    this.moreLazyContainer.clear();
    this.lazyLoader.load("more-lazy", this.moreLazyContainer,'app-more-lazy');
  }
}
