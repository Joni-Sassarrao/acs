import { Router } from '@angular/router';
import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  'nome': string;
  'email': string;
  'nota': string;
  'chaveSecreta': string;
  'nomeCriptografado': string;
  'emailCriptografado': string;
  'notaCriptografada': string;

  constructor(public router: Router) {}

  exibirCripto(){
    if (this.nome && this.email && this.nota && this.chaveSecreta) {
    const CriptografarNome = CryptoJS.AES.encrypt(this.nome, this.chaveSecreta).toString();
    const CriptografarEmail = CryptoJS.AES.encrypt(this.email, this.chaveSecreta).toString();
    const CriptografarNota = CryptoJS.AES.encrypt(this.nota, this.chaveSecreta).toString();

    this.nomeCriptografado = CriptografarNome;
    this.emailCriptografado = CriptografarEmail;
    this.notaCriptografada = CriptografarNota;

    this.router.navigateByUrl
    (`/descriptografar/${this.nomeCriptografado}/${this.emailCriptografado}/${this.notaCriptografada}`);
  }
}
}
