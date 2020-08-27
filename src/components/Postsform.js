import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost, testPost, resetPost } from "../actions/postActions";

class PostsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async onSubmit(e) {
    console.log(this.props.test);
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    //await this.props.createPost(post);
    await this.props.resetPost("Not TESTING");
    console.log("trying to print out props.test");
    console.log("1111");
    console.log(this.props.test);
    if (this.props.test === "TESTING") {
      alert("it is TESTING");
    }
  }

  render() {
    return (
      <div>
        <h1>Add Posts</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            <div>
              <label>Title: </label>
              <br />
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <div>
              <label>Body: </label>
              <br />
              <textarea
                name="body"
                value={this.state.body}
                onChange={this.onChange}
              />
            </div>
            <br />
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    );
  }
}
PostsForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  testPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  test: state.posts.test,
  item: state.posts.item,
});

export default connect(mapStateToProps, { createPost, testPost, resetPost })(
  PostsForm
);
