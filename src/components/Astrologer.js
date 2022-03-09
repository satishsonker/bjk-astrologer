import React from 'react'
import '../css/components/Astrologer.css'
export default function Astrologer() {
  return (
    <>
    <div className='astro-header'>
      <div className='layover'>
      <div className="d-flex align-items-center layover-content">
                          <div className="flex-shrink-0">
                              <img className='astro-image' src="../Images/logo/bjkLogo64.png" alt="..." />
                          </div>
                          <div className="flex-grow-1 ms-1">
                              <div className="d-flex flex-column bd-highlight mb-1 p-2">
                                  <div className="px-2 bd-highlight"><i className="fa-solid fa-circle text-danger"></i> <div className="float-end"><i className="fa-solid fa-bookmark"></i></div></div>
                                  <div className="px-2 bd-highlight"><i className="fa-brands fa-galactic-republic"></i> </div>
                                  <div className="px-2 bd-highlight"><i className="fa-solid fa-language"></i> <div className="float-end"><i className="fa-solid fa-graduation-cap"></i>  Exp.</div></div>
                                  <div className="px-2 bd-highlight"><i className="fa-solid fa-indian-rupee-sign text-success"></i> /Min</div>
                                  <div className="px-2 bd-highlight"></div>
                                  <div className="px-2 bd-highlight"><i className="fa-solid fa-users text-primary"></i>  Users</div>
                              </div>
                          </div>
                      </div>
      </div>
    </div>
    </>
  )
}
