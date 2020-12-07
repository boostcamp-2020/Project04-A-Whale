import React, { useState, useCallback } from 'react';

export default useValidator = ({ initialState, validator }) => {
  const [value, setValue] = useState(initialState);
  const [isValid, setIsValid] = useState(true);
  return [value, setValue, isValid];
};
