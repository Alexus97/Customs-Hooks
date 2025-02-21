import { useState } from "react";



export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm);

    //const { username, email, password } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        //console.log({ name, value });
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
      setFormState( initialForm );
    }

  return {
    ...formState, // desestructuramos el form state y se realiza la extraccion en el componente de formwithcustomhook.
    formState,
    onInputChange,
    onResetForm,
  }

}


