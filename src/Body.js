import React from 'react'

export default function Body() {
  return (
    <div className='body'>
      <h2 className='h1' >We Help </h2>
      <h2 className='h11'>Businesses </h2>
      <h2 className='h1'>Generate More </h2>
      <h2 className='h11'>Leads </h2>
      <h2 className='h1' >and </h2>
      <h2 className='h11'>Sales </h2>
      <h2 className='h1'>Through </h2>
      <h2 className='h11'>Social Media Marketing</h2>
      <div className='button-container'>
      <button className='button' onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          })
        } >Scale Your Business Now</button>
      </div>
    </div>
  )
}
