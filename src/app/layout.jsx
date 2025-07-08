import './globals.css'
 
import NavBar from "@/components/other/navigation/NavBar";

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
        <section>{children}</section>
      </body>
    </html>
  );
}
