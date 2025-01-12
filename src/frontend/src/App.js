import "./App.css";
import { MatchPage } from "./pages/MatchPage";
import { TeamPage } from "./pages/TeamPage";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
          <Route path="/teams/:teamName" element={<TeamPage />} />
        </Routes>
   
      </Router>
    </div>
  );
}

export default App;
