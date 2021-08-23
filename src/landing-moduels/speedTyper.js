import gsap from 'gsap/gsap-core';
import React from 'react'

import Header from './header';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function SpeedTyperLanding() {
    return(
        <>
        <Header />
        <p>Speed Typer</p>
        
            <Router forceRefresh>
              <NavLink id="GS-MTM-Link" to="/gsap">
                Visit Page
              </NavLink>
            </Router>'
        </>
    )
}