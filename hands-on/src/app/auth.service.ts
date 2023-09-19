import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  
  constructor() { }

  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 1000);
        setTimeout(() => {
          reject(this.loggedIn);
        },2000);
      }
    );
    return promise;
  }
  
  login(){
    this.loggedIn = true;
  }
  
  logout(){
    this.loggedIn = false;
  }


}
