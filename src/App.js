import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import { AddMenu } from './AddMenu';
import menu from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [Items, setItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [isAddMenu,setIsAddMenu] = useState(false);
  const [menuItems, setMenuItems] = useState({});
  // id: 8,
  // title: 'american classic',
  // category: 'lunch',
  // price: 12.99,
  // img: './images/item-8.jpeg',
  // desc: `on it tumblr kickstarter`

  const addMenu = (menu) => {
    //preventDefault();
    //const newMenu = menuItems.push(menu);
    //copy the content
    let copy = [...Items];
    copy = [...copy, { id: 10, title: 'american classic', category: 'lunch' , price: 12.99, img: './images/item-8.jpeg', desc: `on it tumblr kickstarter`}];
    if(menu !== null){
      
      setItems(copy);
      setMenuItems(copy);
      console.log(Items);
      console.log(menuItems);
      //setId(menuItems.length);
    }

    
  }
  const filterItems = (category) => {
    if (category === 'all') {
      setItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        { isAddMenu ? <AddMenu addMenu={addMenu} Menuid = {Items.length}/>: <div>
        <button className="filter-btn" onClick={() => setIsAddMenu(true)}>Add Menu</button>
        <Menu items={Items} />
        </div>
}
      </section>
    </main>
  );
}

export default App;
