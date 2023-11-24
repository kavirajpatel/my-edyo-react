import React from "react";

function LatestPosts() {
    return (
        <>
         <div className="mymainbody" >

        <div className="mycontainer">
            <div className="myheading">Trending Posts</div>
            <div className="myfilter"> <span><i class="fa-solid fa-filter"></i></span>Filter by
                Categories </div>

            <div className="mycategories">
                <ul className="myunorderlist">
                    <li className="mylist">All</li>
                    <li className="mylist">Artificial Inteligence</li>
                    <li className="mylist">Cloud Computing</li>
                    <li className="mylist">DevOps</li>
                    <li className="mylist">Programming Languages</li>
                    <li className="mylist">Mobile Application Development</li>
                    <li className="mylist">Technology and Tools</li>
                    <li className="mylist">Get a Job in a Tech Company</li>
                    <li className="mylist">Others</li>
                </ul>
            </div>
        </div>
        </div>
        </>
    );
}
   

export default LatestPosts;