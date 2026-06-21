export function getTechStack(repos) {
  const stack = {};

  repos.forEach((repo) => {
    if (repo.language) {
      stack[repo.language] =
        (stack[repo.language] || 0) + 1;
    }
  });

  return stack;
}