import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/actions/postActions';
import Proptypes from 'prop-types';

class Posts extends Component {
  componentDidMount() {
    console.log('hello');
    this.props.fetchPosts();
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: Proptypes.func.isRequired,
  posts: Proptypes.array.isRequired,
};
const mapStateToProps = state => ({
  posts: state.posts.items,
});
export default connect(
  mapStateToProps,
  { fetchPosts },
)(Posts);
