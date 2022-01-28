import React, { useState, useEffect} from "react";


 export function AddMenu({addMenu, Menuid}) {
    

  const [menu, setMenu] = useState(
      {
          id: Menuid + 1,
          title: "",
          category: "",
          price: 0,
          img:"",
          desc:""
});


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "price") {
        setMenu(values => ({...values, [name]: Number(value)}))
    }
    else
    setMenu(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
      //setMenu(values => ({...values, id : Menuid + 1}))
      const menuItem = menu;
      console.log(menu);
      
      addMenu(menuItem,false,);
  }
  const handleCancel=() => {
    addMenu({},false,);
  }

  return (
      <div className="Add-btn">
    <form onSubmit={handleSubmit} >
      <label>Enter title:
        <input
          type="text" 
          name = "title"
          value={menu.title}
          onChange={handleChange}
        />
      </label>
      <label>Enter category:
        <input
          type="text" 
          name="category"
          value={menu.category}
          onChange={handleChange}
        />
      </label>
      <label>Enter price:
        <input
          type="text" 
          name="price"
          value={menu.price}
          onChange={handleChange}
        />
      </label>
      <label>Enter image:
        <input
          type="text" 
          name="img"
          value={menu.image}
          onChange={handleChange}
        />
      </label>
      <label>Enter description:
        <input
          type="text" 
          name="desc"
          value={menu.description}
          onChange={handleChange}
        />
        <input type="submit" onSubmit={handleSubmit}/>
        <button onClick={handleCancel}>Cancel</button>
      </label>
    </form>
    </div>
  )
}
