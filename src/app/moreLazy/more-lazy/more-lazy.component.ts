import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from 'src/app/communicator';

@Component({
  selector: 'app-more-lazy',
  templateUrl: './more-lazy.component.html',
  styleUrls: ['./more-lazy.component.css']
})
export class MoreLazyComponent implements OnInit {

  constructor(private com:CommunicatorService) { }
  lazySays:any;
  ngOnInit() {

    this.com.emitLazy().subscribe( lazy =>{

      console.log(lazy);
      this.lazySays = lazy;
    })
  }


  sayIamMoreLazy()
  {

    this.com.sayMoreLazy('I am more lazy');
  }
}
