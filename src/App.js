import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';
import { action, comedy, documentaries, horror, topRated, originals, romance, trending } from './urls';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row title="Netflix Originals" url={originals} isLarge />
      <Row title="Trending Now" url={trending} />
      <Row title="Top Rated" url={topRated} />
      <Row title="Action Movies" url={action} />
      <Row title="Comedy Movies" url={comedy} />
      <Row title="Horror Movies" url={horror} />
      <Row title="Romance" url={romance} />
      <Row title="Documentaries" url={documentaries} />
    </div>
  );
}

export default App;
