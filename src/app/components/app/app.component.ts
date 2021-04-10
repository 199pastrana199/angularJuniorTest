import {Component} from '@angular/core';
import {TopicService} from '../../services/topic.service';
import {Topic} from '../../models/topic';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics: Topic[];
  articles: Article[];
  article: Article[];
  topicId: Topic;

  constructor(private topicService: TopicService, private articleService: ArticleService, private router: Router) {
    this.topicService.getTopic().subscribe(value => this.topics = value);
    this.articleService.getArticles().subscribe(value => this.articles = value);
  }
}

