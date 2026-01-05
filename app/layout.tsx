
import Navbar from './components/navbar';
import Footer from './components/footer';
import './globals.css';

export const metadata = {
  title: 'Nupoor Patil',
  description: 'Nupoor’s portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}