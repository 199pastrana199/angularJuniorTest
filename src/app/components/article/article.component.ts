import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(private location: Location, private articleService: ArticleService, private activatedRoute: ActivatedRoute ) {
  }
  cancel(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.articleService.getArticle(params.id).subscribe(value => {
        this.article = value;
      });
    });
  }

}
