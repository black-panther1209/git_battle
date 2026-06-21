import { Users, BookOpen, UserPlus } from "lucide-react";

function GithubProfileCard({ profile }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_50px_rgba(124,58,237,0.15)]">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">

        {/* Avatar */}
        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-30" />

          <img
            src={profile.avatar_url}
            alt={profile.login}
            className="relative w-36 h-36 rounded-full border-2 border-purple-500/60 object-cover"
          />

        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center lg:text-left">

          <div className="mb-4">

            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {profile.name || profile.login}
            </h2>

            <p className="text-purple-400 text-lg mt-1">
              @{profile.login}
            </p>

          </div>

          <p className="text-gray-300 max-w-2xl">
            {profile.bio || "Building awesome projects and contributing to open source."}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <Users className="mx-auto lg:mx-0 text-cyan-400 mb-2" size={22} />
              <h3 className="text-3xl font-bold text-white">
                {profile.followers}
              </h3>
              <p className="text-gray-400 text-sm">
                Followers
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <UserPlus className="mx-auto lg:mx-0 text-purple-400 mb-2" size={22} />
              <h3 className="text-3xl font-bold text-white">
                {profile.following}
              </h3>
              <p className="text-gray-400 text-sm">
                Following
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <BookOpen className="mx-auto lg:mx-0 text-green-400 mb-2" size={22} />
              <h3 className="text-3xl font-bold text-white">
                {profile.public_repos}
              </h3>
              <p className="text-gray-400 text-sm">
                Repositories
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default GithubProfileCard;