import React, { useState, createContext, useContext } from 'react'


export type ContextType = {
  isOpen: boolean;
  toggleOpen?: () => void;
}
const defaultState = {
  isOpen: false,
};

type Props = {
  children: React.ReactNode
}
const TheemContext = createContext<Partial<ContextType>>(defaultState);


export const ThemeContextProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(defaultState.isOpen)
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return <TheemContext.Provider value={{ isOpen, toggleOpen  }}>
    {children}
  </TheemContext.Provider>
}

export const useThemeContext = () => useContext(TheemContext);