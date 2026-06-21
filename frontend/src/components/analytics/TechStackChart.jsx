import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TechStackChart({ stack }) {
  const data = Object.entries(stack).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const total = data.reduce(
    (sum, item) => sum + item.value,
    0
  );

  const COLORS = [
    "#7C3AED",
    "#06B6D4",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#EC4899",
    "#14B8A6",
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-purple-500/30 transition-all duration-500">

      {/* Glow */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-purple-500/10 blur-3xl" />

      <div className="relative z-10">

        <div className="mb-8">

          <p className="text-gray-400 uppercase tracking-[0.25em] text-sm">
            Analysis
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            Tech Stack Distribution
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Donut Chart */}

          <div className="h-[320px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={data}
                  innerRadius={90}
                  outerRadius={130}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[index % COLORS.length]
                      }
                    />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* Legend */}

          <div className="space-y-4">

            {data.map((item, index) => {

              const percentage = (
                (item.value / total) *
                100
              ).toFixed(1);

              return (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >

                  <div className="flex items-center justify-between gap-4">

                    <div className="flex items-center gap-3">

                      <div
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor:
                            COLORS[
                              index %
                                COLORS.length
                            ],
                        }}
                      />

                      <span className="text-white font-medium flex-1">
                        {item.name}
                      </span>

                    </div>

                    <span className="text-cyan-300 font-semibold">
                      {percentage}%
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </div>
  );
}

export default TechStackChart;