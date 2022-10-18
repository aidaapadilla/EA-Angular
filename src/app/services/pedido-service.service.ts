import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';


@Injectable({
  providedIn: 'root'
})
export class UserPedido {
  url = 'http://localhost:4000/api/pedido';

  constructor(private http: HttpClient) { }

  deletePedido(id: string): Observable<Pedido> {
    return this.http.delete<Pedido>(this.url + '/' + id);
  }

  addPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.url , pedido) ;
  }

  getPedido(id: string): Observable<Pedido> {
    return this.http.get<Pedido>(this.url + '/' + id);
  }

  editPedido(id: string, pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(this.url + '/' + id, pedido);
  }
}