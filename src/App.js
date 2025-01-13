import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Business from './Business';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Philosophy from './Philosophy';
import Footer from './Footer';
import How from './How';
import Contactus from './Contactus';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Navbar/>
        < Body/>
        < Business/>
        < Philosophy/>
        < How/>
        < Contactus/>
        < Footer/>
      </header>
    </div>
  );
}

export default App;
