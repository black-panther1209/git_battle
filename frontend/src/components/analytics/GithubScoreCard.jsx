import { useEffect, useState } from "react";

function GithubScoreCard({ score }) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      if (current >= score) {
        current = score;
        clearInterval(interval);
      }

      setDisplayScore(current);
    }, 15);

    return () => clearInterval(interval);
  }, [score]);

  const circumference = 2 * Math.PI * 90;
  const offset =
    circumference -
    (displayScore / 100) * circumference;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.15)]">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 bg-purple-500/10 blur-3xl" />

      <div className="relative z-10">

        <p className="text-gray-400 uppercase tracking-[0.3em] text-sm mb-8">
          GitHub Score
        </p>

        <div className="flex justify-center">

          <div className="relative w-[220px] h-[220px]">

            <svg
              className="absolute inset-0 rotate-[-90deg]"
              width="300"
              height="300"
            >
              <circle
                cx="150"
                cy="150"
                r="125"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="12"
                fill="transparent"
              />

              <circle
                cx="150"
                cy="150"
                r="125"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />

              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <h1 className="text-7xl font-black bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {displayScore}
              </h1>

              <p className="text-gray-500 text-sm mt-2">
                out of 100
              </p>

            </div>

          </div>

        </div>

        <div className="mt-8 flex justify-center">

          <span className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm">
            Developer Readiness Indicator
          </span>

        </div>

      </div>

    </div>
  );
}

export default GithubScoreCard;