import React from 'react';
import ReactDOM from 'react-dom';

import MainMenu from './MainMenu';

console.log("Window has loaded");

let menu1 = [
  { label: "Item1", page: "test.html"},
  { label: "Item2", page: "test2.html"},
];

console.log(menu1);

ReactDOM.render(
    <MainMenu items={menu1} />,
    document.getElementById('js-main-menu')
);
