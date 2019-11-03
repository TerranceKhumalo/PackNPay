import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  username: string = 'Khumalo@gmail.com';
  password: string = '';
  errorMessage: string = 'Invelid Cradentials';
  invelidInput: boolean = false;

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationServiceService) { }

  ngOnInit() {
  }

  handelLogin(){
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){

        this.router.navigate(['register',this.username]);
        this.invelidInput = false;

      }else{
        this.invelidInput = true;
      }
    }

}
