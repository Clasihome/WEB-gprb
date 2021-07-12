import { useEffect, useState } from 'react';

export default (threshold = 0) => {
  const [target, setTarget] = useState(null);
  const [observed, setObserved] = useState(false);

  useEffect(()=>{
    const options = {
      marginRoot: '0px',
      threshold
    }
    const observer = new IntersectionObserver((entry, observer)=>{
      if(entry[0].isIntersecting){
        setObserved(true);
      } else{
        setObserved(false);
      }
    }, options)

    if(target) observer.observe(target);

    return ()=> {
      if(target) observer.unobserve(target)
    };
  },[target]);

  return [observed, setTarget];
}
