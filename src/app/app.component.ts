import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email='something@gmail.com';
  emailFromCookie = ''
   constructor(private cookieService: CookieService){}
   
     public ngOnInit():void{
        this.emailFromCookie = this.cookieService.get("cookie.email");
    }
   /*constructor(private route: ActivatedRoute) {
    this.route
      .queryParams
      .subscribe(params => {
        this.email = params['email'];
        this.emailFromCookie = 
          console.log(this.email);
      });
   }*/

}