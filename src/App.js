import './App.css';

function App() {
  const ecosystem_projects = [
    {name : "Aave", description: "Lending"},
    {name : "ENS", description: "Domain provider"}
  ];
  return (
    <div className="App">
      {ecosystem_projects.map((project, key) => {
        return <h2> {project.name} {project.description}</h2>;
      })}
    </div>
  );
}

export default App;
