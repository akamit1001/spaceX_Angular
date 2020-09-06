import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
    })
export class DataService {

    constructor(private httpclient: HttpClient) {}
    
    

    getData(){

        return  this.httpclient.get<{any}>('https://api.spacexdata.com/v3/launches?limit=100')
        .pipe(map(responseData => {
            return responseData;
           // console.log(responseData);
            }
        
          ), catchError(errorules => {
        
            return throwError(errorules);
        
             })
          );

       // return this.spaceData.slice();
    }
}