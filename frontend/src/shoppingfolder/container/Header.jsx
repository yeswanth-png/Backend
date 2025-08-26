import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <div className='headerSection'>
        <div className='left'>
            <div className='title'>
                <h2>Shopping Mall</h2>
            </div>
        </div>
        <div className='center'>
            <ul>
                <li>
                    Women
                </li>
                <li>
                    Men
                </li>
                <li>
                    Children
                </li>
                <li>
                    Beauty
                </li>
            </ul>
        </div>
        <div className='search'>
            <input type='text' placeholder='Search for products'/>

        </div>
        <div className='right'>
            <div className='signin'> <Link to="/Signin">Signin</Link> / <Link to="/Signup">Signup</Link></div>
            <div className='cart'>Cart</div>
        </div>
    </div>
    </div>
  )
}

export default Header
