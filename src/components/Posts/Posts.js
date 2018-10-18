import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/actions/postActions';
import Proptypes from 'prop-types';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h6>{post.title}</h6>
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
  newPost: Proptypes.object,
};
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});
export default connect(
  mapStateToProps,
  { fetchPosts },
)(Posts);
