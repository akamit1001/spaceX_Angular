import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SpaceX Launch Programs';
  developerName = 'Amit Kumar';
  repeatButton = 2006;
  
  buttons = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
  ]

buttonClick(number: Number){
  //alert(number);
  this.year = number;
  this.dataservice.getData(this.year,this.launch,this.land);
}
  

  constructor(private dataservice: DataService){}

  // filterargs = {launch_year:"2020"};
  filterargs = {launch_success: false , launch_year:"2020"};

  dummyData:any;

 year;
 launch;
 land;

  ngOnInit(){
     this.dummyData = this.dataservice.getData(this.year,this.launch,this.land);
    
    
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
