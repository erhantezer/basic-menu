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

export default useFilters