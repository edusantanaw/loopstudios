import {GlobalStyle} from './syles/styles'
import Header from './components/Header';
import Intro from './components/Intro';
import Vr from './components/IntactiveVr';
import Creations from './components/Creatins';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header />
      <Intro />
      <Vr />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
