import React, { Component } from 'react';

let post = {
    title: 'React v0.5',
    content: 'This release is the result of several months of hard work from members of the team and the community.',
    comments: ['Great work team!','Does not work on my machine.','What is this react?']
};

class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.content}</p>
                <h2>Comments</h2>
                
                <Comment content={this.props.data.comments[0]} />
                <Comment content={this.props.data.comments[1]} />
                <Comment content={this.props.data.comments[2]} />
                
                {this.props.data.comments.map(function (comment) {
                    return <Comment content={comment} />;
                })}
            </div>
        );
    }
}

class Comment extends Component {
    render() {
        return (
            <div>{this.props.content}</div>
        );
    }
}

class CompositionApp extends Component {
    render() {
      return (
        <Post data={post} />
      );
    }
  }

export default CompositionApp;