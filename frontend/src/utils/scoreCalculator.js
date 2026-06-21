export function calculateGithubScore(profile, repos) {
  let score = 0;

  score += Math.min(profile.public_repos * 2, 30);

  score += Math.min(profile.followers, 20);

  score += Object.keys(
    repos.reduce((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = true;
      }
      return acc;
    }, {})
  ).length * 5;

  return Math.min(score, 100);
}