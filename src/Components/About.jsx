import React from "react"

const About = () => {
  return (
    <div name="about" 
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-300 text-white">


        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className=" justify-center text-center pb-8 text-4xl font-bold border-b-4 border-gray-950">
            <h2 className="pb-2">About</h2>
            <h2 className="pb-2 text-gray-900">Let Me Introduce MySelf</h2>
            </div>
            
            <p className=" mx-4 mt-20 pt-5 text-justify text-2xl">MySelf Tanisha Gupta, persuing Masters Of Computer Application 
               from <a href="http://www.mnnit.ac.in/" className=" hover:text-black text-blue-600">Motilal Nehru National Institute Of Technology, Allahabad. </a>
                Enthusiastic about Problem Solving and want to experience new challenges and upgrade myself.
                Besides my interest in coding and Development, I also love to teach as 
                I am able to communicate and explain very well and using my 
               this strength I always take classes offline and teach students related to tech field.

               I am a member of Application Club, a club to teach and guide our juniors.
               Also I was a member of Anokhi Pehel, a community helps students who are not 
               financially stable to join tutions or school for education by teaching them.
               Currently I am in Designing, Developing, Coding. 
            </p>
        </div>

    </div>
  );
};

export default About;