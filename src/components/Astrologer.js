import React, { useState } from 'react'
import '../css/components/Astrologer.css'
import Rating from './common/Rating'
export default function Astrologer() {
  const [showRatingNumber, setShowRatingNumber] = useState(false);
  return (
    <>
      <div className='ast-header'>
        <div className='text-center'>
          <div className='ast-profile-image-ctr'>
            <div className='ast-brb px-3'>
              <img src='/images/ast1.jpg' />
              <div className="row row-cols-1">
                <div className="col-12 bd-highlight"><i className="fa-solid fa-circle text-danger"></i> <span className='ast-name'>Akshay Shukla</span> <i className="fa-solid fa-bookmark"></i></div>
                <div className="col-12 bd-highlight"></div>
                <div className="col-12 bd-highlight"><i className="fa-brands fa-galactic-republic"></i> Vedic, Kp System, Lal Kitab</div>
                <div className="col-12 bd-highlight"><i className="fa-solid fa-language"></i> Hindi, English</div>
                <div className="col-12 bd-highlight"><i className="fa-solid fa-indian-rupee-sign text-success"></i> 9/Min</div>
                <div className="col-12 bd-highlight"><i className="fa-solid fa-graduation-cap"></i> 6 Years Exp. <i className="fa-solid fa-users text-primary"></i> 10  Users</div>
                <div className="col-12 bd-highlight"></div>
                <div className="col-12 bd-highlight"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='astro-header'>
        <div className='layover'>
          <div className="row row-cols layover-height layover-content">
            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 astro-profile-img-center">
              <img className='astro-profile-image' src="../Images/logo/bjkLogo64.png" alt="..." />
            </div>
            <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12 text-warning astro-profile-img-center ">
              <div className="d-flex flex-column bd-highlight mb-1 p-2 w100">
                <div className="px-2 bd-highlight"><i className="fa-solid fa-circle text-danger"></i> Akshay Shukla<div className="float-end"><i className="fa-solid fa-bookmark"></i></div></div>
                <div className="px-2 bd-highlight"><i className="fa-brands fa-galactic-republic"></i> Vedic, Kp System, Lal Kitab</div>
                <div className="px-2 bd-highlight"><i className="fa-solid fa-language"></i> Hindi, English<div className="float-end"><i className="fa-solid fa-graduation-cap"></i>6 Years Exp.</div></div>
                <div className="px-2 bd-highlight"><i className="fa-solid fa-indian-rupee-sign text-success"></i> 9/Min</div>
                <div className="px-2 bd-highlight"></div>
                <div className="px-2 bd-highlight"><i className="fa-solid fa-users text-primary"></i>10  Users</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='row row-cols-1 ast-profile-container'>
        <div className='col py-2 px-5'>
          <h5>About Acharya Aditya Sharma</h5>
          <p className='ast-paragraph-details'>Acharya Aditya Sharma has been associated with the field of Astrology for more than 5 years. He has completed his B.A. in Sanskrit from Rashtriya Sanskrit Sansthan.</p>
          <hr className='mt-2'></hr>
        </div>
        <div className='col py-2 px-5'>
          <div className="ast-widg-content">
            <div className="ast-ic_img shw-2"> <img src="/images/education.png" /> </div>
            <div className="ast-heading-left br-2"> <h5>Education</h5> </div>
            <div className="clearfix"></div>
            <div className="ast-paragraph clear">
              <p className='ast-paragraph-details'>Jyotish Acharya from Rastriya Sanskrit Sansthan Bhopal.</p>
            </div>
          </div>
        </div>
        <div className='col py-2 px-5'>
          <div className="ast-widg-content">
            <div className="ast-ic_img shw-2"> <img src="/images/degree.png" /> </div>
            <div className="ast-heading-left br-2"> <h5>Degree</h5> </div>
            <div className="clearfix"></div>
            <div className="ast-paragraph clear">
              <p className='ast-paragraph-details'>Jyotish Acharya from Rastriya Sanskrit Sansthan Bhopal.</p>
            </div>
          </div>
        </div>
        <div className='col py-2 px-5'>
          <div className="ast-widg-content">
            <div className="ast-ic_img shw-2"> <img src="/images/certificates.png" /> </div>
            <div className="ast-heading-left br-2"> <h5>Certificates</h5> </div>
            <div className="clearfix"></div>
            <div className="ast-paragraph clear">
              <p className='ast-paragraph-details'>Jyotish Acharya from Rastriya Sanskrit Sansthan Bhopal.</p>
            </div>
          </div>
        </div>
        <div className='col py-2 px-5'>
          <div className="ast-widg-content">
            <div className="ast-ic_img shw-2"> <img src="/images/astroKnow.png" /> </div>
            <div className="ast-heading-left br-2"> <h5>Astrology Knowledge</h5> </div>
            <div className="clearfix"></div>
            <div className="ast-paragraph clear">
              <ul className='tags'>
                <li className='tag'>MUHURTA</li>
                <li className='tag'>PSYCHIC READING</li>
                <li className='tag'>PRASHNA / HORARY</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col py-2 px-5'>
          <div className="ast-widg-content">
            <div className="ast-ic_img shw-2"> <img src="/images/rating.png" /> </div>
            <div className="ast-heading-left br-2"> <h5>Rating &amp; Reviewa</h5> </div>
            <div className="clearfix"></div>
            <div className="ast-paragraph clear">
              <ul className='ratings'>
                <li className='rating'>
                  <div className="brb pdtb12 full-width">
                    <div className="reviews-lefts">
                      <img src="/images/user-black.png" className="us-img" />
                      <span>
                        <Rating rating={2} showNumber={showRatingNumber}></Rating>
                      </span>
                    </div>
                    <div className="reviews-right">
                      <h5 className="mt-0">
                        <div className="name-t"> 4477082***** </div>
                        <div className="dt-t"> 19 Mar 2022</div>
                        <span className='review'>Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.</span>
                      </h5>
                    </div>
                  </div>
                </li>
                <li className='rating'>
                  <div className="brb pdtb12 full-width">
                    <div className="reviews-lefts">
                      <img src="/images/user-black.png" className="us-img" />
                      <span>
                        <Rating rating={3.5} showNumber={showRatingNumber}></Rating>
                      </span>
                    </div>
                    <div className="reviews-right">
                      <h5 className="mt-0">
                        <div className="name-t"> 4477082***** </div>
                        <div className="dt-t"> 19 Mar 2022</div>
                        <span className='review'>Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.</span>
                      </h5>
                    </div>
                  </div>
                </li> <li className='rating'>
                  <div className="brb pdtb12 full-width">
                    <div className="reviews-lefts">
                      <img src="/images/user-black.png" className="us-img" />
                      <span>
                        <Rating rating={5} showNumber={showRatingNumber}></Rating>
                      </span>
                    </div>
                    <div className="reviews-right">
                      <h5 className="mt-0">
                        <div className="name-t"> 4477082***** </div>
                        <div className="dt-t"> 19 Mar 2022</div>
                        <span className='review'>Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.Best Astrologer, very satified answer.</span>
                      </h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <hr></hr>
    </>
  )
}
