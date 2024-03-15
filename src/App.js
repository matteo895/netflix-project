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
      <Container className="mt-4">
        <h2>Treading Now</h2>
      </Container>
      <Container className="d-flex mb-5 mt-4">
        <TrendingNow />
      </Container>
      <Container className="mt-3">
        <h2>Watch it Again</h2>
      </Container>
      <Container className="d-flex mb-5 mt-4">
        <WatchItAgain />
      </Container>
      <Container className="mt-3">
        <h2>New Releases</h2>
      </Container>
      <Container className="d-flex  mt-4">
        <NewReleases />
      </Container>
      <NetflixFooter />
    </div>
  );
}

export default App;
