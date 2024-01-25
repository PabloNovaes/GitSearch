import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

export function RepositoryList({ repositories }) {
  return (
    <ul>
      {repositories.length != 0 &&  (
        repositories.map((repo) => {
          return <RepositoryItem key={repo.name} repository={repo} />;
        })
      )}
    </ul>
  );
}
