import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup

  private firstName: FormControl
  private lastName: FormControl

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.fistName, Validators.required);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues): void {
    if (!this.profileForm.invalid)
      return

    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(["/events"]);
  }

  cancel(): void {
    this.router.navigate(["/events"]);
  }

  validateFirstName(): boolean {
    return this.firstName.untouched || this.firstName.valid
  }

  validateLastName(): boolean {
    return this.lastName.untouched || this.lastName.valid
  }

}