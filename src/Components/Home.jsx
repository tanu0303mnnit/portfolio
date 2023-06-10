import React from "react";
import Myimage from "../assets/MyImage.jpg";
import {MdArrowRight} from "react-icons/md"
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" 
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">

       <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 "> 
        <div className="flex flex-col justify-center h-full"> 
           <h2 className="text-4xl sm:text-7xl font-bold text-white"> 
           I'm Programmer</h2> 
           <p className=" text-gray-500 py-4 max-w-md ">
            I am dhwefhesiofdklnc
            efnweklfn
            efklwenf
            ejfnslkfn
            nfkles
           </p>
           <div>
            <Link
            to="project"
            smooth
            duration={500}
            className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-slate-400 to-slate-700 cursor-pointer"
            >
              Portfolio
                <span className="group-hover:rotate-90 duration-300">
                    <MdArrowRight className="ml-1"/>
                </span> 
            </Link>
           </div>
        </div>
       
        <div>
            <img src={Myimage} alt="MyProfile" className=" rounded-2xl mx-auto w-2/3 h-60 px-10 md:w-full" />
        </div>
      
       </div>

    </div>
  );
};

export default Home