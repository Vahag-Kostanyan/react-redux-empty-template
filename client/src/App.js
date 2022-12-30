import {BrowserRouter, Routes, Route} from "react-router-dom";
import Example from "./pages/Example";
import { NotFound } from "./pages/NotFound";

function App() {

    return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Example/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
