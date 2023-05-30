import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { MyQuizes } from "./Components/MyQuiz/MyQuizes";
import { CreateNew } from "./Components/CreateNew/CreateNew";
import { PlayQuiz } from "./Components/PlayQuiz/PlayQuiz";
import { Quiz } from "./Components/PlayQuiz/Quiz";

   // Routing between pages is implemented with React-Roter-Dom and its Deliverables

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-quizes" element={<MyQuizes />} />
        <Route path="/create-new" element={<CreateNew />} />
        <Route path="/play-quiz" element={<PlayQuiz />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      
    </div>
  );
}

export default App;
