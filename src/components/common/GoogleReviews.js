import React, { useState } from 'react';
import Rating from './Rating';
import '../../css/components/common/GoogleReview.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function () {
    const [reviewData, setReviewData] = useState([
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
    ])
    return (
        <div className='review-container'>
            <div id="carouselGoogleReview" className="carousel slide w-100" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselGoogleReview" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselGoogleReview" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselGoogleReview" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselGoogleReview" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselGoogleReview" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row row-cols-1 row-cols-md-3'>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/satishkumarsonker.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Satish Kumar Sonker
                                            </div>
                                            <div className='reviewer-date'>
                                                20 Mar 2021
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        Very good astrologer in allahabad, He has all the solution of your queries
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/ramatilwani.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Rama Tilwani
                                            </div>
                                            <div className='reviewer-date'>
                                                20 Mar 2021
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        They are really humble,down to earth.sir Akshay is a noble person.He always helps u when u asked. For astro service their predictions are best.tx a lot Akshay sir.
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/its_me_sumitPandey.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                its_me_sumit Pandey
                                            </div>
                                            <div className='reviewer-date'>
                                                20 Mar 2021
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        Thank you so much sir 🙏🙏 The prediction regarding the government job turned out to be accurate.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row row-cols-1 row-cols-md-3'>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/AbhinavRoy.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Abhinav Roy
                                            </div>
                                            <div className='reviewer-date'>
                                                20 Mar 2021
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        Best astrologer in City... I am satisfie
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/deepasonkar.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Deepa Sonkar
                                            </div>
                                            <div className='reviewer-date'>
                                                20 Mar 2021
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        Very best astrologer in allahabad
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/ramroy.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Ram Roy
                                            </div>
                                            <div className='reviewer-date'>
                                                20 Mar 2021
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        Very great astrologer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row row-cols-1 row-cols-md-3'>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/rishirisky.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Rishi Risky
                                            </div>
                                            <div className='reviewer-date'>
                                                20 Mar 2021
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        Good experience.... Genuine and truth facts shared.
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/sumit.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Sumit Commerce classes
                                            </div>
                                            <div className='reviewer-date'>
                                                20 Mar 2021
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        Best astrologer in Allahabad
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/brijmohan.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Brij Mohan Kushwaha
                                            </div>
                                            <div className='reviewer-date'>
                                                20 Mar 2021
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        Best Astrologer in city
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row row-cols-1 row-cols-md-3'>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/vikash.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Vikash Chandra
                                            </div>
                                            <div className='reviewer-date'>
                                                20 Mar 2021
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        Very Good</div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/sandeep.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Sandeep Kushwaha
                                            </div>
                                            <div className='reviewer-date'>
                                                20 Mar 2021
                                            </div>
                                            <Rating rating={4}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        (Translated by Google) Good knowledge of astrology, complete answer to all questions was received..Thanks

                                        (Original)
                                        ज्योतिष के अच्छे जानकार, सभी प्रश्नों का संतुष्टि पूर्ण उत्तर प्राप्त हुआ..धन्यवाद
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/ashishyadav.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Ashish Kumar Yadav
                                            </div>
                                            <div className='reviewer-date'>
                                                31 Mar 2022
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        A great experience with Bhaskar Jyotish Kendra running by Akshay Shukla Ji. He is the diamond in Astrology in Prayagraj. Great knowledge, very impresive communication and convincing skill. I got magnificent response or solution from there.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row row-cols-1 row-cols-md-3'>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/poosam.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Poonsam Pvt Ltd
                                            </div>
                                            <div className='reviewer-date'>
                                                31 Mar 2022
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        Akshay sir provides very authentic and genuine  solution
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/pratima.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Pratima Sonkar
                                            </div>
                                            <div className='reviewer-date'>
                                                2 April 2022
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        Trustworthy astrologer..
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='review-item'>
                                    <div className='review-item-inner'>
                                        <div className='review-item-inner-1'>
                                            <div className='reviewer-image'>
                                                <LazyLoadImage alt='User Image' src='/images/userreview/alka.png'></LazyLoadImage>
                                            </div>
                                        </div>
                                        <div className='review-item-inner-2'>
                                            <div className='reviewer-name'>
                                                Alka Sonkar
                                            </div>
                                            <div className='reviewer-date'>
                                                5 April 2022
                                            </div>
                                            <Rating rating={5}></Rating>
                                        </div>
                                    </div>
                                    <div className='review'>
                                        Bahot accha kaam kar rahen hain aap
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselGoogleReview" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselGoogleReview" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

