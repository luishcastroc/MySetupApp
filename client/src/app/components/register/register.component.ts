import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { faKey, faUser, faUserTag } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from '@ngxs/router-plugin';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Register } from '@state/app.actions';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get username(): AbstractControl | null {
    return this.registerForm.get('username');
  }

  get name(): AbstractControl | null {
    return this.registerForm.get('name');
  }

  get password(): AbstractControl | null {
    return this.registerForm.get('password');
  }

  faKey = faKey;
  faUser = faUser;
  faUserTag = faUserTag;

  private ngUnsubscribe = new Subject();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private actions$: Actions,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.actions$
      .pipe(ofActionSuccessful(Register), takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.toastrService.success('Register Succesful.'));
  }

  register(): void {
    this.store.dispatch(new Register(this.registerForm.value));
  }

  cancelRegister(): void {
    this.registerForm.reset();
    this.store.dispatch(new Navigate(['/']));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
