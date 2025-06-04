import Navbar from "./components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
function App() {
  return (
    <>
      <div className="body-container">
        <nav>
          <Navbar />
        </nav>
        <main>
          <Main />
        </main>
        <aside>
          <Sidebar />
        </aside>
        <footer>Driving na Terra da Rainha</footer>
      </div>
    </>
  );
}

export default App;
