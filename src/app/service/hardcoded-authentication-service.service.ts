import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationServiceService {

  constructor() { }

  authenticate(username: string, password: string){
  
    if(username ==='khumalo@gmail.com' && password==='125'){
      sessionStorage.setItem('authenticatedUser', username);
      return true;

    }else{return false;}
  }

   isUserLoggedin(){
     let user: string = sessionStorage.getItem('authenticatedUser')
     return !(user === null);
    }

    logout(){
      sessionStorage.removeItem('authenticatedUser');
    }
}
