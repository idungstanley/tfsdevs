import { createContext, useContext } from 'react';

interface IMenuContext {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const defaultMenuContext: IMenuContext = {
  isMenuOpen: false,
  setIsMenuOpen: () => {}
};

const MenuContext = createContext<IMenuContext>(defaultMenuContext);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
};

interface IMenuProvider {
  children: React.ReactNode;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const MenuProvider = ({ children, isMenuOpen, setIsMenuOpen }: IMenuProvider) => {
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;

export { MenuProvider };
