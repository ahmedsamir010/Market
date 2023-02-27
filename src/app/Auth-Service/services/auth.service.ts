import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  userData:any=new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient,private _Router:Router){    this.alreadyLogin()}


  alreadyLogin():void{
    if(localStorage.getItem("userToken")!=null)
    {
     this.saveUserData();
    }
  }
  saveUserData()
  {
    let encodeToken=JSON.stringify(localStorage.getItem('userToken'));
    let decodeToken:object=jwtDecode(encodeToken);
  this.userData.next(decodeToken);
  }

//------------------------------------- Make Register ---------------------------------
signUp(userData:any): Observable<any>
{
  return this._HttpClient.post(`https://sticky-note-fe.vercel.app/signup`,userData)
}
//------------------------------------- Make Login ---------------------------------

signIn(userData:object): Observable<any>
{
  return this._HttpClient.post(`https://sticky-note-fe.vercel.app/signin`,userData)
}

//------------------------------------- Make Log out ---------------------------------
signOut()
{
  localStorage.removeItem("userToken")
  this.userData.next(null);
this._Router.navigate(['/login']);
}






}
