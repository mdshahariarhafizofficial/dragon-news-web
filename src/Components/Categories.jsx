import React, { use } from 'react';
import Category from './Category';
const loadCategories = fetch('categories.json')
.then(res => res.json())

const Categories = () => {
    const categories = use(loadCategories);
    
    return (
        <div>
            <h2 className='text-xl font-medium'>All Category</h2>
            <div>
                {
                    categories.map(cat => <Category
                        key={cat.id} 
                        cat={cat}
                        ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;