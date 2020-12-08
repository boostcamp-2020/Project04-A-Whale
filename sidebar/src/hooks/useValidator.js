import { useState, useCallback } from 'react';

const useValidator = (initialState, validationFunc1, message1, validationFunc2, message2) => {
  const [value, setValue] = useState(initialState);
  const [ErrorMsg, setErrorMsg] = useState('');

  const changeHandler = useCallback((e) => {
    setValue(e.target.value, [value]);
  });

  let validHandler = null;
  if (validationFunc1) {
    validHandler = useCallback(async () => {
      if (!validationFunc1(value)) {
        setErrorMsg(message1);
        return false;
      }
      if (validationFunc2 && !(await validationFunc2(value))) {
        setErrorMsg(message2);
        return false;
      }
      setErrorMsg('');
      return true;
    }, [value]);
  }

  return [value, changeHandler, ErrorMsg, validHandler, setErrorMsg];
};

export default useValidator;
