import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Blog } from '../shared/blog.model';
import { BlogsService } from '../shared/blogs.service';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  blog!: Blog;
  blogId!: number;
  new!: boolean;

  constructor(
    private blogsService: BlogsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.blog = new Blog();
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.blog = this.blogsService.get(params['id']);
        this.blogId = params['id'];
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }

  delete(id: any) {
    this.blogsService.delete(id);
    this.router.navigateByUrl('/');
    console.log(id);
  }
}
