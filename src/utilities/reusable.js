import { lazy } from "react";

const FORM = process.env.NEXT_PUBLIC_FORM_ID;
const P_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

//  Simulate IRL page loading.
export const slowImport = (value, ms = 1000) =>
  lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(value), ms);
      })
  );

//  default keyword inside resolve because its a component.
export const fakeImportComponent = (value, ms = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ default: value }), ms);
  });

export const sendEmail = async (body) =>
  await emailjs.sendForm("default_service", FORM, body, P_KEY);

//  ===============================================================================================
//  Dinamically allow kbd focus.
export const notSelectable = (condition) => {
  return { ...(condition && { tabIndex: -1 }) };
};
export const isEmpty = (str) => str.trim().length === 0;
export const isEmail = (email) => {
  const validation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validation.test(email);
};

//  [HowWorks]    Takes a string[] as 1st parameter.
//                Searches into an Object[] at the 2nd parameter
//                looking for a KEY, returns the concidence else Null.
//                Extra: If values.length is 0 -> false, any other number
//                        returns the values.
export const arrayCompareAndRetrieve = ({ aToLook, aToSearch, kToSearch }) => {
  const keyToSearch = (obj) => aToLook.includes(obj[kToSearch]);
  const foundValues = aToSearch.filter(keyToSearch);
  return foundValues.length ? foundValues : null;
};

//  [HowWorks]    Takes an [] to be referenced, creates a new array
//                that is not equal to the passed parameter then
//                inserts the 2nd parameter into the 1st position of the [].
//                Use case: Always displays the current client language
//                          as the 1st item in the language[].
export const sugarSplice = (array, insertedItem) => {
  if (!array.includes(insertedItem)) return [];
  let notEqual = (current) => current !== insertedItem;
  let excludedItem = [...array].filter(notEqual);
  return [insertedItem, ...excludedItem];
};
