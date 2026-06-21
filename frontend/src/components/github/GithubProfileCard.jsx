function GithubProfileCard({ profile }) {
  return (
    <div>
      <img
        src={profile.avatar_url}
        alt={profile.login}
        width="120"
      />

      <h2>{profile.name}</h2>

      <p>@{profile.login}</p>

      <p>{profile.bio}</p>

      <p>Followers: {profile.followers}</p>

      <p>Following: {profile.following}</p>

      <p>Repositories: {profile.public_repos}</p>
    </div>
  );
}

export default GithubProfileCard;