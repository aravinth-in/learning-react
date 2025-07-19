import './App.css';
import {Project} from './Project.js'

function App() {
  const ecosystem_projects = [
    {name : "Aave", description: "Lending"},
    {name : "ENS", description: "Domain provider"}
  ];
  return (
    <div className="App">
      {ecosystem_projects.map((project, key) => {
        return <Project name={project.name} des={project.description} />;
      })}
    </div>
  );
}

export default App;
