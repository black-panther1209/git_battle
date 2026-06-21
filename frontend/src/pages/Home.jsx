import { useState } from "react";
import { fetchGithubProfile } from "../services/githubApi";
function Home() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const handleAnalyze = async () => {
  try {
    const data = await fetchGithubProfile(username);
    setProfile(data);
  } catch (error) {
    alert("User not found");
  }
};

  return (
    <div>
      <h1>Git Battle ⚔️</h1>
      <p>Analyze. Compare. Improve.</p>

      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleAnalyze}>
  Analyze Profile
</button>
{profile && (
  <div>
    <img
      src={profile.avatar_url}
      alt={profile.login}
      width="120"
    />

    <h2>{profile.name}</h2>

    <p>@{profile.login}</p>

    <p>{profile.bio}</p>

    <p>Followers: {profile.followers}</p>

    <p>Following: {profile.following}</p>

    <p>Repositories: {profile.public_repos}</p>
  </div>
)}
    </div>
  );
}

export default Home;