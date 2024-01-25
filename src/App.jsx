import "./styles/global.scss";
import { SearchBar } from "./components/SearchBar";
import { MagicMotion } from "react-magic-motion";
export function App() {
  return (
    <MagicMotion transition={{ type: "spring", stiffness: 200, damping: 15 }}>
      <SearchBar />
    </MagicMotion>
  );
}
