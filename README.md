# Menu Project

## context.js
```js
import { createContext, useContext, useState } from "react";
import menus from "./helper/data";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export const AppContextProvider = ({children}) => {
    const [menuItems, setMenuItems] = useState(menus);

    const value = { menuItems, setMenuItems };

    return (
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        )
};
```

## App.js
```js
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Home/>
    </>
  );
}

export default App;
```

## Home.jsx
```js
import Categories from '../components/Categories'
import Menu from '../components/Menu'

const Home = () => {
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories />
                <Menu />
            </section>
        </main>
    )
}

export default Home
```

## Categories.jsx
```js

import useCategories from '../hooks/useCategories';
import useFilters from '../hooks/useFilters';

const Categories = () => {
    const { categories } = useCategories();
    const { filterMenus } = useFilters();

    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterMenus(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;

```

## Menu.js
```js
import { useGlobalContext } from '../context';

const Menu = () => {
    const { menuItems } = useGlobalContext();

    return (
        <div className='section-center'>
            {menuItems.map((menuItem) => {
                const { id, title, img, desc, price } = menuItem;
                return (
                    <article key={id} className='menu-item'>
                        <img src={img} alt={title} className='photo' />
                        <div className='item-info'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Menu;
```

## useCategories.js
```js
import { useState } from "react";
import menus from "../helper/data";

const allCategories = ["all", ...new Set(menus.map((menu) => menu.category))];
console.log(allCategories)

const useCategories = () => {
    const [categories, setCategories] = useState(allCategories);

    return { categories, setCategories }
}

export default useCategories;
```

## useFilters.js
```js
import { useGlobalContext } from "../context";
import menus from "../helper/data";

const useFilters = () => {
    const {setMenuItems} = useGlobalContext()

    const filterMenus = (gelenKategori) => {
        if(gelenKategori === "all"){
            setMenuItems(menus);
            return;
        }
        const newMenus = menus.filter((menu) => menu.category === gelenKategori);
        setMenuItems(newMenus)
    };

    return { filterMenus }
}

export default useFilters;
```