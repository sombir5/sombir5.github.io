import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contacts from "./components/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
