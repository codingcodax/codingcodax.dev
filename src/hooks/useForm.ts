import { ChangeEvent, useState } from 'react';

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.id]: e.target.value });

  return [values, handleChange];
};

export default useForm;
