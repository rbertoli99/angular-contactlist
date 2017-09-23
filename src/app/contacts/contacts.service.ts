import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts (){
  	return this.contacts;
  }

    contacts:Contact[] = [
  	{
  		'name': "Erika",
  		'phone': "98988887"
  	},
  	  	{
  		'name': "Danielle",
  		'phone': "88888887"
  	},
  	  	{
  		'name': "Rodrigo",
  		'phone': "987896657"
  	},
  	  	 {
  		'name': "Bixão",
  		'phone': "987896699"
  	}

  ];

}
