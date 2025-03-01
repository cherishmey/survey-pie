import { BrowserRouter, Route, Routes } from "react-router-dom";

import CompletionPage from "./components/pages/CompletionPage";
import SurveyPage from "./components/pages/SurveyPage";


function App() {

  return (
    <div className="App">

        <BrowserRouter>
          <Routes>
            <Route path="/complete" element={<CompletionPage />} />
            <Route path="/survey/:surveyId" element={<SurveyPage />}>
              <Route path=":step" element={<SurveyPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
