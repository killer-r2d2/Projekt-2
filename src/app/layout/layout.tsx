/* eslint-disable-next-line */

import { Footer } from '../footer/footer';
import { Navigation } from '../navigation/navigation';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};
