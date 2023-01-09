import './App.css';
import CharacterSheet from "./components/CharacterSheet";
import Header from "./components/UIComponents/Header";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <CharacterSheet />
    </div>
  );
}

export default Layout;
