import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
const[{basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
      
      <Link to= '/'>
        <img className='header_logo' src='https://silverhillsbakery.ca/wp-content/uploads/2021/03/Amazon-logo-white-1110x403.png' alt=''/>
      </Link>
      <div className='header_search'>
          <input className='header_searchInput' type= 'text' />
          <SearchIcon className='header__searchIcon'/>
          {/* Logo */}
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>Hello Guest</span>
          <Link to = '/login'> 
          <span className='header_optionLineTwo'>Sign In</span>
          </Link>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
      <Link to="/checkout">
        <div className='header_optionBasket'>
          <LocalMallIcon className='cart'/>
          <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
        </div>
      </Link>
      </div>

    </div>
  )
}

export default Header