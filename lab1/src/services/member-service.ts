import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberModel } from '../models/Member';

@Injectable({
  providedIn: 'root', //ce service accepte d'etre injecté sur tout la route 
})
//decorateur qui permet de déclarer que le service accepte l'injection
//on l'injecte soit dans un composant ou dna s un autre service
export class MemberService {
  constructor(private http: HttpClient) { } //injection du service httpclient dans le constructeur du service member service
  //ce que se trouve dans un service
  //fonction qui envoie des requetes http vers le bakcned 
  // (get ,post , put , delete, patch = nbadel beha attribut wahed )
  GetAllMembers() {
    //httpcleint mas2oula aal genration du req nasmaa instance fi consrtucutor jeya mel classe http cleint class predeifine fi nagular responable de genrer les req 
    // fi wost < type eli testana fih men aand req 
    return this.http.get<MemberModel[]>('http://localhost:3000/members'); //get request
    //notification je veux avoir a partir du abckned : MemberModel[]
  }
  AddMember(m: MemberModel) {
    return this.http.post<void>('http://localhost:3000/members',m);
    //hatineha void khtr de point du vue data amyjini chy 
  }
}
