import { useState } from "react";
import { fetchGithubProfile } from "../services/githubApi";
import GithubProfileCard from "../components/github/GithubProfileCard";
import { fetchRepositories } from "../services/repositoryApi";
import RepoCard from "../components/github/RepoCard";
import { getTechStack } from "../utils/techStackParser";
import TechStackChart from "../components/analytics/TechStackChart";
import GithubScoreCard from "../components/analytics/GithubScoreCard";
import { calculateGithubScore } from "../utils/scoreCalculator";

function Home() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const techStack = getTechStack(repos);
  const githubScore =
  profile && repos.length > 0
    ? calculateGithubScore(profile, repos)
    : 0;
 const handleAnalyze = async () => {
  try {
    const profileData = await fetchGithubProfile(username);
    const repoData = await fetchRepositories(username);

    setProfile(profileData);
    setRepos(repoData);

  } catch (error) {
    alert("User not found");
  }
};
return (
  <div>
    <h1>Git Battle ⚔️</h1>

    <input
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <button onClick={handleAnalyze}>
      Analyze Profile
    </button>

    {profile && (
      <GithubProfileCard profile={profile} />
    )}

    {repos.slice(0, 5).map((repo) => (
      <RepoCard
        key={repo.id}
        repo={repo}
      />
    ))}
    {repos.length > 0 && (
  <TechStackChart stack={techStack} />
)}
  {profile && (
  <GithubScoreCard score={githubScore} />
)}
  </div>
);}

export default Home;