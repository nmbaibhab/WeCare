import React from "react";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import  econsultimg from '../../assets/img/econsult.jpg';

const HeroDescription = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img
                            class="object-cover object-center rounded"
                            alt="hero"
                            src= {econsultimg}
                        />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-800">
                        Instant appointment with doctors.    
                        <span class=" text-green-800"> Guaranteed.</span>
                        </h1>
                        <p class="mb-8 leading-relaxed">
                            <ul>
                                <li>
                                    <DoneOutlineIcon/><span className ="ml-3">Verified Doctors</span>
                                </li>
                                <li>
                                <DoneOutlineIcon/><span className ="ml-3">100% private and confidential</span>
                                </li>
                                <li>
                                <DoneOutlineIcon/><span className ="ml-3">No more waiting rooms</span>
                                </li>
                            </ul>
                        </p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                                Find me a Doctor
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroDescription;
