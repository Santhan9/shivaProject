import { Component, OnInit } from '@angular/core';
import {commonService} from '../services/comonservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
export interface ImageList {
 	[key:string]:{name: string}
}
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
	aRouteName:any;
	catList:any;
	catListKeys:any;
	headImage:String = "periperi";
	baseName:any;
	ImageList:ImageList = {
		"periperi":{name:"periperi"},
		"pizzas":{name:"pizza"},
		"mealdeals":{name:"mealdealNew"},
		"burgers":{name:"burger"}
	};
	//full menu data
	fullMenuData:any;
	selectedMenu:String:"pizzas";
	selctedMenuDeatails:any;

	constructor(public cService:commonService, public ARoute:ActivatedRoute, public router:Router) {
	}
	ngOnInit() {
    	if(this.ARoute.snapshot.queryParams['rName']){
    		this.baseName = this.ARoute.snapshot.queryParams['rName'];
    		this.headImage =  this.ImageList[this.baseName].name;
    	}	
    	//populate catogery data
		this.cService.getCatrgory().subscribe(
				(result)=>{ 
				 	this.catList = result;
				 	this.catListKeys = Object.keys(this.catList); 
				},
				(err) => {
					console.error(err);
				},
				() => {
					console.log('done retrieving data from service');
				});
		//populate category details list
		this.cService.getAllMenuDetails().subscribe(
				(result)=>{ 
					if(this.baseName) {
						this.fullMenuData = result;
						this.selctedMenuDeatails =  this.fullMenuData[this.baseName];
					}else{
						this.selctedMenuDeatails= this.fullMenuData[this.selectedMenu];
					}
				},
				(err) => {
					console.error(err);
				},
				() => {
					console.log('done retrieving data from service');
				});
	}
	//trigger on category list click
	catListClick(event,listName) {
		event.preventDefault();
		console.log(listName);
		this.selctedMenuDeatails= this.fullMenuData[listName];
	}
	goToCart() {
		this.router.navigate(['viewcart']);
	}
	
}