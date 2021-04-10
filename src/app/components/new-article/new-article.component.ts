import {Component, Input, OnInit} from '@angular/core';
import {Topic} from '../../models/topic';
import {TopicService} from '../../services/topic.service';
import {Article} from '../../models/article';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ArticleService} from '../../services/article.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  topics: Topic[];
  article: Article[];
  form: FormGroup;

  constructor(private topicService: TopicService,
              private articleService: ArticleService,
              private route: Router) {
    this.topicService.getTopic().subscribe(value => this.topics = value);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      shortDescription: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      topicId: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.articleService.pushArticle(this.form.value).subscribe(x => {
        this.route.navigate(['/']);
      });
    }
  }

}
