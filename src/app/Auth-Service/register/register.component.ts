import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  registerData!: FormGroup; // Use non-null assertion operator
  hide = true;
  isLoading = false;

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('userToken') != null) {
      this._Router.navigate(['/']);
    }
    this.registerForm();
  }

  registerForm() {
    this.isLoading = false;
    this.registerData = new FormGroup({
      name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.pattern(/^[a-zA-Z0-9]{3,}$/), Validators.required]),
      rePassword: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.pattern(/^01\d{9}$/), Validators.required]),
    }, { validators: this.passwordMatchValidator });
  }
 // Custom validator function to check if "Password" and "Re-enter password" match
 passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
  const password = control.get('password');
  const rePassword = control.get('rePassword');

  if (!password || !rePassword) {
    return null; // If either control is null, return null to avoid validation errors
  }

  if (password.value !== rePassword.value) {
    rePassword.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  } else {
    rePassword.setErrors(null);
    return null;
  }
};

signUp(): void {
  console.log('SignUp button clicked');
  if (this.registerData.invalid) {
    return;
  }

  this.isLoading = true;

  console.log('Form data to be submitted:', this.registerData.value);

  this._AuthService.signUp(this.registerData.value).subscribe({
    next: () => {
      this._Router.navigate(['/home']);
    },
    error: (error) => {
      this.errorMessage = 'An error occurred. Please try again.';
      console.error(error);
      this.isLoading = false;
    }
  });
}

}
