import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SpaceX Launch Programs';

  constructor(private dataservice: DataService){}

  // filterargs = {launch_year:"2020"};
  filterargs = {launch_success: false , launch_year:"2020"};

  dummyData:any;

  

  ngOnInit(){
     this.dummyData = this.dataservice.getData();
    
    
    }
//     const filtered = Object.keys(raw)
//   .filter(key => allowed.includes(key))
//   .reduce((obj, key) => {
//     obj[key] = raw[key];
//     return obj;
//   }, {});

// console.log(filtered);
    getValue(){}
}
