import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import References from './components/pages/References';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Elado from './components/pages/Elado';
import MostEpul from './components/pages/MostEpul';
import ReferenceDetail from './components/ReferenceDetail';
import { ReferenceProvider } from './ReferenceContext';
import { MostEpulProvider } from './MostEpulContext';
import MostEpulDetail from './components/MostEpulDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div>
        <Header />
        <ReferenceProvider>
        <MostEpulProvider>
          <Routes>
              <Route exact path='/' element={<Main />}/>
              <Route path='/referenciak' element={<References />}/>
              <Route path='/referenciak/:project' element={<ReferenceDetail />}/>
              <Route path='/most-epul' element={<MostEpul />}/>
              <Route path='/most-epul/:project' element={<MostEpulDetail />}/>
              <Route path='/elado' element={<Elado />}/>
          </Routes>
        </MostEpulProvider>
        </ReferenceProvider>
        <Footer />
    </div>
  );
}

export default App;