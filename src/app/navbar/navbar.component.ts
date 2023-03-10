import { AuthService } from '../Auth-Service/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=false;
constructor(private _AuthService:AuthService){}

ngOnInit(): void {this.alreadyLogin();}

alreadyLogin()
{
this._AuthService.userData.subscribe({
  next:()=>{


    if(this._AuthService.userData.getValue() != null)
    {


      this.isLogin=true;
    }
    else{
      this.isLogin=false;
    }
  }
})

}

logOut()
{
  this._AuthService.signOut();
}

}
