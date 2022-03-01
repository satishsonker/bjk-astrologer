import React,{useEffect} from 'react'
import '../../css/components/common/LeftMenu.css';
export default function LeftMenu({option,isActive}) {
    useEffect(() => {
      console.log(isActive);
    }, [isActive])
    
    return (
        <div className={isActive?'left-menu left-menu-active':'left-menu'}>
            <ul className='menu'>
                
                <li className='menu-item'>
                    <i className="fa-solid fa-phone"></i> <span>left-menu ok 1</span>
                </li>
                <li className='menu-item'>
                <i className="fa-solid fa-phone"></i> <span>left-menu ok 2</span>
                   
                </li>
                <li className='menu-item'>
                    <i className="fa-solid fa-phone"> </i>  <span>left-menu ok 3</span>
                </li>
                <li className='menu-item'>
                    <i className="fa-solid fa-phone"> </i> <span>left-menu ok 4</span>
                </li>
            </ul>
        </div>
    )
}
