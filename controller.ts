// the controller
class PostController {
  private model: PostModel;
  private view: PostView;

  constructor(model: PostModel, view: PostView)  {
    this.model = model;
    this.view = view;
  }

  init() {
    // initialize the view
    this.view.displayPosts(this.model.getPosts())
  }

  addPost() {
    // get new post from view
    const post = this.view.getPostFromInput();
    // add post to model
    this.model.addPost(post);
    // update view
    this.view.displayPosts(this.model.getPosts());
  }
}