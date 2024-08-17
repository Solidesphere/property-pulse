import "@/assets/styles/globals.css";
export const metadata = {
  title: "PropretyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rentals, property, find, perfect",
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
