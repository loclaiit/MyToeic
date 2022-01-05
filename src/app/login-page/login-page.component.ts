import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public userId:string='';
  public userToken:string='';
  public messageTxt:string='';

  isInvalid:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  Click_Access()
  {
    // if(this.userId == 'admin' && this.userToken == '@123')
    //   this.router.navigate(['/admin']);
    // else
    // {
    //   this.checkAuthentication();
    // }
  }

}
