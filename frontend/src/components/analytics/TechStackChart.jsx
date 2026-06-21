function TechStackChart({ stack }) {
  return (
    <div>
      <h2>Detected Tech Stack</h2>

      {Object.entries(stack).map(([tech, count]) => (
        <p key={tech}>
          {tech}: {count}
        </p>
      ))}
    </div>
  );
}

export default TechStackChart;