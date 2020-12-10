import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faKey, faUser, faUserTag } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  faKey = faKey;
  faUser = faUser;
  faUserTag = faUserTag;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

  register(): void {
    console.log(this.registerForm.value);
  }
}
