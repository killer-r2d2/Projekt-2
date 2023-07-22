import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/layout';
import Team from './pages/team/team';
import Products from './pages/products/products';
import Projects from './pages/projects/projects';
import Hooks from './pages/hooks/hooks';
import Home from './pages/home/home';
import Error404 from './pages/error404/error404';

export function App() {
  return (
    <Layout>
      <Routes>
        {/* define home / route */}
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
