import { useCallback, useState } from "react";

export default function useToggle(initialState = false) {
  const [initialValue, setValue] = useState(initialState);

  // Define and memorize toggler function,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(
    () => setValue((initialValue) => !initialValue),
    []
  );

  return [initialValue, toggle];
}
