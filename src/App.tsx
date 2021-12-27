import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Portfolio/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
  );
};

export default App;
