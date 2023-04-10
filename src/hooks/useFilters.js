import { useGlobalContext } from "../context";
import menus from "./helper/data"

const useFilters = () => {
    const {setMenuItems} = useGlobalContext()

    const filterMenus = (gelenKategori) => {

    };

    return { filterMenus }
}

export default useFilters