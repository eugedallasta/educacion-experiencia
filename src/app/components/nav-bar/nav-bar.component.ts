import { Component, OnInit } from '@angular/core';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userLogged = this.loginService.getUserLogged();

 constructor(private SnackbarService: SnackBarService, private loginService:LoginService) { }

  openSnackBar(message:any, buttonText:any) {
    this.SnackbarService.openSnack(message, buttonText);
  }

  onLogOut(){
    this.loginService.logout();
  }

  ngOnInit(): void {
  }

}
