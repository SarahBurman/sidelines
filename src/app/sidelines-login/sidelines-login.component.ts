import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'sidelines-login-sidelines-login',
  templateUrl: './sidelines-login.component.html',
  styleUrls: ['./sidelines-login.component.scss'],
})
export class SidelinesLoginComponent {
  userName = new FormControl<string>("", {
    validators: [Validators.required],
    updateOn: 'blur'
  });
  message: BehaviorSubject<string> = new BehaviorSubject("");
  error = false;

  constructor(private usersService: UsersService){}

  submit(): void {
    if(this.userName.value){
      if(this.usersService.isUserExist(this.userName.value)){
        this.message.next('user already exist');
        this.error = true;
      }
      else{
        this.usersService.addUser(this.userName.value);
        this.message.next('user signed up');
        this.error=false;
      }
    }
  }
}