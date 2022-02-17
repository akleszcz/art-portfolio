import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PortfolioWithPagination from './pages/PortfolioWithPagination';

const App: FunctionComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={
          <ErrorBoundary>
            <PortfolioWithPagination/>
          </ErrorBoundary>
        }/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
