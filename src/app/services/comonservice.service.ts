import { Injectable,OnInit} from '@angular/core';
/*import {Http} from '@angular/http';
import {map} from 'rxjs/operators';*/

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// import {Observable} from 'rxjs/Rx';

// @Injectable({
// 	providedIn:'root'
// })

@Injectable()

export class commonService implements OnInit {

	data:any;
	constructor(private  http:Http) {
	
	}

	public getCatrgory():Observable<any>{ 	
	    return   this.http.get('../assets/data/category.json').map( res => res.json() );     
	} 


	public getFavourites():Observable<any>{
		return   this.http.get('../assets/data/favourites.json').map( res => res.json() );
	}

	public getAllMenuDetails():Observable<any>{
		return   this.http.get('../assets/data/alldetail.json').map( res => res.json() );
	}


	ngOnInit() {

	}

}