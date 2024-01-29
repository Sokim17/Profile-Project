import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
export class ContactComponent {
  addContactForm!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _profileService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.addContactForm = this._formBuilder.group({
      name: '',
      email: '',
      message: '',
      title: '',
      phone: '',
    });
  }

  message: string = '';
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
    this.addContactForm = this._formBuilder.group({
      inputPhoneNumber: [
        null,
        [Validators.required, Validators.pattern('[0-9]{10}')],
      ],
    });
  }
}
