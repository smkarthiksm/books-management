import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../state/models/state';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('https://books-api7.p.rapidapi.com/books', {
      headers: {
        'X-RapidAPI-Key': 'e7af829d24msh71f640ca5025f4fp11cfe0jsn533324071bda',
        'X-RapidAPI-Host': 'books-api7.p.rapidapi.com',
      },
    });
  }
}
