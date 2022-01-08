
import * as animationData from '../public/lottie/empty.json'
export const AppEmpty = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }; 
  
  return(
    <div className='flex flex-row justify-center items-center p-6'>
    </div>
  )
}