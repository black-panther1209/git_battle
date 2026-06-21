import { motion } from "framer-motion";

function AnimatedBackground() {
  const particles = Array.from(
    { length: 40 },
    (_, i) => i
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0B0F19]">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-150px] left-[-100px] h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[140px]"
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [0, -140, 100, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-150px] right-[-100px] h-[650px] w-[650px] rounded-full bg-cyan-500/20 blur-[150px]"
      />

      {/* Aurora 3 */}
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, 50, -100, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] left-[40%] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]"
      />

      {/* Floating Particles */}

      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute h-1 w-1 rounded-full bg-white/40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              -100,
            ],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_60%)]" />

    </div>
  );
}

export default AnimatedBackground;