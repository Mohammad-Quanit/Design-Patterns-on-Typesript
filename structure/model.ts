// Model
interface Post {
  id: string;
  title: string;
  content: string;
  date: Date;
}

class PostModel {
  private posts: Post[] = [];

  // fetch post from DB
  getPosts(): Post[] {
    return this.posts;
  }

  //ave pot top DB
  addPost(post: Post) {
    this.posts.push(post);
  }
}