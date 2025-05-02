import React from 'react';

const Category = ({cat}) => {
    const {name} = cat;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Category;