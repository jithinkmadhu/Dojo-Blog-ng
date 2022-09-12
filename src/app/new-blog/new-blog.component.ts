import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Blog } from '../shared/blog.model';
import { BlogsService } from '../shared/blogs.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'],
})
export class NewBlogComponent implements OnInit {
  blog!: Blog;
  blogId!: number;
  new!: boolean;
  button!: string;
  constructor(
    private blogsService: BlogsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.blog = new Blog();
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.button = 'Update';
        this.blog = this.blogsService.get(params['id']);
        this.blogId = params['id'];
        this.new = false;
      } else {
        this.button = 'Add';
        this.new = true;
      }
    });
  }

  addBlog(form: NgForm) {
    if (form.valid) {
      if (this.new) {
        this.blogsService.add(form.value);
        this.router.navigateByUrl('/');
      } else {
        this.blogsService.update(
          this.blogId,
          form.value.title,
          form.value.body,
          form.value.author
        );
        this.router.navigateByUrl('/');
      }
    }
  }
}
