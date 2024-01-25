import { GithubLogo } from "@phosphor-icons/react";
import { RepositoryList } from "../components/RepositoryList";
import "../styles/searchBar.scss";

import { useState, useEffect } from "react";

export function SearchBar() {
  const [repositories, setRepositories] = useState([]);
  const [searchUrl, setSearchUrl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const searchUserRepositories = async () => {
        try {
          const response = await fetch(
            `https://api.github.com/users/${searchUrl}/repos`
          );
          const data = await response.json();
          if (data.message) {
            return setRepositories([]);
          }

          return setRepositories(data);
        } catch (error) {
          throw new Error(error);
        }
      };

      searchUserRepositories();
    }, 300);
  }, [searchUrl]);

  const setValue = (e) => {
    if (e.key !== "Enter") return;
    e.target.blur();
    return setSearchUrl(e.target.value);
  };

  return (
    <div>
      <header>
        <h1>
          <GithubLogo weight="fill" size={32} />
          Git <span>Search</span>
        </h1>
        <div id="input-wrapper">
          <input
            type="text"
            placeholder="Digite o nome de um usuário"
            id="userName"
            onKeyPress={setValue}
          />
        </div>
      </header>
      <RepositoryList repositories={repositories} />
    </div>
  );
}
