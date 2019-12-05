import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin;
  theEvent;
  hey;
  regex;
  keys;
  getCadastro;
  message;

  constructor(
    private fb: FormBuilder,
    private router: Router    
  ) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      cpf:['']
    });
  }

}
