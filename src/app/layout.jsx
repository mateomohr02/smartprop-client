import './globals.css'
 
import NavBar from "@/components/other/navigation/NavBar";

import Footer from "@/components/other/footer/Footer";
import Cookies from '@/components/other/cookies/Cookies';
export const metadata = {
  title: "SmarProp",
  description:
    "Creado Por Mateo Amaru Mohr - Smart Business - smartbusiness.ar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NavBar />
        <section className='pt-34 bg-primary'>{children}</section>
        <Footer />
        <Cookies />
      </body>
    </html>
  );
}
