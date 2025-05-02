import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {   
    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, SetCategoryNews] = useState([]);

    useEffect(()=>{
        if (id == "0") {
            SetCategoryNews(data)
            return
        }else if ( id == "1" ){
            const todaysNews = data.filter(news => news.others.is_today_pick == true);
            SetCategoryNews(todaysNews);
        }
        else{
            const loadCatData = data.filter(news => news.category_id == id);
            SetCategoryNews(loadCatData);
        }
        
    }, [data, id])
    
    
    return (
        <div>
            <h2 className='text-xl font-semibold mb-5'>Total <span className='text-secondary'>{categoryNews.length}</span> News Found</h2>

            <div className='grid grid-cols-1 gap-10'>
                {
                    categoryNews.map(news => <NewsCard
                        key={news.id}
                        news={news}
                    ></NewsCard>)
                }
            </div>

        </div>
    );
};

export default CategoryNews;