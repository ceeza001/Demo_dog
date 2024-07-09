import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";

import SplashScreen from "@/components/SplashScreen";

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer to stop loading after 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Cleanup the timer if the component unmounts before the timer ends
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <div className="w-full">
          <Outlet />
        </div>
      )}
    </>
  );
};

export default RootLayout;