import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {data} = useLoaderData()
    return (
        <div className='overflow-hidden'>
            <h2 className='font-semibold mb-2'>Dragon News</h2>
            <div className='space-y-2'>
                {
                    data.map((singleNews, idx) => <NewsCard key={idx} news={singleNews}></NewsCard>)
                }
                {
                    data && <p className='text-3xl font-semibold text-red-600 h-80 flex items-center justify-center'>There is no content here</p>
                }
            </div>
        </div>
    );
};

export default CategoryNews;