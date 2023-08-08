// RepoDetails.js

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const RepoDetails = ({ commitActivity }) => {
  const [showAdditions, setShowAdditions] = useState(true);
  const [showDeletions, setShowDeletions] = useState(true);

  const toggleAdditions = () => {
    setShowAdditions(!showAdditions);
  };

  const toggleDeletions = () => {
    setShowDeletions(!showDeletions);
  };

  return (
    <div>
      <h4>Commit Activity</h4>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showAdditions}
            onChange={toggleAdditions}
          />{' '}
          Show Additions
        </label>
        <label>
          <input
            type="checkbox"
            checked={showDeletions}
            onChange={toggleDeletions}
          />{' '}
          Show Deletions
        </label>
      </div>
      <LineChart width={600} height={300} data={commitActivity}>
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        {showAdditions && (
          <Line
            type="monotone"
            dataKey="additions"
            stroke="green"
            name="Additions"
          />
        )}
        {showDeletions && (
          <Line
            type="monotone"
            dataKey="deletions"
            stroke="red"
            name="Deletions"
          />
        )}
      </LineChart>
    </div>
  );
};

export default RepoDetails;
