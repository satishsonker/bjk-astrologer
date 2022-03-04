import React,{useState} from 'react'
import { common } from '../../common/common';
import '../../css/components/common/AstroList.css';
import Rating from './Rating';

export default function () {
    const [astroData, setAstroData] = useState([
        {
            name:"Acharya Lokesh Gaur",
            expertise:"Vedic, Kp System, Lal Kitab",
            lang:"Hindi",
            exp:6,
            rating:4.5,
            price:17,
            totalUsers:45
        },
        {
            name:"Acharya Akshay Shukla",
            expertise:"Vedic, Kp System, Lal Kitab",
            lang:"Hindi",
            exp:6,
            rating:5,
            price:17,
            totalUsers:65
        },
        {
            name:"Acharya Harihar Prasad Shukla",
            expertise:"Vedic, Kp System, Lal Kitab",
            lang:"Hindi",
            exp:16,
            rating:2.5,
            price:17,
            totalUsers:10
        },{
            name:"Acharya Lokesh Gaur",
            expertise:"Vedic, Kp System, Lal Kitab",
            lang:"Hindi",
            exp:6,
            rating:4.5,
            price:17,
            totalUsers:5
        },
        {
            name:"Acharya Akshay Shukla",
            expertise:"Vedic, Kp System, Lal Kitab",
            lang:"Hindi",
            exp:6,
            rating:5,
            price:17,
            totalUsers:21
        },
        {
            name:"Acharya Harihar Prasad Shukla",
            expertise:"Vedic, Kp System, Lal Kitab",
            lang:"Hindi",
            exp:16,
            rating:2.5,
            price:17,
            totalUsers:3
        }
    ])
    return (
       <div className='astro-container'>
            <div className="row row-cols-md-3 row-cols-lg-3 row-cols-sm-1 row-cols-xs-1">
          {
              astroData.map(ele=>{
                  return   <div key={common.getElementKey()} className="col astro-list">
                  <div className='astro-list-item'>
                      <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                              <img className='astro-image' src="../Images/logo/bjkLogo64.png" alt="..." />
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
              </div>
              })
          }
        </div>
       </div>
    )
}
