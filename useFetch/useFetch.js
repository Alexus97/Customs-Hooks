import { useEffect, useState } from 'react';


const localCache = {};
export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    useEffect(() => {
      getFetch();
      
    
      
    }, [url]);

    const setLoadingState = () => {
      setState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
      });
    }

    const getFetch = async() => {
      
      if( localCache[url] ) {
        console.log('Usando cache');
        setState({
          data: localCache[url],
          isLoading: false,
          hasError: false,
          error: null,

        });
        return;
      }
      
      setLoadingState();

      const resp = await fetch( url );
      
      // sleep
      await new Promise( resolve => setTimeout(resolve, 1000) );

      if( !resp.ok) {
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          //error: 'No se pudo cargar la info'
          error: {
            code: resp.status,
            message: resp.statusText
          }
        });
        return;
      }

      const data = await resp.json();
      setState({//extraer el json.
        data: data,
        isLoading: false,
        hasError: false,
        error: null
      });
      

      //Manejo del cache.

      localCache[url] = data;

      //console.log({ data });
    }


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
