/* =======================================================
 *
 * Created by anele on 2020/10/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { DatePipe } from '@angular/common';
import { HttpService } from './services/http.service';
import { UserInterface } from './interfaces/user-interface';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[DatePipe]
})
export class AppComponent implements OnInit, AfterViewInit {

    title = 'angular6app';
    apiData: any;


    @ViewChild('elements') elements: ElementRef;

    constructor( private service: HttpService, public datepipe: DatePipe ) {
        //this.loadApiData();
    }


    ngOnInit() {}


    ngAfterViewInit () {

        let el: HTMLElement = this.elements.nativeElement;
        const h_four = el.getElementsByTagName('h4')[0];
        const h_six = el.getElementsByTagName('h6')[0];

        //
        this.service.getData('api')
            .subscribe(
                (data: UserInterface) => {
                    this.apiData = data;
                    h_four.innerHTML = 'Hello My Name is';
                    h_six.innerHTML = data.name.first + ' '+ data.name.last;
                },

                (err: any) => {
                    console.log("Error Happened");
                    console.error(err);
                },
                () => {
                    //this.hideLoader();
                }
            );
    }


    onMouseEnter(context: string){
        const apiData: UserInterface = this.apiData;

        let el: HTMLElement = this.elements.nativeElement;
        const h_four = el.getElementsByTagName('h4')[0];
        const h_six = el.getElementsByTagName('h6')[0];

        switch (context) {
            case 'name':
                h_four.innerHTML = 'Hello My Name is';
                h_six.innerHTML = apiData.name.first + ' '+ apiData.name.last;
                break;
            case 'phone':
                h_four.innerHTML = 'My Phone Number is';
                h_six.innerHTML = apiData.phone;
                break;
            case 'email':
                h_four.innerHTML = 'My Email Address is';
                h_six.innerHTML = apiData.email;
                break;
            case 'location':
                h_four.innerHTML = 'My address is';
                h_six.innerHTML = apiData.location.street.number + ' '+ apiData.location.street.name + ' ' + apiData.location.city;
                break;
            case 'dob':
                h_four.innerHTML = 'My Birthday is';
                h_six.innerHTML = this.datepipe.transform(apiData.dob.date, 'dd/MM/yyyy') ;
                break;
            case 'login':
                h_four.innerHTML = 'My Password is';
                h_six.innerHTML = apiData.login.password;
                break;
            default:
                h_four.innerHTML = 'Hello My Name is';
                h_six.innerHTML = apiData.name.first + ' '+ apiData.name.last;
        }
    }

}
