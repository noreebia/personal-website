import React from 'react'
import './style.css';

function NavigationMenu() {
    return (
        <div id = "navigation-bar">
            <ul id="navigation-menu">
                <li><a href="/blog/personal">Personal Blog</a></li>
                <li><a href="/blog/tech">Tech Blog</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    );
}

export default NavigationMenu;


