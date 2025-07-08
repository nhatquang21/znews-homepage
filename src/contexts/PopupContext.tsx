'use client'

import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useState
} from "react";

type Type = {
  isActivePopup: boolean;
  setIsActivePopup: Dispatch<SetStateAction<boolean>>;
};

export const PopupContext = createContext<Type>({
  isActivePopup: false,
  setIsActivePopup: () => {},
});

export default function CaiPopupProvider({ children }: PropsWithChildren) {
  const [isActivePopup, setIsActivePopup] = useState(false);

  return (
    <PopupContext.Provider
      value={{
        isActivePopup,
        setIsActivePopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}
