import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithhub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "",
      clientSecret: "",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { repos } = this.state;
    console.log(repos);
    const repoItems = repos.map(repo => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <h4>
            <Link to={repo.html_url} className="text-info" target="_blank">
              {repo.name}
            </Link>
          </h4>
          <p>{repo.description}</p>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.stargazers_count}
            </span>
            <span className="badge badge-success">
              Forks: {repo.stargazers_count}
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithhub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithhub;
