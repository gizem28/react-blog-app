import React from 'react';
import Card from '@mui/material/Card';
import BlogCard from './BlogCard';

const SearchList = ({filteredList}) => {
    const filtered= filteredList.map(item => <BlogCard key={item.id} item={item}/>)
  return <div>
     {filtered}
  </div>;
};

export default SearchList;
