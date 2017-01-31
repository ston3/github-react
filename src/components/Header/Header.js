import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    shouldComponenteUpdate(){
        return false;
    }

    render() {
        return <div>
                    <header className='Header'>
                        <h1>Github Releases</h1>
                    </header>
                </div>
    }
}

export default Header;