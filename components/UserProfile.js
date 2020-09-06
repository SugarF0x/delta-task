import {Component} from "react";
import {Card, CardContent, Container, Typography} from "@material-ui/core";
import { inject, observer } from 'mobx-react';

class UserProfile extends Component {
  static async getInitialProps({ mobxStore }) {
    await mobxStore.usersStore.fetchUsers();
    return { users: mobxStore.usersStore.users };
  }

  constructor(props) {
    super(props);
    this.state = {
      user:  {},
      posts: []
    }
  }

  componentDidMount() {
    this.props.usersStore.fetchUsers();
    this.props.usersStore.fetchPosts();
  }

  render() {
    this.state.user  = this.props.usersStore.users.filter(el => el.id     == this.props.id)[0];
    this.state.posts = this.props.usersStore.posts.filter(el => el.userId == this.props.id).slice(0,5);
    if (this.state.user) {
      return (
        <Card>
          <CardContent>
            <Typography variant="h2" gutterBottom>
              {this.state.user.name}
            </Typography>
            {this.state.posts.map(entry => {
                return (
                  <Container key={entry.id}>
                    <Typography variant="h5">{entry.title}</Typography>
                    <p>{entry.body}</p>
                  </Container>
                )
              }
            )}
          </CardContent>
        </Card>
      );
    } else {
      return (
        <Card>
          <CardContent>
            <Typography variant="h2" gutterBottom>
              User not found
            </Typography>
          </CardContent>
        </Card>
      );
    }
  }
}

export default inject('usersStore')(observer(UserProfile))
