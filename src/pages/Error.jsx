import React, {useEffect} from 'react'
import Error404 from '../components/Error/404';

const Error = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='h-screen-78 w-[1100px] mx-auto py-12'>
        <Error404 />
    </div>
  )
}

export default Error
