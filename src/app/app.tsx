import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/layout';
import Team from './pages/team/team';
import Products from './pages/products/products';
import Projects from './pages/projects/projects';
import Calendar from './pages/calendar/calendar';
import { PoductList } from './product-list/product-list';

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      <PoductList />
    </Layout>
  );
}

export default App;
