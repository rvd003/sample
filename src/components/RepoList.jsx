// RepoList.js

import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  return (
    <ul>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </ul>
  );
};

export default RepoList;
