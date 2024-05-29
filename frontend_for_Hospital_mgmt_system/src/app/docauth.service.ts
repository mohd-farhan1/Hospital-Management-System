import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username1:string,password1:string){
    if(username1=="farhan"&&password1=="12345"){
      sessionStorage.setItem('username1',username1);
      return true;``
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("doctor is login");
    let user = sessionStorage.getItem('username1');
    console.log(user);
    return !(user==null);
  }
  logout(){
    console.log("doctor is logout");
    sessionStorage.removeItem('username1');

  }
}
