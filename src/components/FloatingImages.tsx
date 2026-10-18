import { useMemo } from 'react';

function FloatingImages() {

    const images = [
        '/typescript.png',
        'react.png',
        'express.png'
    ]

    const positions = useMemo(
    () =>
      images.map(() => ({
        top: 10 * 80,
        left: 20 * 80,
        duration: 3 + Math.random() * 4,
      })),
    []
  );


  return (
    <div className='absolute inset-0 overflow-hidden'>
      {
        images.map((item, index)=> (
            <img 
                className='p-2 rounded-[50%] absolute w-20 opacity-80 z-30 ' 
                style={{
                    top: `${positions[index].top}%`,
                    left: `${positions[index].left}%`,
                    animationDuration: `${positions[index].duration}s`,
                }}
                src={item} alt="" />
        ))
      }
    </div>
  )
}

export default FloatingImages
