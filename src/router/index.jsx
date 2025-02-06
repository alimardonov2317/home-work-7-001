import React from 'react';
import "@/App.css";
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/Home';
import About from '@/pages/about/About';
import { Blog } from '@/pages/blog/Blog';
import Contact from '@/pages/contact/Contact';
import NotFound from '@/pages/notFound/NotFound';
import Detail from '@/components/detail/Detail';
import Wishlist from '@/pages/wishlist/Wishlist';
import Layout from '@/components/layouts/Layouts';

function MainRouter() {
    return (
        <Routes>
            <Route path='/' element={<Layout><Home /></Layout>} />
            <Route path='/about' element={<Layout><About /></Layout>} />
            <Route path='/blog' element={<Layout><Blog /></Layout>} />
            <Route path='/contact' element={<Layout><Contact /></Layout>} />
            <Route path='/wishlist' element={<Layout><Wishlist /></Layout>} />
            <Route path='*' element={<Layout><NotFound /></Layout>} />
            <Route path='/product/:id' element={<Layout><Detail /></Layout>} />
        </Routes>
    );
}

export default MainRouter;
