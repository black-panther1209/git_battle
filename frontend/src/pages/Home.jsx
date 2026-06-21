import { useState } from "react";
import { fetchGithubProfile } from "../services/githubApi";
import GithubProfileCard from "../components/github/GithubProfileCard";
import { fetchRepositories } from "../services/repositoryApi";
import RepoCard from "../components/github/RepoCard";
import { getTechStack } from "../utils/techStackParser";
import TechStackChart from "../components/analytics/TechStackChart";
import GithubScoreCard from "../components/analytics/GithubScoreCard";
import { calculateGithubScore } from "../utils/scoreCalculator";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import AIInsightsCard from "../components/analytics/AIInsightsCard";

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
  <>
    <AnimatedBackground />

    <div className="min-h-screen px-6 py-16">

      <div className="max-w-7xl mx-auto w-full">

        {/* HERO SECTION */}

        <div className="text-center mb-24">

          <p className="text-purple-400 font-semibold text-lg mb-6">
            Git Battle ⚔️
          </p>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight">

            Know Exactly Where Your

            <br />

            <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Developer Career Stands
            </span>

          </h1>

          <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto">
            Analyze your GitHub. Discover your strengths.
            Identify skill gaps. Build smarter. Get AI-powered
            career insights.
          </p>

          <div className="mt-12 max-w-3xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row gap-3">

            <input
              type="text"
              placeholder="github username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white px-4 py-3"
            />

            <button
              onClick={handleAnalyze}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:scale-105 transition"
            >
              Analyze Profile →
            </button>

          </div>

        </div>

        {/* DASHBOARD */}

        <div className="space-y-8">

          {profile && (

            <div className="grid lg:grid-cols-2 gap-8">

              <GithubProfileCard profile={profile} />

              <GithubScoreCard score={githubScore} />

            </div>

          )}

          {(profile || repos.length > 0) && (

            <div className="grid lg:grid-cols-2 gap-8">

              <AIInsightsCard
                score={githubScore}
                repos={repos}
                stack={techStack}
              />

              {repos.length > 0 && (
                <TechStackChart stack={techStack} />
              )}

            </div>

          )}

          {repos.length > 0 && (

            <div>

              <h2 className="text-3xl font-bold text-white mb-6">
                Repositories
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {repos.slice(0, 6).map((repo) => (
                  <RepoCard
                    key={repo.id}
                    repo={repo}
                  />
                ))}

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  </>
);}

export default Home;