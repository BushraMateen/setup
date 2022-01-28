import React, { useState,useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import dataitems from './data';
import { AddMenu } from './AddMenu';



const getLocalStorage = () => {
  let itemsList = localStorage.getItem('items');
  if(itemsList != null){
      if (itemsList.length > 2) {
        return (itemsList = JSON.parse(localStorage.getItem('items')));
      } else {
        return dataitems;
      }
    }
    else {
      return dataitems;
    }
};

const allCategories = ['all', ...new Set(getLocalStorage().map((item) => item.category))];

function App() {
  const [items, setItems] = useState(getLocalStorage());
  const [filteredItems, setfilteredItems] = useState(getLocalStorage());
  const [categories, setCategories] = useState(allCategories);
  const [isAddMenu,setIsAddMenu] = useState(false);


  const addMenu = (menu,isAdd) => { 
    if(menu.id !== undefined ) {
      const newItem = { menu};
      let newArray = items.concat(newItem.menu);
      setIsAddMenu(newItem)
      setItems(newArray);
 
  }
  else{
    setIsAddMenu(isAdd)
  }
    }

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(items);
      return;
    }
    const newItems = getLocalStorage().filter((item) => item.category === category);
    setfilteredItems(newItems);
  };
  useEffect(() => { 
    localStorage.setItem('items', JSON.stringify(items));

  }, [items]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        { isAddMenu ? <AddMenu addMenu={addMenu} Menuid = {items.length}/>: <div>
        <button className="filter-btn" onClick={() => setIsAddMenu(true)}>Add Menu</button>
        <Menu items={filteredItems} />
        </div>
}
      </section>
    </main>
  );
}

export default App;
