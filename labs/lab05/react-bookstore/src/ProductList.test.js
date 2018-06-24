import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';

it('renders ProductList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductList />, div);
  ReactDOM.unmountComponentAtNode(div);
});