import React from "react";
import Features from "./Features";
import Hero from "./Hero";
import './style/splash.css'

const Splash = () => {
    return (
        <div>
            <Hero />
            <hr class="border-b-2 border-gray-600"></hr>
            <Features />
        </div>
    )
}

export default Splash;