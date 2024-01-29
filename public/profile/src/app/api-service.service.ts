import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact/contact.component';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://akbkfdynu6.execute-api.us-east-1.amazonaws.com/v1/';

  public createProfile(contact: any): Observable<Contact> {
    const url = `${this.baseUrl}`;
    return this.http.post<Contact>(url, contact);
  }
}
