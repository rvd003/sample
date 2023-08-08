// RepoItem.js

import React, { useState } from 'react';
import axios from 'axios';
import RepoDetails from './RepoDetails';

const RepoItem = ({ repo }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [commitActivity, setCommitActivity] = useState([]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    if (!showDetails) {
      fetchCommitActivity();
    }
  };

  const fetchCommitActivity = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${repo.owner.login}/${repo.name}/stats/commit_activity`
      );
      setCommitActivity(response.data);
    } catch (error) {
      console.error('Error fetching commit activity:', error);
    }
  };

  return (
    <li>
      <div onClick={toggleDetails}>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <p>Stars: {repo.stargazers_count}</p>
        <p>Issues: {repo.open_issues_count}</p>
        <p>
          Owner: {repo.owner.login}
          <img src={repo.owner.avatar_url} alt="Avatar" />
        </p>
      </div>
      {showDetails && <RepoDetails commitActivity={commitActivity} />}
    </li>
  );
};

export default RepoItem;
