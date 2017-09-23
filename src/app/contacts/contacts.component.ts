import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService:ContactsService) { }

  ngOnInit() {

  	this.contacts = this.contactsService.getContacts();
  }

  contacts:Contact[];

labelButton:string="Inserir";

  //meuInput="";

  alerta="O campo está em branco!";

  //students=["Erika", "Danielle" , "Rodrigo"];



  	delete(contact){
  		alert(contact.name);
  		let index = this.contacts.indexOf(contact);
  		this.contacts.splice(index,1);
  	}

    inputName="";
    inputPhone="";

   	execAction() {

   		if (this.inputName != "" && this.inputPhone != ""){

   			let contact:Contact = {
   				'name': this.inputName ,
   				'phone': this.inputPhone
   			}
   			this.contacts.push(contact);
   			this.clearForm();
   	}
   		else {
   			alert(this.alerta);
   		}
  	}

  	clearForm(){
  		this.inputName="";
  		this.inputPhone="";
  	}


}
