import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';





const NavBar = () => {
  
  const [buttonVisible, setButtonVisible] = useState(false);
  const [showDrop, setShowDrop] = useState(false)

  const showButtonVisible = () => {
    if (buttonVisible === true) {
      setButtonVisible(false);
    }
    if (buttonVisible === false) {
      setButtonVisible(true);
    }
  };




  return (
    <div>
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
            <div className="flex-shrink-0">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="50.000000pt" height="50.000000pt" viewBox="0 0 200.000000 200.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
fill="rgb(81,79,294)" stroke="none">
<path d="M945 1746 c-22 -13 -95 -56 -163 -95 l-122 -72 2 -197 3 -196 168
-97 168 -97 167 97 167 97 3 197 2 196 -117 69 c-244 142 -218 133 -278 98z
m195 -125 l135 -78 0 -159 0 -159 -137 -78 -138 -79 -137 79 -138 79 0 159 0
158 135 78 c74 43 137 78 140 78 3 0 66 -35 140 -78z"/>
<path d="M980 1570 c0 -17 -9 -39 -20 -50 -15 -15 -20 -32 -18 -60 2 -45 -9
-63 -23 -38 -10 18 -39 14 -39 -5 0 -6 8 -19 17 -29 16 -18 15 -21 -5 -63 -15
-31 -19 -54 -15 -79 3 -20 9 -36 12 -36 4 0 21 29 39 65 31 64 32 65 72 65 40
0 41 -1 72 -65 18 -36 35 -65 39 -65 3 0 9 16 12 36 4 25 0 48 -15 79 -20 42
-21 45 -5 63 9 10 17 23 17 29 0 18 -30 24 -36 8 -12 -31 -24 -13 -24 34 0 31
-5 53 -15 61 -8 7 -15 21 -15 30 0 32 -12 50 -31 50 -14 0 -19 -7 -19 -30z"/>
<path d="M335 848 c-2 -13 -16 -88 -30 -168 -14 -80 -27 -155 -30 -167 -5 -21
-2 -23 30 -23 30 0 35 3 35 24 0 43 10 56 45 56 31 0 34 -3 40 -40 6 -36 10
-40 36 -40 37 0 37 -1 -4 210 l-32 165 -42 3 c-37 3 -43 0 -48 -20z"/>
<path d="M520 811 c0 -10 -7 -21 -15 -25 -8 -3 -15 -17 -15 -31 0 -16 6 -25
15 -25 12 0 15 -18 15 -104 0 -119 8 -136 66 -136 30 0 34 3 34 25 0 16 -6 25
-15 25 -12 0 -15 17 -15 95 0 78 3 95 15 95 10 0 15 10 15 30 0 20 -5 30 -15
30 -8 0 -15 9 -15 20 0 16 -7 20 -35 20 -28 0 -35 -4 -35 -19z"/>
<path d="M680 783 c-33 -11 -40 -36 -40 -149 0 -141 3 -144 106 -144 l74 0 0
150 0 149 -62 -1 c-35 0 -70 -3 -78 -5z"/>
<path d="M860 640 l0 -150 30 0 30 0 0 104 c0 122 4 136 36 136 20 0 24 5 24
30 0 32 -9 36 -41 20 -13 -7 -19 -7 -19 0 0 5 -13 10 -30 10 l-30 0 0 -150z"/>
<path d="M1023 779 c-30 -11 -35 -39 -31 -164 2 -80 7 -108 18 -115 8 -5 48
-10 88 -10 l72 0 0 150 0 149 -62 0 c-35 -1 -73 -5 -85 -10z"/>
<path d="M1190 783 c0 -3 14 -37 32 -75 l32 -69 -32 -65 c-18 -35 -32 -69 -32
-74 0 -6 14 -10 30 -10 27 0 33 6 50 43 l18 42 18 -42 c15 -39 21 -43 51 -43
18 0 33 2 33 5 0 3 -16 37 -35 74 l-34 69 29 66 c17 36 30 70 30 76 0 5 -13
10 -29 10 -25 0 -31 -6 -46 -42 l-17 -43 -16 43 c-15 38 -19 42 -49 42 -18 0
-33 -3 -33 -7z"/>
<path d="M1410 640 l0 -150 30 0 30 0 0 150 0 150 -30 0 -30 0 0 -150z"/>
<path d="M1531 773 c-19 -13 -21 -24 -21 -129 0 -64 5 -124 10 -135 9 -16 22
-19 85 -19 l75 0 0 149 0 150 -64 -1 c-40 0 -73 -6 -85 -15z"/>
</g>
</svg>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              <a href="/goals" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-white px-3 py-2 rounded-md text-sm font-medium" >Goals</a>
              

              <a href="/journals" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Journal</a>
              <a href="/posts" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Community</a>
              
              </div>
            </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              </button>
                <div className="ml-3 relative">
                <div>
                <button onClick={showButtonVisible} className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                </button>
              </div>
              {buttonVisible ? (
                 <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                 <a href="/journal" className="block px-4 py-2 text-sm text-indigo-500 hover:bg-indigo-800" role="menuitem">Your Journals</a>
 
                 <a href="/goal" className="block px-4 py-2 text-sm text-indigo-500 hover:bg-indigo-800" role="menuitem">Your Goals</a>
                  <div className="block px-4 py-2 text-sm text-indigo-500 hover:bg-indigo-700" role="menuitem">
                    <LogoutButton />
                  </div>
                 
               </div>
              ) : null }
              
                </div>
              </div>

            </div>

          </div>

        </div>
  </nav>
    </div>
  )
}

export default NavBar;