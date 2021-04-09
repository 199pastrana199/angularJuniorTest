import {Component, Input, OnInit} from '@angular/core';
import {Topic} from '../../models/topic';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input() topic: Topic;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToTopic(): void {
    this.router.navigate([`/topic/${this.topic.topicId}`]);
  }
}
