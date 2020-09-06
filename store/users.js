import { decorate, observable, action } from 'mobx';

class Users {
  constructor() {
    this.users = [];
    this.posts = [];
  }

  setUsers(payload) {
    this.users = payload;
  }
  setPosts(payload) {
    this.posts = payload;
  }

  fetchUsers() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => this.setUsers(res));
  }
  fetchPosts() {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => this.setPosts(res))
  }
}

decorate(Users, {
  users: observable,
  posts: observable,
  fetchUsers: action,
  fetchPosts: action
})

export default Users;
