import { FunctionComponent } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import PortfolioWithPagination from './pages/PortfolioWithPagination';

const App: FunctionComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/portfolio/portrait" />} />
        <Route path="/portfolio" element={<Navigate replace to="/portfolio/portrait" />} />
        <Route path="/portfolio/:category" element={<PortfolioWithPagination/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Layout>
  );
};

export default App;
