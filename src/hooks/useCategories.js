import { useState } from "react";
import menus from "../helper/data";

const allCategories = ["all", ...new Set(menus.map((menu) => menu.category))];
console.log(allCategories)

const useCategories = () => {
    const [categories, setCategories] = useState(allCategories);

    return { categories, setCategories }
}

export default useCategories;