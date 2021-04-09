import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{
  articles: Article[];
  filteredArticles: Article[];
  constructor(private articlesService: ArticleService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.articlesService.getArticles().subscribe(value => {
      this.articles = value;
      this.filteredArticles = value;
      this.activatedRoute.params.subscribe(params => {
        if (params.topicId) {
          this.filteredArticles = this.articles.filter(article => article.topicId.toString() === params.topicId);
        }
      });
    });
  }
}
