import useObjectState from "app/hooks/state/useObjectState";
import {useMutation} from "react-query";


export const usePureMutation = (fn, passedConfig) => {

  const {
    onError,
    onSuccess,
    handleError,
    handleSuccess,
    ...config
  } = passedConfig || ({});

  const [
    {
      errorStatus,
      errors,
    },
    setState
  ] = useObjectState({
    errorStatus: null,
    errors: null,
  });

  const handleInnerError = (error) => {
    const errorCode = error?.response?.status;
    const errorMessage = error?.response?.statusText;
    const errorData = error?.response?.data;
    let errorStatus = null;
    if(errorData?.message || errorMessage) {
      errorStatus = errorData.message || errorMessage || `Error, code #${errorCode}`;
    }
    let errors = {};
    let hasErrors = false;
    if(errorData?.errors && errorData.errors?.length) {
      for (let i = 0; i < errorData.errors.length; i++) {
        const err = errorData.errors[i];
        if (err?.code && err?.message) {
          hasErrors = true;
          errors[err.code] = err.message;
        }
      }
    }
    setState({
      errors: hasErrors ? errors : null,
      errorStatus,
    });
  }

  const handleInnerSuccess = () => {
    setState({status: null, errors: null});
  }


  const mutation = useMutation(
    fn,
    {
      ...config,
      onSuccess: (...props) => {
        handleInnerSuccess();
        if(typeof handleSuccess === 'function') {
          handleSuccess(...props)
        } else if(typeof onSuccess === 'function') {
          onSuccess(...props);
        }
      },
      onError: (...props) => {
        handleInnerError(...props)
        if(typeof handleError === 'function') {
          handleError(...props)
        } else if(typeof onError === 'function') {
          onError(...props);
        }
      },
    }
  );

  const mutate = (data) => {
    if(!mutation.isLoading) {
      mutation.mutate(data);
    }
  }

  return ({
    ...mutation,
    mutate,
    errors,
    errorStatus,
  });

}
