import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Contact } from '../contacts/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    @Input() contact:Contact;

  @Output() contactDeleted = new EventEmitter();

  remove(){
  	this.contactDeleted.emit();
  }

}
