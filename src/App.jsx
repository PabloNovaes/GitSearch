import "./styles/global.scss";
import { SearchBar } from "./components/SearchBar";
import { MagicMotion } from "react-magic-motion";
export function App() {
  return (
    <MagicMotion layoutDependency={true}>
      <SearchBar />
    </MagicMotion>
  );
}
