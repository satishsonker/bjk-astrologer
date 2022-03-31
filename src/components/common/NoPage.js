import React from 'react'
import '../../css/components/common/NoPage.css';
import AstButton from '../Controls/AstButton';
import { Link } from "react-router-dom";
export default function NoPage() {
  return (
    <div className='np-container' >
      <div className='inner'> 
      <div className='np-text'>The resource you are looking for isn't exist</div>
        <img alt='404 Image' src='../images/404-1.png'></img> 
        <Link to="/home">
        <AstButton option={{text:"Go Home"}}></AstButton></Link>
        </div>  
    </div>
  )
}
