import React, {useEffect, useRef} from "react";
import {useAuth} from "app/hooks/auth/useAuth";
import useObjectState from "app/hooks/state/useObjectState";
import axios from "axios";
import {Spinner} from "reactstrap";
import {X} from "react-bootstrap-icons";

const getConfig = (codeToken, token) => {
  if (codeToken) {
    return {
      headers: {
        'Accept': 'image/jpeg',
      },
      data: {
        code: codeToken
      },
      method: 'POST'
    }
  } else {
    return {
      headers: {
        'Accept': 'image/jpeg',
        'Authorization': token,
      },
      method: 'GET',
    }
  }
}

export const ImageWithAuth = ({
                                codeToken,
                                url,
                                allowOverflow,
                                className,
                                errorComponent,
                                loadingComponent,
                                Component
                              }) => {

    const img = useRef();
    const {token} = useAuth();
    const [{isLoading, isError}, setState] = useObjectState({
      isLoading: true,
      isError: false
    });
    let source = axios.CancelToken.source();
    useEffect(() => {
      axios({
        url,
        responseType: 'arraybuffer',
        cancelToken: source.token,
        ...getConfig(codeToken, token)
      })
        .then((res) => {
          const blob = new Blob([res.data], {
            type: 'image/jpeg',
          });
          setState({isLoading: false});
          const objectURL = URL.createObjectURL(blob);
          if (img.current != null)
            img.current.src = objectURL;
        })
        .catch(err => {
          if (!axios.isCancel(err)) {
            setState({isLoading: false, isError: true});
          }
        })

      return source.cancel
    }, []);

    return (
      <>
        {isLoading && (
          loadingComponent ? loadingComponent : <Spinner size="md"/>
        )}
        {isError ? (
          errorComponent ? errorComponent : <X className="text-danger"/>
        ) : (
          Component ?
            <Component
              ref={img}
            />
            :
            <img
              src={""}
              alt={""}
              ref={img}
              className={`img-fluid ${!allowOverflow && "mh-90vh"} ${className}`}
            />
        )}
      </>
    );

  }
;
export const ImageWrapperWithAuth = (
  {
    url, allowOverflow, className, codeToken
  }
) => (
  <div className="p-0 bg-transparent">
    <ImageWithAuth
      url={url}
      allowOverflow={allowOverflow}
      className={className}
      codeToken={codeToken}
      errorComponent={<h5 className="text-center">Nie udało się pobrać pliku.</h5>}
      loadingComponent={(
        <div className={`w-100 justify-content-center d-flex `}>
          <Spinner/>
        </div>
      )}
    />
  </div>
)
