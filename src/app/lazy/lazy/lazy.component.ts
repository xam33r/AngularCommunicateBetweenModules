import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from 'src/app/communicator';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor(private com:CommunicatorService) { }

  moreLazy:any;
  ngOnInit() {

    this.com.emitMoreLazy().subscribe ( more=>{

    this.moreLazy = more;
    })
  }


  sayIamLazy()
  {
    this.com.sayLazy('I am lazy');
  }


  
}
