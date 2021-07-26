import { useReducer, useEffect, useMemo, useCallback } from "react";
import { useQueryParam } from "gatsby-query-params";
import noData from "../_context/state";
import Data from "../_context/data.class";

export default () => {
  const builderId = "60fadfdeb56dcf0008635ca2";
  const [query, setQuery] = useReducer(
    (current, next) => ({ ...current, ...next }),
    {
      data: null,
      error: false,
      loading: true,
    }
  );

  const baseUrl = useMemo(() => {
    console.log(
      `https://api.clasihome.com/rest/builders?builderId=${builderId}`
    );
    return `https://api.clasihome.com/rest/builders?builderId=${builderId}`;
  }, [builderId]);

  const getFeatured = async (id, typeId, maxProperties) => {
    try {
      console.log(id, typeId);
      const data = await fetch(
        //`https://api.clasihome.com/rest/properties?id=${id}&typeId=${typeId}&status=PUBLICADA&limit=${maxProperties}&integration=WEB&featured=true`
        `https://api.clasihome.com/rest/properties?id=${id}&typeId=${typeId}&status=PUBLICADA&integration=WEB&featured=true`
      );
      //const data = await fetch(`https://api.clasihome.com/rest/properties?id=${id}&typeId=${typeId}&status=PUBLICADA&limit=${maxProperties}`);
      const result = await data.json();
      return result;
    } catch (e) {
      console.log("ERROR PROPIEDADES DESTACADAS ", e);
    }
  };

  const getData = useCallback(async () => {
    try {
      if (builderId) {
        const data = await fetch(baseUrl);
        const result = await data.json();
        console.log("INITIAL DATA", result);
        const featuredProperties = await getFeatured(
          result.office,
          //"5e8e36b31c9d440000d35090",
          "office",
          6
        );
        result.home.properties.items = featuredProperties.properties;
        /* let propertiesUrl = `https://api.clasihome.com/rest/properties?id=${
          result.user ? result.user : result.office
        }&typeId=${result.user ? "user" : "office"}&status=PUBLICADA&limit=6`;
        if (!result.home.properties.items) {
          propertiesUrl =
            "https://api.clasihome.com/rest/properties?id=5e8e36b31c9d440000d35090&typeId=office&status=PUBLICADA&limit=6";
        } */
        /*  const propertiesData = await fetch(propertiesUrl);
        const propertiesResult = await propertiesData.json();
        result.home.properties.items = propertiesResult.properties; */
        console.log("FINAL DATA", result);
        setQuery({ loading: false, data: new Data(result) });
      } else throw new Error("No builderId");
    } catch (e) {
      console.log(e);
      //setQuery({ loading: false, error: true });
      const propertiesData = await fetch(
        `https://api.clasihome.com/rest/properties?id=5e8e36b31c9d440000d35090&typeId=office&status=PUBLICADA&limit=8`
      );
      const propertiesResult = await propertiesData.json();
      noData.home.properties.items = propertiesResult.properties;
      setQuery({ loading: false, error: false, data: noData });
    }
  }, [builderId]);

  useEffect(() => {
    /*if(builderId){
        getData();
      }
      else{
        setQuery({ loading: false, error: false, data: noData });
      }*/
    getData();
  }, [builderId]);

  return query;
};
