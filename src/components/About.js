import React from 'react';

import blogData from '../data/blog';
// console.log(App);

function About(){
    return ( 
        <aside>
            <img src={blogData.image} alt="blog logo"/>
        <p>{blogData.about}</p>
      </aside>
 
    );
    
} 

export default About;