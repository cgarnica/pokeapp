import { Component, OnInit, NgZone } from '@angular/core';
import { ILogin } from '../../models/interfaces/auth';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import * as fromAuth from "../../reducers";
import * as Auth from "../../actions/auth"
import { MessagesService } from 'src/app/alerts/services/messages.service';
import { User, UserInfo } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error$ = this.store.pipe(select(fromAuth.getError));

  constructor(private authService: AuthService, private router: Router, private zone: NgZone,
    private store: Store<fromAuth.State>, private msgService: MessagesService) { }

  ngOnInit() {
    this.error$.subscribe(
      error => {
        this.msgService.message({msg: 'Usuario o Contraseña invalida', type: 'error'});
      }
    );
  }

  auth(event: ILogin) {
    if(event){
      this.store.dispatch(new Auth.Login(event));
      this.authService.loginWithEmail(event)
      .then(
        user => {
          localStorage.setItem('bzgPokeAppTwo', JSON.stringify(user));
          this.store.dispatch(new Auth.LoginSuccessful(<UserInfo>user.user.toJSON()));
          this.router.navigate(['main']);
        },
        error => {
          this.store.dispatch(new Auth.LoginError(error));
        }
      );
    }
  }

  signWithGoogle(event) {
    if(event) {
      this.store.dispatch(new Auth.Login(event));
      this.authService.loginWithGoogle()
      .then(
        user => {
          localStorage.setItem('bzgPokeAppTwo', JSON.stringify(user));
          this.store.dispatch(new Auth.LoginSuccessful(<UserInfo>user.user.toJSON()));
          this.zone.run(
            _ => {
              this.router.navigate(['main']);
            }
          );          
        },
        error => {
          this.store.dispatch(new Auth.LoginError(error));
        }
      );
    }
  }

}
