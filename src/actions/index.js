import { useState, useEffect } from 'react';

export function ArticleList()
{
   const [article, setArticles] = useState();

   useEffect(() => {
      fetch("http://localhost:8900/articles", { method:'GET' })
      .then(response => response.json())
      .then(data => setArticles(data))  
      .catch(error => {
         throw error
      })    
   },[article]);
   
   return(
      {
         type:'GET_ARTICLE',
         payload:article
      } 
     )

}



