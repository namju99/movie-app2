import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-container'>
        <div className='header-wrap'>
            <div className='header-left-wrap'>
                <ul>
                    <li>
                        <Link className="header-nav-item" to="/movies">
                            영화
                        </Link>
                    </li>
                    <li>
                        <Link className="header-nav-item" to="/tv">
                            tv프로그램
                        </Link>
                    </li>
                    <li>
                        <Link className="header-nav-item" to="/person">
                            인물
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

