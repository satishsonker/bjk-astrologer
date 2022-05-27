import React from 'react'
import { common } from '../../common/common';
import '../../css/components/common/Notifications.css';
export default function NotifyList() {
    const elapsedTime = (notifyTime) => {
        var endTime, result;
        notifyTime = new Date(notifyTime);
        endTime = new Date();
        var timeDiff = endTime - notifyTime; //in ms
        // strip the ms
        timeDiff /= 1000;
        var seconds = Math.round(timeDiff);
        var mins = Math.round(seconds / 59);
        var hours = Math.round(mins / 59);
        var days = Math.round(hours / 23);
        if (seconds > 0){
            result= `${seconds} sec ago`;           
        }
        if (mins > 0){
            result= `${mins} min ago`;
        }
        if (hours > 0){
            result= `${hours} hour ago`;
        }
        if (days > 0){
            result= `Yesterday`;
        }
        if (days > 1 && days<7){
            result= `${common.dayArray[notifyTime.getDay()]}`;
        }
        if (days > 7){
            result= `${notifyTime.getDate()}, ${common.monthsArray[notifyTime.getMonth()]}`;
        }
        if (endTime.getFullYear() > notifyTime.getFullYear()){
            result= `${notifyTime.getDate()}, ${common.monthsArray[notifyTime.getMonth()].substring(0,3)} ${notifyTime.getFullYear()}`;
        }
        return result;
    }
    return (
        <>
            <ul className='noti-list'>
                <li className='noti-list-item'>
                    <div className='Noti-section-1'>Got New Message</div>
                    <div className='Noti-section-2'>{elapsedTime("2022-05-07T17:52:27.088Z")}</div>
                </li>
                <li className='noti-list-item'>
                    <div className='Noti-section-1'>Got 2 New Message</div>
                    <div className='Noti-section-2'>{elapsedTime("2022-05-07T17:42:27.088Z")}</div>
                </li>
                <li className='noti-list-item'>
                    <div className='Noti-section-1'>Got 3 New Message</div>
                    <div className='Noti-section-2'>{elapsedTime("2022-05-07T17:28:27.088Z")}</div>
                </li>
                <li className='noti-list-item'>
                    <div className='Noti-section-1'>Got New Message Got New Message Got New Message</div>
                    <div className='Noti-section-2'>{elapsedTime("2022-05-07T13:52:27.088Z")}</div>
                </li>
                <li className='noti-list-item'>
                    <div className='Noti-section-1'>Got 5 New Message</div>
                    <div className='Noti-section-2'>{elapsedTime("2022-05-06T17:52:27.088Z")}</div>
                </li>
                <li className='noti-list-item'>
                    <div className='Noti-section-1'>Got 3 New Message</div>
                    <div className='Noti-section-2'>{elapsedTime("2022-04-07T17:52:27.088Z")}</div>
                </li>
                <li className='noti-list-item'>
                    <div className='Noti-section-1'>Got New Message</div>
                    <div className='Noti-section-2'>{elapsedTime("2022-03-07T17:52:27.088Z")}</div>
                </li>
                <li className='noti-list-item'>
                    <div className='Noti-section-1'>Got 2 New Message Got 2 New Message Got 2 New Message Got 2 New Message</div>
                    <div className='Noti-section-2'>{elapsedTime("2021-01-09T17:52:27.088Z")}</div>
                </li>
                <li className='noti-list-item'>
                    <div className='Noti-section-1'>Got 3 New Message</div>
                    <div className='Noti-section-2'>{elapsedTime("2021-01-10T17:52:27.088Z")}</div>
                </li>
                <li className='noti-list-item'>
                    <div className='Noti-section-1'>Got New Message</div>
                    <div className='Noti-section-2'>20 min ago</div>
                </li>
                <li className='noti-list-item'>
                    <div className='Noti-section-1'>Got 2 New Message</div>
                    <div className='Noti-section-2'>30 min ago</div>
                </li>
                <li className='noti-list-item'>
                    <div className='Noti-section-1'>Got 3 New Message</div>
                    <div className='Noti-section-2'>40 min ago</div>
                </li>
            </ul>
        </>
    )
}
