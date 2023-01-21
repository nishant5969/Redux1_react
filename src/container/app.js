import React, {Component } from 'react';
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {ArticleList} from '../actions/index';

import ArticleNews from '../components/home/articleNews';
import GalleryNews from '../components/home/galleryNews';
import LatestNews from '../components/home/latestNews';


class App extends Component{
 
    componentDidMount(){
        this.props.ArticleList();
    }

    render(){
        return(
            <div>
                <ArticleNews ass={this.props.data.articledata}/>
                <LatestNews/>
                <GalleryNews/>
            </div>
        )
    }
}

function mapStatetoProps(state){
    return{
        data:state
      }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ArticleList},dispatch)
}


export default connect(mapStatetoProps,mapDispatchToProps)(App);

