import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
    })
export class DataService {

    constructor(private httpclient: HttpClient) {}
    
    

    getData(year: string, launch:string ,  land:string): Observable<any>{

        
        let multipleparams =  new HttpParams();

        if (year != undefined) {
            multipleparams = multipleparams.append('launch_year' , year);
            //console.log(year);

        }
        if (launch != undefined ) {

            multipleparams = multipleparams.append('launch_success' , launch);

        }
        if (land != undefined) {

            multipleparams = multipleparams.append('land_success' , land);

        }      

        return  this.httpclient.get<{any}>('https://api.spacexdata.com/v3/launches?limit=100',
        {
           
            params: multipleparams
          
          })
        .pipe(map(responseData => {
            return responseData;
           // console.log(responseData);
            }
        
          ), catchError(errorules => {
        
            return throwError(errorules);
        
             })
          );

    }
}