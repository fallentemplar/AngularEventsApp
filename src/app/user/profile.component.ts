import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private auth: AuthService,
              private router: Router,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) {

  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues): void {
    if (this.profileForm.invalid) {
      return;
    }

    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
      this.toastr.success('Data updated successfuly');
    });
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  validateFirstName(): boolean {
    return this.firstName.untouched || this.firstName.valid;
  }

  validateLastName(): boolean {
    return this.lastName.untouched || this.lastName.valid;
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }

}
