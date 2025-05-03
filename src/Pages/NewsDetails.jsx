import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/SidebarLayouts/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../Components/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});
    useEffect(()=>{
        const findNews = data.find(n => n.id === id);
        setNews(findNews)
        window.scrollTo(0, 0);
    },[data, id])
    

    return (
        <div>
            <header className='max-w-[1280px] mx-auto px-5 md:px-0'>
                <Header></Header>
            </header>
            <main className='max-w-[1280px] mx-auto my-10 grid gap-6 grid-cols-12 px-5 lg:px-0'>
                <section className=' col-span-12 md:col-span-9'>
                    <h2 className='text-2xl font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='sticky top-3 h-fit col-span-12 md:col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;