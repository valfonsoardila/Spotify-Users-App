import BaseRoutes from "./routes/BaseRoutes";
import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingPage from "./components/utils/loadPage/LoadingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <BaseRoutes />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
