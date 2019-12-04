import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formLogin
  form
  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.form = new FormGroup({});
    this.formLogin = this.fb.group({
      cpf: ['']
    })
  }

}
