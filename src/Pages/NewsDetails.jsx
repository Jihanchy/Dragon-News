import React from 'react';
import Header from '../Components/Header';
import RightNav from '../Components/LayoutComponent/RightNav';
import { Link, useLoaderData } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
const NewsDetails = () => {
    const data = useLoaderData()
    const news = data.data[0]
    const {thumbnail_url,title,details,image_url,category_id} = news
    return (
        <div className=''>
            <header>
                <Header></Header>
            </header>
            <section className='grid grid-cols-12 w-10/12 mx-auto gap-5'>
                <div className='col-span-9'>
                    <h1 className='font-semibold pb-2'>Dragon News</h1>
                    <div className="card bg-base-100 border-2 rounded-md border-gray-100">
                        <figure className="px-4 pt-4 rounded-sm h-[450px]">
                            <img
                                src={image_url}
                                alt="Shoes"
                                className="rounded-sm w-full  h-full object-cover" />
                        </figure>
                        <div className="card-body px-4 py-3">
                            <h2 className="card-title text-2xl font-semibold">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${category_id}`} className="btn btn-sm bg-[#D72050] text-white"><GoArrowLeft className='font-bold'/>All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'><RightNav></RightNav></div>
            </section>
        </div>
    );
};

export default NewsDetails;