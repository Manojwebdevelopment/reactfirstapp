import React from 'react'

export default function Image(props) {
    const img=`https://source.unsplash.com/400x300/?${props.name}`;
  return (
    <>
        <img className='demo_img' src={img} alt='pic'/>
        
    </>
  )
}
