import React from 'react';

const ArticleNews = (props) => {
 return(
    <div>
         {
            props.ass.map((article) => {
            return(
              <div key={article.id}>
                 <h2>{article.title}</h2>
                 <p>{article.body}</p>
              </div>
               )
          })
          }
      </div>
    )
  }


export default ArticleNews;


//const ArticleNews = (props) => {
//
//  const renderLsist = ({ass}) =>{
//     if(ass){
//       return ass.map((item) => {
//          return(
//            <div key={item.id} className="image-cover" style={{}}>
//               <div className="description">
//                   <p>{item.title}</p>
//                   <div>{item.body}</div>
//               </div>
//            </div>
//          )
//       })
//     }
//  }

//const ArticleNews = (props) => {
//    return(
//      <div>
//      {props.articles.map(article => (
//          <div key={article.id}>
//              <h2>{article.title}</h2>
//              <p>{article.content}</p>
//          </div>
//      ))}
//     </div> 
//    )
//  }