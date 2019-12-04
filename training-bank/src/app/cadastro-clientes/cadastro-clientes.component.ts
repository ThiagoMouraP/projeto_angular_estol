import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro;
  conversao;
  valoresForm;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: ['']
    });
    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        this.valoresForm = res;
      })
  }

  cadastro(){
    console.log(this.formCadastro.controls);
    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem('cadastro', this.conversao);
   }

}
