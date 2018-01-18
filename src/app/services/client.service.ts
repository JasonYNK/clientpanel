import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, /* AngularFireList, AngularFireObject*/  FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
 // clients: AngularFireList<any[]>;
 // client: AngularFireObject<any>;
 clients: FirebaseListObservable<any[]>;
 client: FirebaseObjectObservable<any>;
  constructor(
    public af:AngularFireDatabase
  ) { 
    this.clients = this.af.list('client/clients') as FirebaseListObservable<Client[]>;// AngularFireList<Client[]>;
  }

  getClients() {
    return this.clients;
  }

  newClient(client:Client) {
    this.clients.push(client);
  }

  getClient(id:string) {
    this.client = this.af.object('client/clients/' +id) as FirebaseObjectObservable<Client>;
    return this.client;
  }

  updateClient(id:string, client:Client) {
    return this.clients.update(id, client);
  }

  deleteClient(id:string) {
    return this.clients.remove(id);
  }

}
