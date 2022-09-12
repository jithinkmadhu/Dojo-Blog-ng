import { Component, OnInit } from '@angular/core';
import { Blog } from '../shared/blog.model';
import { BlogsService } from '../shared/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogs: Blog[] = new Array<Blog>();

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogs = this.blogsService.getall();
  }
}
