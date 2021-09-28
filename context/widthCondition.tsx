import { createContext, useState } from "react";

import { Children } from "@/interfaces/interface";

const WidthContext = createContext({
  width: 0,
  chanceWidth: (val: number) => {},
});

export default WidthContext;

export function WidthContextProvider({ children }: Children) {
  const [width, setWidth] = useState(0);

  const updateWidth = (newValue: number) => {
    setWidth(newValue);
  };

  return (
    <WidthContext.Provider value={{ width, chanceWidth: updateWidth }}>
      {children}
    </WidthContext.Provider>
  );
}
