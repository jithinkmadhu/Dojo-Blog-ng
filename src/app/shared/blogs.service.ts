import { Injectable } from '@angular/core';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  blogs: Blog[] = new Array<Blog>();

  constructor() {}

  getall() {
    return this.blogs;
  }

  get(id: number) {
    return this.blogs[id];
  }

  getId(blog: Blog) {
    return this.blogs.indexOf(blog);
  }

  add(blog: Blog) {
    let newLength = this.blogs.push(blog);
    let index = newLength - 1;
    return index;
  }

  update(id: number, title: string, body: string, author: string) {
    let blog = this.blogs[id];
    blog.title = title;
    blog.body = body;
    blog.author = author;
  }

  delete(id: number) {
    this.blogs.splice(id, 1);
  }
}
