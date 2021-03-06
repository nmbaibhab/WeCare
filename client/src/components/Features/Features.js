import React from 'react';
import Econsult from "../FreaturesCard/Econsult"
import Bookcheckup from '../FreaturesCard/Bookcheckup';
import Labtest from '../FreaturesCard/Labtest';

const features = () => {
    return (
        <div>
            <section class="text-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Your Health. Our Priority</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700 text-opacity-80">Feel more connected and safe with world class medical ecosystem at your finger tips. </p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <Econsult />
                        <Bookcheckup />
                        <Labtest />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default features
