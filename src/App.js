import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import { makeStyles } from "@material-ui/core";
import Alert from "./Components/Alert";
import { lazy, Suspense } from "react";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

const HomePage = lazy(() => import("./Pages/HomePage.js"));
const CoinPage = lazy(() => import("./Pages/CoinPage.js"));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/coins/:id" element={<CoinPage />} />
          </Routes>
        </Suspense>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
