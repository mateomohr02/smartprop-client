export const metadata = {
  title: "SmarProp",
  description:
    "Creado Por Mateo Amaru Mohr - Smart Business - smartbusiness.ar",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`antialiased`}>{children}</body>
      </html>
  );
}
