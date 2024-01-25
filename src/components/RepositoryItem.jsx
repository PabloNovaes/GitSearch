export function RepositoryItem({ repository }) {
  const { name, html_url: url, created_at = 0 } = repository;
  return (
    <li>
      <strong>{name}</strong>
      <p>{new Date(created_at).toLocaleDateString("pt-BR")}</p>
      <a href={url}>Acessar Repositorio</a>
    </li>
  );
}
