import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/layout';
import Team from './pages/team/team';
import Products from './pages/products/products';
import Projects from './pages/projects/projects';
import Hooks from './pages/hooks/hooks';
import Home from './pages/home/home';
import Error404 from './pages/error404/error404';
import { useEffect, useState } from "react";
import { supabase } from '../supabaseClient'

export function App() {
  const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const { data } = await supabase.from("countries").select();
      setCountries(data);
    }
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
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export default App;
