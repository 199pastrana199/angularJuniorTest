import {Component, Input, OnInit} from '@angular/core';
import {Topic} from '../../models/topic';
import {TopicService} from '../../services/topic.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  topics: Topic[];
  constructor(private topicService: TopicService) {
    this.topicService.getTopic().subscribe(value => this.topics = value);
  }
  ngOnInit(): void {
  }

}
