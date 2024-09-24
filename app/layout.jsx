import "@/assets/styles/globals.css";
export const metadata = {
  title: "PropretyPulse",
  keywords: "rentals, property, find, perfect",
  description: "Find your dream rental property",
};

const MainLayout = ({ children }) => {
  return (
    <html len="eng">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
