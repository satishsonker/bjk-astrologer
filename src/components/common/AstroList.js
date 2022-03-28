import React, { useState, useEffect } from 'react'
import { common } from '../../common/common';
import { Link } from "react-router-dom";
import '../../css/components/common/AstroList.css';
import useWindowDimensions from '../../Hooks/userWindowDimensions';
import AstButton from '../Controls/AstButton';
import Rating from './Rating';

export default function () {
    const { width } = useWindowDimensions();
    const [astroLimit, setAstroLimit] = useState(2);

    const [astroData, setAstroData] = useState([

        {
            id:1,
            name: "Acharya Akshay Shukla",
            expertise: "Vedic, Kp System, Lal Kitab",
            lang: "Hindi",
            path: '../Images/astro/akshayshukla.jpg',
            exp: 6,
            rating: 5,
            price: 17,
            totalUsers: 65
        },
        {
            id:2,
            name: "Acharya Harihar Prasad Shukla",
            expertise: "Vedic, Kp System, Lal Kitab",
            lang: "Hindi",
            path: '../Images/astro/HariharPrasad.jpg',
            exp: 16,
            rating: 2.5,
            price: 17,
            totalUsers: 10
        },
        {
            id:2,
            name: "Acharya Lokesh Gaur",
            expertise: "Vedic, Kp System, Lal Kitab",
            lang: "Hindi",
            path: '../Images/logo/bjkLogo64.png',
            exp: 6,
            rating: 4.5,
            price: 17,
            totalUsers: 45
        }, {
            id:2,
            name: "Acharya Lokesh Gaur",
            expertise: "Vedic, Kp System, Lal Kitab",
            lang: "Hindi",
            path: '../Images/logo/bjkLogo64.png',
            exp: 6,
            rating: 4.5,
            price: 17,
            totalUsers: 5
        },
        {
            id:2,
            name: "Acharya Akshay Shukla",
            expertise: "Vedic, Kp System, Lal Kitab",
            lang: "Hindi",
            path: '../Images/logo/bjkLogo64.png',
            exp: 6,
            rating: 5,
            price: 17,
            totalUsers: 21
        },
        {
            id:2,
            name: "Acharya Harihar Prasad Shukla",
            expertise: "Vedic, Kp System, Lal Kitab",
            lang: "Hindi",
            path: '../Images/logo/bjkLogo64.png',
            exp: 16,
            rating: 2.5,
            price: 17,
            totalUsers: 3
        }
    ]);

    useEffect(() => {
        if (width > 768) {
            setAstroLimit(2)
        }
        else {
            setAstroLimit(2)
        }
    }, [width]);
    return (
        <div className='astro-container'>
            <div className="row row-cols-xl-3 row-cols-lg-3  row-cols-1">
                {
                    astroData.map((ele, ind) => {
                        if (ind > (astroLimit - 1))
                            return <div key={common.getElementKey()}></div>
                        return <>
                        <Link to={"/astrologer?id="+ele.id}>
                            <div key={common.getElementKey()} className="col astro-list">
                                <div className='astro-list-item'>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <img className='astro-image' src={ele.path} alt="..." />
                                        </div>
                                        <div className="flex-grow-1 ms-1">
                                            <div className="d-flex flex-column bd-highlight mb-1 p-2">
                                                <div className="px-2 bd-highlight"><i className="fa-solid fa-circle text-danger"></i> {ele.name}<div className="float-end"><i className="fa-solid fa-bookmark"></i></div></div>
                                                <div className="px-2 bd-highlight"><i className="fa-brands fa-galactic-republic"></i> {ele.expertise}</div>
                                                <div className="px-2 bd-highlight"><i className="fa-solid fa-language"></i> {ele.lang} <div className="float-end"><i className="fa-solid fa-graduation-cap"></i> {ele.exp} Exp.</div></div>
                                                <div className="px-2 bd-highlight"><i className="fa-solid fa-indian-rupee-sign text-success"></i> {ele.price}/Min</div>
                                                <div className="px-2 bd-highlight"><Rating rating={ele.rating}></Rating></div>
                                                <div className="px-2 bd-highlight"><i className="fa-solid fa-users text-primary"></i> {ele.totalUsers} Users</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></Link></>
                    })
                }
            </div>
            <div className='btn-load-more'>
                <AstButton option={{ text: "Load More" }}></AstButton>
            </div>
        </div>
    )
}
