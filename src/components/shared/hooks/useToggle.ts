import { useState, useCallback, MouseEventHandler } from "react";



/**
 * @param initBool Inicializado como `false`
 * @returns Un arreglo con el booleano inicial y la funcion que lo invierte.
 * @example [isValid, toggleValidation] = useToggle(false)
 *  isValid -> false;
 *  toggleValidation();
 *  isValid -> true;
 *  toggleValidation();
 *  isValid -> false;
 */

export default function useToggle(initBool: boolean = false): [boolean, (() => void)] {
  const [bool, setBool] = useState(initBool);

  const toggler = useCallback(() => setBool((prev) => !prev), [initBool]);

  return [bool, toggler];
}