import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormControlName } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  messageForm: FormGroup;

  constructor(
    private FormBuilder: FormBuilder,
  ) { }

  ngOnInit() {  
  this.messageForm = new FormGroup({
    name: new FormControl(null),
    subject: new FormControl(null),
    email: new FormControl(null),
    message: new FormControl(null)}),
    this.buildForm();
  }

  buildForm(){
    this.messageForm = this.FormBuilder.group({
      name: new FormControl(null),
      subject: new FormControl(null),
      email: new FormControl(null),
      message: new FormControl(null)
    })
  }

}


    
