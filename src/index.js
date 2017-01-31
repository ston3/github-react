import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header';
import SearchContainer from './containers/SearchContainer';

ReactDOM.render(
  <div>
    <SearchContainer></SearchContainer>

  </div>,
  document.getElementById('root')
);
