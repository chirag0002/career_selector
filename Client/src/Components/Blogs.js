import React from 'react';
import "../styling/blogs.css";
import EngineeringBlogs from "../Images/Engineering-Blog.png";


const Blogs = () => {
    return (
        <>
        
        
       
       <h1 className="blog_title"> Blogs </h1>
       
        <div className="blogs-container_1">
        <div className="blog_card">
        <div className="blog_image">
        <img src={EngineeringBlogs} className="engineering_blog" alt="" />
        </div>
        <div className="blog_heading">
        <h2 className="heading_blog_tag"> It's time to read more facts about Engineering</h2>
        </div>
        <div className="blog_para">
        <p className="blog-paragraph"> What is an engineering blog?
In any given year, engineering blogs provide a great opportunity to stay connected with the larger conversations in your field.These blogs focus on more than just cool gadgets though. These 11 awesome blogs focus a lot more about many companies, including business, ethics and engineering's role in larger society. </p>
        </div>
        
        <div className="blog_card_btn"> 
        <button className="blogs_card_btn"> <a class="link_blog"href="https://www.engineeringdaily.net/">Read more</a> </button>
        </div>
        </div>
<div className="blogs-container_1">
         <div className="blog_card">
        <div className="blog_image">
        <img src={EngineeringBlogs} className="engineering_blog" alt="" />
        </div>
        <div className="blog_heading">
        <h2 className="heading_blog_tag"> It's time to read more facts about Engineering</h2>
        </div>
        <div className="blog_para">
        <p className="blog-paragraph"> What is an engineering blog?
In any given year, engineering blogs provide a great opportunity to stay connected with the larger conversations in your field.These blogs focus on more than just cool gadgets though. These 11 awesome blogs focus a lot more about many companies, including business, ethics and engineering's role in larger society. </p>
        </div>
        <div className="blog_card_btn"> 
        <button className="blogs_card_btn"> <a class="link_blog"href="https://www.engineeringdaily.net/">Read more</a> </button>
</div>
</div>
      
      </div>
   
      
       
     
   
    
   
     

     
      </div>
      
      </>

    )
}

export default Blogs
