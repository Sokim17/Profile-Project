import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

import { ApiServiceService } from '../api-service.service';

export class Contact {
  #name!: string;
  #email!: string;
  #message!: string;
  #title!: string;
  #phone!: string;

  constructor(
    name: string,
    email: string,
    message: string,
    title: string,
    phone: string
  ) {
    this.#name = name;
    this.#email = email;
    this.#message = message;
    this.#title = title;
    this.#phone = phone;
  }
  get name(): string {
    return this.#name;
  }
  get email(): string {
    return this.#email;
  }
  get message(): string {
    return this.#message;
  }
  get title(): string {
    return this.#title;
  }
  get phone(): string {
    return this.#phone;
  }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  submitted = false;
  message: string = '';

  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form submitted successfully!');
      console.log('Name:', form.value.name);
      console.log('Email:', form.value.email);
      if (form.value.phone) {
        console.log('Phone Number:', form.value.phone);
      } else {
        console.log('Phone Number: Not provided');
      }
      // You can add further logic here, like sending data to a server
    } else {
      console.log(
        'Form submission failed. Please fill in all required fields.'
      );
    }
  }
  addContactForm!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _profileService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.addContactForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      message: ['', Validators.required],
      title: ['', Validators.required],
      phone: '',
    });
  }

  addContact() {
    const _contact: any = {
      name: this.addContactForm.value.name,
      email: this.addContactForm.value.email,
      message: this.addContactForm.value.message,
      title: this.addContactForm.value.title,
      phone: this.addContactForm.value.phone,
    };

    this._profileService.createProfile(_contact).subscribe({
      next: (contact) => {
        console.log('Contact created', contact);
        this.message = 'Message sent successfully!';
        this.addContactForm = this._formBuilder.group({
          name: '',
          email: '',
          message: '',
          title: '',
          phone: '',
        });
      },
    });
  }
}
