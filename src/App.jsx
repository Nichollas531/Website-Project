import Navbar from "./components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
function App() {
  return (
    <>
      <div id="body-container">
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Main />
        </main>
        <nav>
          <Navbar />
        </nav>
      </div>
    </>
  );
}

export default App;
