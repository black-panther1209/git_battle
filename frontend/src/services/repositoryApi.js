export async function fetchRepositories(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );

  if (!response.ok) {
    throw new Error("Repositories not found");
  }

  return await response.json();
}