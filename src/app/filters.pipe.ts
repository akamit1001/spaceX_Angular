import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(dummyData: any[], filter: any): any {
    if (!dummyData || !filter) {
        return dummyData;
       
    }

    // console.log(filter);
    // let user;
    // user =  dummyData.filter(function(item) {
      

    //    for (var key in filter) {

    //     if (item[key] === undefined || item[key] !== filter[key]){
    //       return false;
    //   } else if (item[key] == filter[key]){
    //           return true;
    //   }
    // }
    //   return true;    
      
    // });

    // return user;
    
    
    // return dummyData.filter(dummyDatas => dummyDatas.launch_success === filter.launch_success && 
    //   dummyDatas.launch_year.indexOf(filter.launch_year) !== -1 && 
    //   dummyDatas.rocket.first_stage.cores[0].land_success === filter.land_success);
 }

}
