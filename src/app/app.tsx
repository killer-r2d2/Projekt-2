// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Layout } from './layout/layout';
import { PoductList } from './product-list/product-list';

export function App() {
  return (
    <div>
      <Layout>
        <PoductList />
      </Layout>
    </div>
  );
}

export default App;
