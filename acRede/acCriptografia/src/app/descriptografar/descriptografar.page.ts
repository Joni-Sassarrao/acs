import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-descriptografar',
  templateUrl: './descriptografar.page.html',
  styleUrls: ['./descriptografar.page.scss'],
})
export class DescriptografarPage implements OnInit {
  navegar: any

    'nomeCriptografado': any;
    'emailCriptografado': any;
    'notaCriptografada': any;
    'chaveSecreta': string;
    'nome': string;
    'email': string;
    'nota': string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.nomeCriptografado = this.activatedRoute.snapshot.paramMap.get('nomeCriptografado');
    this.emailCriptografado = this.activatedRoute.snapshot.paramMap.get('emailCriptografado');
    this.notaCriptografada = this.activatedRoute.snapshot.paramMap.get('notaCriptografada');
  }

  Descriptografar(){
    if(this.nomeCriptografado && this.emailCriptografado && this.notaCriptografada && this.chaveSecreta){
      const bytes1 = CryptoJS.AES.decrypt(this.nomeCriptografado, this.chaveSecreta);
      const bytes2 = CryptoJS.AES.decrypt(this.emailCriptografado, this.chaveSecreta);
      const bytes3 = CryptoJS.AES.decrypt(this.notaCriptografada, this.chaveSecreta);
      const nomeDescriptografado = bytes1.toString(CryptoJS.enc.Utf8);
      const emailDescriptografado = bytes2.toString(CryptoJS.enc.Utf8);
      const notaDescriptografada = bytes3.toString(CryptoJS.enc.Utf8);

      this.nome = nomeDescriptografado;
      this.email = emailDescriptografado;
      this.nota = notaDescriptografada;
    }
  }

  Voltar(){
    const navigationExtras: NavigationExtras = {state:{}}
    this.router.navigate(['home'],navigationExtras)
  }
}
