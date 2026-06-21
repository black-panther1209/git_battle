import { Star, GitFork, Code2 } from "lucide-react";

function RepoCard({ repo }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(124,58,237,0.12)]">

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative z-10">

        {/* Repo Name */}
        <div className="flex items-center justify-between">

          <h3 className="text-2xl font-bold text-white truncate">
            {repo.name}
          </h3>

          <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
            Repository
          </span>

        </div>

        {/* Description */}
        <p className="mt-3 text-gray-400 text-sm">
          {repo.description || "No description available"}
        </p>

        {/* Language Badge */}
        <div className="mt-5">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300 text-sm">

            <Code2 size={16} />

            {repo.language || "Unknown"}

          </span>

        </div>

        {/* Stats */}
        <div className="mt-6 flex gap-6">

          <div className="flex items-center gap-2 text-yellow-400">

            <Star size={18} />

            <span>{repo.stargazers_count}</span>

          </div>

          <div className="flex items-center gap-2 text-purple-400">

            <GitFork size={18} />

            <span>{repo.forks_count}</span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RepoCard;