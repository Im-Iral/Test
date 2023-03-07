import React from 'react'
import Typical from 'react-typical'
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='#'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-instagram'></i>
                        </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className='highlighted-text'>Mark Justine Iral</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Learning New Things",
                                    1000,
                                    "Beginner Dev",
                                    1000,
                                    "React/React Native Dev",
                                    1000,
                                    "Image Processing Dev",
                                    1000,
                                ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            The quick brown fox jumps over the lazy dog, the lazy dog jumps again.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Find Me{" "}
                    </button>
                    {/*download='Ehiedu ehizcv.pdf'   this code is for auto download the resume. naka paloob ito sa loob ng a tag*/}
                    <a href='ehizcv.pdf'>
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
