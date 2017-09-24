import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//Usando observables para resposta de requisição do serviço http
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

	//URL do backend
	url = "https://nodejs-todolist-api.herokuapp.com/contacts/rbr";

  constructor(private http: Http) { }

  getContacts (){
  	    return this.http.get(this.url)
      .map(response => response.json());
  }

  saveContact(contact){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, JSON.stringify(contact), options)
      .map(res => res.json());
  }

    deleteContact(contact){
    return this.http.delete(`${this.url}/${contact._id}`)
      .map(res => res.json());
  }

}
