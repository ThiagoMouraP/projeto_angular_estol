import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-logada',
  templateUrl: './home-logada.component.html',
  styleUrls: ['./home-logada.component.css']
})
export class HomeLogadaComponent implements OnInit {
  getCadastro;
  nameCliente;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log(this.el.nativeElement);
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    this.nameCliente = this.getCadastro['nome'];
    console.log(this.nameCliente);
  }

}
