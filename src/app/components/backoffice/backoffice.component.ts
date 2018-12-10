import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/providers/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {

   }

  ngOnInit() {

  }

  logOut(){
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
