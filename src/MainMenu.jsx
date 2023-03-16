import React from 'react';

function MenuItems({items, set_page}) {

  return (
      items.map(menu_item =>
        <li
         key={menu_item.label}
         page={menu_item.page}
         onClick={set_page}
        >
          {menu_item.label}
        </li>)
  );
}

export default class MainMenu extends React.Component {
    constructor(props) {
      super(props);
      this.current_page = this.props.items[0].page;
  
      // This binding is necessary to make `this` work in the callback
      this.setCurrentPage = this.setCurrentPage.bind(this);
    }
  
    setCurrentPage(e) {
      let file = e.currentTarget.getAttribute('page');
      console.log("Setting page: "+file);
      this.current_page = file;
  
      fetch (file)
          .then(response => response.text())
          .then(responseText => document.getElementById(
                                 "js-current-page"
                                ).innerHTML = responseText);
    }
  
    render() {
      return (
        <ul>
        <MenuItems
          items={this.props.items}
          set_page={this.setCurrentPage}
        />
        </ul>
      );
    }
  }