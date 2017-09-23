import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

	loading = false;
	contacts:Contact[];
	inputName="";
    inputPhone="";

  constructor(private contactsService:ContactsService) { }

  ngOnInit() {

  	this.loading=true;

  	//METODO GET
  	this.contactsService.getContacts().subscribe(contacts => {
  		this.contacts=contacts;
  		this.loading=false;
  	});
  }


labelButton:string="Inserir";

//METODO DELETE
  	delete(contact){
  		alert("Deleting contact "+contact.name);
      this.contactsService.deleteContact(contact).subscribe(c => {
      let index = this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);
    });
  	}


//METODO POST
   	insertContact() {

   		if (this.inputName != "" && this.inputPhone != ""){

   			let contact:Contact = {
   				'name': this.inputName ,
   				'phone': this.inputPhone
   			}
    this.contactsService.saveContact(contact).subscribe(c => {
    this.contacts.push(c);
    });
    this.clearForm();
   	}
   		else {
   			alert("The field is empty!");
   		}
  	}

  	clearForm(){
  		this.inputName="";
  		this.inputPhone="";
  	}


}
