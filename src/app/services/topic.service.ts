import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Topic} from '../models/topic';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private httpClient: HttpClient) {

  }

  getTopic(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>('http://localhost:3000/topic');
  }

  getArticle(topicId): Observable<Topic> {
    return this.httpClient.get<Topic>(`http://localhost:3000/topic/${topicId}`);
  }
}
