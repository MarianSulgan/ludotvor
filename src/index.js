/**
 * @todo: add support for absolute paths, for example use
 * environment variables, NODE_ENV. Instead of ugly relatives,
 * see imports in components .scss files.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import 'es6-shim';

import Routes from './components/Routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './style.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
