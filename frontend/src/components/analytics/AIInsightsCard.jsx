import { Brain, CheckCircle, AlertTriangle } from "lucide-react";

function AIInsightsCard({ score, repos, stack }) {
  const topTech =
    Object.keys(stack)[0] || "Unknown";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

      <div className="absolute top-0 right-0 h-40 w-40 bg-purple-500/10 blur-3xl" />

      <div className="relative z-10">

        <div className="flex items-center gap-3 mb-6">

          <Brain className="text-purple-400" />

          <h2 className="text-2xl font-bold text-white">
            AI Insights
          </h2>

        </div>

        <div className="space-y-4">

          <div className="flex items-center gap-3 text-green-400">
            <CheckCircle size={18} />
            <p>
              Strong activity in {topTech}
            </p>
          </div>

          <div className="flex items-center gap-3 text-green-400">
            <CheckCircle size={18} />
            <p>
              {repos.length} repositories detected
            </p>
          </div>

          {score < 40 && (
            <div className="flex items-center gap-3 text-yellow-400">
              <AlertTriangle size={18} />
              <p>
                Improve repository quality
              </p>
            </div>
          )}

          {score < 60 && (
            <div className="flex items-center gap-3 text-yellow-400">
              <AlertTriangle size={18} />
              <p>
                Add more diverse projects
              </p>
            </div>
          )}

          {score >= 60 && (
            <div className="flex items-center gap-3 text-cyan-400">
              <CheckCircle size={18} />
              <p>
                Profile shows good readiness
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default AIInsightsCard;