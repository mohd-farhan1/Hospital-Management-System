import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username2:string,password2:string){

    if(username2=="Admin"&& password2=="12345"){
      sessionStorage.setItem('username2',username2);
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("Admin is login");
    let user = sessionStorage.getItem('username2');
    console.log(user);
    return !(user==null);
  }
  logout(){
    console.log("Admin is logout");
    sessionStorage.removeItem('username2');

  }

}
