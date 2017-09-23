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
  	//return this.contacts;
  	    return this.http.get(this.url)
      .map(response => response.json());
  }

  saveContact(contact){
    //Como nossa API recebe os dados em formato JSON, aqui usamos os objetos
    //Headers e RequestOptions para setar o content-type da nossa requisição
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //Fazemos um post na url, passando o contact em formato json, e os options
    //criados no passo anterior. O resultado também vem em json.
    return this.http.post(this.url, JSON.stringify(contact), options)
      .map(res => res.json());
  }

    deleteContact(contact){
    //Aqui concatenamos a nossa url original com o id do contato recebido
    //e fazemos uma request http DELETE
    return this.http.delete(`${this.url}/${contact._id}`)
      .map(res => res.json());
  }

}
