import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from '../container/app';

import Header from './header';
import Footer from './footer';
import ArticleNews from './home/articleNews';
import GalleryNews from './home/galleryNews';
import LatestNews from './home/latestNews';

class Routing extends Component{
    render(){
        return(
             <Router>
                <div>
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<App/>}></Route>
                        <Route exact path="/articleNews" element={<ArticleNews/>}></Route>
                        <Route exact path="/galleryNews" element={<GalleryNews/>}></Route>
                        <Route exact path="/latestNews" element={<LatestNews/>}></Route>
                     </Routes>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default Routing;
