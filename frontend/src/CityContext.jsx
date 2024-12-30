import { createContext, useState } from "react";

export const CityContext = createContext();

export function CityProvider({ children }) {
  const [cities, setCities] = useState([]);

  return (
    <CityContext.Provider value={{ cities, setCities }}>
      {children}
    </CityContext.Provider>
  );
}
