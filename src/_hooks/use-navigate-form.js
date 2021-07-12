import { useReducer, useCallback, useContext } from 'react';
import context from '../_context';
import { navigate } from 'gatsby';
import { urlBuilder } from '../_util';

export default (inputs)=> {
  const [params, setParams] = useReducer((current, next) => ({ ...current, ...next }), inputs);
  const builderId = useContext(context).builderId;

  const onChange = e => {
    setParams({ [e.target.id]: e.target.value });
  }
  const onFinish = useCallback(()=> {
    const url = urlBuilder(`/properties`, { builderId,...params});
    navigate(url);
  },[params, builderId]);

  return { values: params, onChange, onFinish, setInitial: setParams }
}