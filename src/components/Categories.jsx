
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
