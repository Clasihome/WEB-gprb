import { useContext } from 'react';
import context from '../_context/';

export default (url, location) => {
  const { typeId, id } = useContext(context).office;
  const fixedParams = `&status=PUBLICADA&limit=6&typeId=${typeId}&id=${id}`;
  const search = location.search ? location.search : '?';
  return url + search + fixedParams;
}