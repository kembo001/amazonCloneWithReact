import React from 'react'

function Header() {
  return (
    <div className='header'>
      <img className='header_logo' src='img/AmazonLogo.png'/>

      <div className='header_search'>
          <input className='header_searchInput' type= 'text' />
          {/* Logo */}
      </div>
    </div>
  )
}

export default Header