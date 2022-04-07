import React, { useState, useEffect } from 'react';
import '../css/components/Astrologer.css';
import { useTranslation } from "react-i18next";
import Rating from './common/Rating';
export default function Astrologer() {
  const { t } = useTranslation();
  const [showRatingNumber, setShowRatingNumber] = useState(false);
  const [reviewData, setReviewData] = useState();
  useEffect(() => {
    setShowRatingNumber(false);
    setReviewData([
      {
        imagePath: "/images/userreview/satishkumarsonker.png",
        name: "Satish Kumar Sonker",
        date: "20 Mar 2021",
        review: "Very good astrologer in allahabad, He has all the solution of your queries",
        rating: 5
      },
      {
        imagePath: "/images/userreview/ramatilwani.png",
        name: "Rama Tilwani",
        date: "20 Mar 2021",
        review: "They are really humble,down to earth.sir Akshay is a noble person.He always helps u when u asked. For astro service their predictions are best.tx a lot Akshay sir.",
        rating: 5
      },
      {
        imagePath: "/images/userreview/its_me_sumitPandey.png",
        name: "its_me_sumit Pandey",
        date: "20 Mar 2021",
        review: "Thank you so much sir 🙏🙏 The prediction regarding the government job turned out to be accurate.",
        rating: 5
      },
      {
        imagePath: "/images/userreview/AbhinavRoy.png",
        name: "Abhinav Roy",
        date: "20 Mar 2021",
        review: "Best astrologer in City... I am satisfie",
        rating: 5
      },
      {
        imagePath: "/images/userreview/deepasonkar.png",
        name: "Deepa Sonkar",
        date: "20 Mar 2021",
        review: "Very best astrologer in allahabad",
        rating: 5
      },
      {
        imagePath: "/images/userreview/ramroy.png",
        name: "Ram Roy",
        date: "20 Mar 2021",
        review: "Very great astrologer",
        rating: 5
      },
      {
        imagePath: "/images/userreview/rishirisky.png",
        name: "Rishi Risky",
        date: "20 Mar 2021",
        review: "Good experience.... Genuine and truth facts shared.",
        rating: 5
      },
      {
        imagePath: "/images/userreview/sumit.png",
        name: "Sumit Commerce classes",
        date: "20 Mar 2021",
        review: "Best astrologer in Allahabad",
        rating: 5
      },
      {
        imagePath: "/images/userreview/brijmohan.png",
        name: "Brij Mohan Kushwaha",
        date: "20 Mar 2021",
        review: "Best Astrologer in city",
        rating: 5
      },
      {
        imagePath: "/images/userreview/vikash.png",
        name: "Vikash Chandra",
        date: "20 Mar 2021",
        review: "Very Good",
        rating: 5
      },
      {
        imagePath: "/images/userreview/sandeep.png",
        name: "Sandeep Kushwaha",
        date: "20 Mar 2021",
        review: "(Translated by Google) Good knowledge of astrology, complete answer to all questions was received..Thanks (Original) ज्योतिष के अच्छे जानकार, सभी प्रश्नों का संतुष्टि पूर्ण उत्तर प्राप्त हुआ..धन्यवाद",
        rating: 4
      },
      {
        imagePath: "/images/userreview/ashishyadav.png",
        name: "Ashish Kumar Yadav",
        date: "31 Mar 2022",
        review: "A great experience with Bhaskar Jyotish Kendra running by Akshay Shukla Ji. He is the diamond in Astrology in Prayagraj. Great knowledge, very impresive communication and convincing skill. I got magnificent response or solution from there.",
        rating: 5
      },
      {
        imagePath: "/images/userreview/poosam.png",
        name: "Poonsam Pvt Ltd",
        date: "31 Mar 2022",
        review: "Akshay sir provides very authentic and genuine  solution",
        rating: 5
      },
      {
        imagePath: "/images/userreview/pratima.png",
        name: "Pratima Sonkar",
        date: "2 April 2022",
        review: "Trustworthy astrologer..",
        rating: 4
      },
      {
        imagePath: "/images/userreview/alka.png",
        name: "Alka Sonkar",
        date: "5 April 2022",
        review: "Bahot accha kaam kar rahen hain aap.",
        rating: 5
      }
    ]);
  }, []);

  return (
    <>
      <div className='ast-header'>
        <div className='text-center'>
          <div className='ast-profile-image-ctr'>
            <div className='ast-brb px-3'>
              <img src='/Images/astro/akshayshukla.jpg' alt='Astrologer Image' />
              <div className="row row-cols-1">
                <div className="col-12 bd-highlight"><i className="fa-solid fa-circle text-danger"></i> <span className='ast-name'>{t("acharya")} {t("akshay")} {t("shukla")}</span> <i className="fa-solid fa-bookmark"></i></div>
                <div className="col-12 bd-highlight"></div>
                <div className="col-12 bd-highlight"><i className="fa-brands fa-galactic-republic"></i> Vedic, Kp System, Lal Kitab</div>
                <div className="col-12 bd-highlight"><i className="fa-solid fa-language"></i> {t("hindi")}, {t("english")}</div>
                <div className="col-12 bd-highlight"><i className="fa-solid fa-indian-rupee-sign text-success"></i> 17/{t("min")}</div>
                <div className="col-12 bd-highlight"><i className="fa-solid fa-graduation-cap"></i> 6 {t("years")} {t("exp")} <i className="fa-solid fa-users text-primary"></i> 15  {t("users")}</div>
                <div className="col-12 bd-highlight"></div>
                <div className="col-12 bd-highlight"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row row-cols-1 ast-profile-container'>
        <div className='col py-2 px-5'>
          <h5>About {t("acharya")} {t("akshay")} {t("shukla")}</h5>
          <p className='ast-paragraph-details'>{t("acharya")} {t("akshay")} {t("shukla")} has been associated with the field of Astrology for more than 5 years. He has completed his B.A. in Sanskrit from Rashtriya Sanskrit Sansthan.</p>
          <hr className='mt-2'></hr>
        </div>
        <div className='col py-2 px-5'>
          <div className="ast-widg-content">
            <div className="ast-ic_img shw-2"> <img alt='education' src="/images/education.png" /> </div>
            <div className="ast-heading-left br-2"> <h5>{t("education")}</h5> </div>
            <div className="clearfix"></div>
            <div className="ast-paragraph clear">
              <p className='ast-paragraph-details'>Jyotish Acharya from Rastriya Sanskrit Sansthan Bhopal.</p>
            </div>
          </div>
        </div>
        <div className='col py-2 px-5'>
          <div className="ast-widg-content">
            <div className="ast-ic_img shw-2"> <img alt='Degree' src="/images/degree.png" /> </div>
            <div className="ast-heading-left br-2"> <h5>{t("degree")}</h5> </div>
            <div className="clearfix"></div>
            <div className="ast-paragraph clear">
              <p className='ast-paragraph-details'>Jyotish Acharya from Rastriya Sanskrit Sansthan Bhopal.</p>
            </div>
          </div>
        </div>
        <div className='col py-2 px-5'>
          <div className="ast-widg-content">
            <div className="ast-ic_img shw-2"> <img alt='Certificate' src="/images/certificates.png" /> </div>
            <div className="ast-heading-left br-2"> <h5>{t("certificates")}</h5> </div>
            <div className="clearfix"></div>
            <div className="ast-paragraph clear">
              <p className='ast-paragraph-details'>Jyotish Acharya from Rastriya Sanskrit Sansthan Bhopal.</p>
            </div>
          </div>
        </div>
        <div className='col py-2 px-5'>
          <div className="ast-widg-content">
            <div className="ast-ic_img shw-2"> <img alt='Astrologer Knowledge' src="/images/astroKnow.png" /> </div>
            <div className="ast-heading-left br-2"> <h5>{t("astrology")} {t("knowledge")}</h5> </div>
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
            <div className="ast-ic_img shw-2"> <img alt='Rating' src="/images/rating.png" /> </div>
            <div className="ast-heading-left br-2"> <h5>{t("rating")} &amp; {t("review")}</h5> </div>
            <div className="clearfix"></div>
            <div className="ast-paragraph clear">
              <ul className='ratings'>
                {reviewData?.map(ele => {
                  return <li className='rating'>
                    <div className="brb pdtb12 full-width">
                      <div className="reviews-lefts">
                        <img alt='User Logo' src={ele.imagePath} className="us-img" />
                        <span>
                          <Rating rating={ele.rating} showNumber={showRatingNumber}></Rating>
                        </span>
                      </div>
                      <div className="reviews-right">
                        <h5 className="mt-0">
                          <div className="name-t">{ele.name}</div>
                          <div className="dt-t">{ele.date}</div>
                          <span className='review'>{ele.review}</span>
                        </h5>
                      </div>
                    </div>
                  </li>
                })
                }
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
