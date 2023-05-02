import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Profile.scss';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://twitter.com/Kevay_'>
                                <i className='fa fa-twitter'></i>
                            </a>
                            <a href='https://www.instagram.com/kevin.bommel/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.twitch.tv/kevaytwitch'>
                                <i className='fa fa-twitch'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello my name is <span className='highlighted-text'>Kevin</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <TypeAnimation
                                repeat={Infinity}
                                sequence={[
                                    "Frontend Dev 💻",
                                    1000,
                                    "React/React Native Dev 📱",
                                    1000,
                                    "Wordpress Developer 🔴",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Building front end applications.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Hire me{" "}
                        </button>
                        <a href='kevincv.pdf' download='Kevin kevincv.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>

                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}