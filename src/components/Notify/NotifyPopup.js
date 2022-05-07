import React from 'react';
import '../../css/components/common/Notifications.css';
import NotifyList from './NotifyList';

export default function NotifyPopup() {
  return (
    <>
    <div className='noti-container'>
        <NotifyList></NotifyList>
    </div>
    </>
  )
}
