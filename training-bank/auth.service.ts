import { Injectable } from '@angular/core';

@Injectable()

export class AuthService{

    isAuthenticated(){
        //Pega o token cadastro
        const token = localStorage.getItem('cadastro');
        //Checa se existe token
        if(token){
            return true;
        }
        return false;
    }
}