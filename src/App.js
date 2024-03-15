import "./App.css";
import NetflixNav from "./components/NetflixNav";
import SottoNav from "./components/SottoNav";
import NetflixFooter from "./components/NetflixFooter";
import TrendingNow from "./components/TrendingNow.jsx";
import WatchItAgain from "./components/WatchITAgain.jsx";
import NewReleases from "./components/NewReleases.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App ">
      <NetflixNav />
      <SottoNav />
      <Container className="d-flex mb-5 mt-5">
        <TrendingNow />
      </Container>
      <Container className="d-flex mb-5 mt-5">
        <WatchItAgain />
      </Container>
      <Container className="d-flex  mt-5">
        <NewReleases />
      </Container>
      <NetflixFooter />
    </div>
  );
}

export default App;
