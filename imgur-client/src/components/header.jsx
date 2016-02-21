import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (<nav className="navbar navbar-default header">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                  Imgur Browser
                </Link>
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/">Topic #1</Link></li>
                </ul>
              </div>
            </nav>
          );
  }
}

Header.propTypes = { };

export default Header;
