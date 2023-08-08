// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

// const App = () => {
//   const [repos, setRepos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedRepo, setSelectedRepo] = useState(null);
//   const [commitActivity, setCommitActivity] = useState([]);
//   const [showAdditions, setShowAdditions] = useState(true);
//   const [showDeletions, setShowDeletions] = useState(true);

//   useEffect(() => {
//     fetchRepos();
//   }, [currentPage]);

//   useEffect(() => {
//     if (selectedRepo) {
//       fetchCommitActivity();
//     }
//   }, [selectedRepo]);

//   const fetchRepos = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${currentPage}`
//       );
//       setRepos(response.data.items);
//     } catch (error) {
//       console.error("Error fetching repositories:", error);
//     }
//   };

//   const fetchCommitActivity = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.github.com/repos/${selectedRepo.owner.login}/${selectedRepo.name}/stats/commit_activity`
//       );
//       setCommitActivity(response.data);
//     } catch (error) {
//       console.error("Error fetching commit activity:", error);
//     }
//   };

//   const changePage = (page) => {
//     setCurrentPage(page);
//   };

//   const toggleAdditions = () => {
//     setShowAdditions(!showAdditions);
//   };

//   const toggleDeletions = () => {
//     setShowDeletions(!showDeletions);
//   };

//   const selectRepo = (repo) => {
//     setSelectedRepo(repo);
//   };

//   const renderRepoDetails = () => {
//     if (selectedRepo && commitActivity.length > 0) {
//       return (
//         <div>
//           <h4>Commit Activity for {selectedRepo.name}</h4>
//           <div style={{ border: "1px solid red" }}>
//             <label style={{ border: "1px solid red" }}>
//               <input
//                 type="checkbox"
//                 checked={showAdditions}
//                 onChange={toggleAdditions}
//               />{" "}
//               Show Additions
//             </label>
//             <label style={{ border: "1px solid red" }}>
//               <input
//                 type="checkbox"
//                 checked={showDeletions}
//                 onChange={toggleDeletions}
//               />{" "}
//               Show Deletions
//             </label>
//           </div>
//           {/* <LineChart width={600} height={300} data={commitActivity}>
//             <XAxis dataKey="week" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             {showAdditions && (
//               <Line
//                 type="monotone"
//                 dataKey="additions"
//                 stroke="green"
//                 name="Additions"
//               />
//             )}
//             {showDeletions && (
//               <Line
//                 type="monotone"
//                 dataKey="deletions"
//                 stroke="red"
//                 name="Deletions"
//               />
//             )}
//           </LineChart> */}
//         </div>
//       );
//     } else {
//       return <p>No commit activity available</p>;
//     }
//   };

//   const renderPaginationLinks = () => {
//     const totalPages = Math.ceil(repos.length / 10);
//     const paginationLinks = [];
//     for (let i = 1; i <= totalPages; i++) {
//       paginationLinks.push(
//         <button key={i} onClick={() => changePage(i)}>
//           {i}
//         </button>
//       );
//     }
//     return paginationLinks;
//   };

//   return (
//     <div>
//       <h1>Most Starred GitHub Repositories</h1>
//       <ul>
//         {repos.map((repo) => (
//           <div
//             key={repo.id}
//             onClick={() => selectRepo(repo)}
//             style={{ cursor: "pointer" }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 border: "1px solid white"
//               }}
//             >
//               <img
//                 src={repo.owner.avatar_url}
//                 alt="Avatar"
//                 style={{ width: "150px", height: "180px", marginRight: "10px" }}
//               />
//               <div>
//                 <h2>{repo.name}</h2>
//                 <p>{repo.description}</p>
//                 <div style={{ display: "flex", gap: "20px" }}>
//                   <div style={{ border: "1px solid gray", width: "90px" }}>
//                     <p style={{ textAlign: "center" }}>
//                       Stars: {repo.stargazers_count}
//                     </p>
//                   </div>
//                   <div style={{ border: "1px solid gray", width: "90px" }}>
//                     <p style={{ textAlign: "center" }}>
//                       Issues: {repo.open_issues_count}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </ul>
//       {selectedRepo && renderRepoDetails()}
//       <div>{renderPaginationLinks()}</div>
//     </div>
//   );
// };

// export default App;
import React from 'react'
import Satti from './components/Satti'
import Center from './components/Center'
import Todo from './components/Todo'
import Weather from './components/Weather'



const App = () => {
  return (
    <div><Weather/></div>
  )
}

export default App