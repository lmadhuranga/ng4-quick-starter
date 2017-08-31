import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  posts: PostInterface;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}

interface PostInterface {
  id: number;
  title: string;
  body: string;
  userId: number;
}
