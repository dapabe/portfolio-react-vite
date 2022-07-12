import { useMemo } from "react";

import useToggle from "@hooks/useToggle";
import useNoScroll from "@hooks/useNoScroll";
import useKeyboard from "@hooks/useKeyboard";
import { GlobalContext } from "@context/states";

//  TODO:     Map each event case.
//            Fix global bug on key
//            interference with user input.

//  1.On document load.
//  2.Events.
export default function GlobalState({ children }) {
  const [isMenuOpen, handleMenu] = useToggle(false);
  const [isLangOptionsOpen, handleLangOptions] = useToggle(false);
  // const events = [
  //   { key: "m", cb: handleMenu, condition: true },
  //   { key: "Escape", cb: handleMenu, condition: isMenuOpen },
  // ];

  //  1.
  const lockScreenConditions = [isMenuOpen, isLangOptionsOpen].some(Boolean);
  useNoScroll(lockScreenConditions);
  useKeyboard({ key: "m", cb: handleMenu });

  //=====================================================================

  const memoValues = useMemo(
    () => ({
      isMenuOpen,
      handleMenu,
      isLangOptionsOpen,
      handleLangOptions,
      lockScreenConditions,
    }),
    [isMenuOpen, isLangOptionsOpen]
  );

  return (
    <GlobalContext.Provider value={memoValues}>
      {children}
    </GlobalContext.Provider>
  );
}
