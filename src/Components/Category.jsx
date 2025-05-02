import React from 'react';
import { NavLink } from 'react-router';

const Category = ({cat}) => {
    const {name, id} = cat;
    return (
        <>
            <NavLink 
            to={`/category/${id}`}
            className={
                ({isActive})=>
                    isActive ? " pl-10 py-2 rounded bg-base-300 font-bold": "pl-10 py-2 text-accent bg-white shadow-none border-none"
                }>{name}</NavLink>
        </>
    );
};

export default Category;