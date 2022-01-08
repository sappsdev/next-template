import Head from 'next/head';
import { Player } from '@lottiefiles/react-lottie-player';
import * as animationData from 'public/lottie/splash.json';
export const SplashLayout = () => { 
  return(
    <>
      <Head>
        <title>Cargando...</title>
      </Head>
      <div className="flex justify-center items-center p-6">
        <Player
          autoplay
          loop
          src={animationData}
          style={{ height: '200px', width: '200px' }}
        />
      </div>
    </>
  )
}