import React, { useEffect, useState } from 'react';
import { Api } from '../../../apis/Api'
import { apiUrls } from '../../../apis/apiUrl';
import { common } from '../../../common/common';
import TableHeader from '../Tables/TableHeader';
import '../../css/Users.css';

export default function UsersList({userRole}) {
    const [userList, setUserList] = useState([]);
    const handleSearch = (val) => {
        // val = val === undefined || typeof val==='object'? searchTerm : val;
        // if (val !== "All" && (val === "" || val.length < 3)) {
        //     toast.warn("Please enter 3 char to search.");
        //     return;
        // }
        // setLoadingData(true);
        // Api.Get(apiUrlData.roomController.searchRoom + '?searchterm=' + val).then(res => {
        //     setRoomData(res.data);
        //     setLoadingData(false)
        // }).catch(err => {
        //     setLoadingData(false);
        //     toast.error(common.toastMsg.error);
        // });
    }
    const tableHeaderOption = {
        searchHandler: handleSearch,
        headerName: 'Rooms',
        addUrl: "/RoomCreate"
    }
    useEffect(() => {
        Api.Get(apiUrls.userController.getUsers + `?pageNo=1&pageSize=10`)
            .then(res => {
                debugger;
                setUserList(res.data.data);
            })
            .catch(err => {
            });
    }, []);

    return (
        <div>
            <TableHeader userRole={userRole} option={tableHeaderOption}></TableHeader>
            <ul className='user-list'>
            {
                userList?.map(ele => {
                    return <li key={common.getElementKey()}>
                        <div className='user-img'>
                            <img src={ele.imageUrl} alt='User Image'></img>
                        </div>
                        <div className='user-details'>{ele.firstName}</div>
                    </li>
                })
            }
            </ul>
        </div>
    )
}
