import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) {
  }

  getArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>('http://localhost:3000/article');
  }
  getArticle(id): Observable<Article>{
    return this.httpClient.get<Article>(`http://localhost:3000/article/${id}`);
  }
}
