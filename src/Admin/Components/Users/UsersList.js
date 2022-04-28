import React, { useEffect, useState } from 'react';
import { Api } from '../../../apis/Api'
import { apiUrls } from '../../../apis/apiUrl';
import { common } from '../../../common/common';
import TableHeader from '../Tables/TableHeader';
import TableFooter from '../Tables/TableFooter';
import '../../css/Users.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function UsersList({ userRole }) {
    const [userList, setUserList] = useState([]); 
    const [pagingData, setPagingData] = useState({ pageNo: 1, pageSize: 10,currPage:1 });
    const [footerOption, setFooterOption] = useState({ totalRecord: 0,currPage:1 });
    const lockUnlockProfile = (email,status) => {
        Api.Post(apiUrls.userController.toggleLockUser,{email:email,isLocked:status}).then(res => {
           handleSearch();
        }).catch(err => {
        });
    }
    const blockUnblockProfile = (email,status) => {
        Api.Post(apiUrls.userController.toggleBlockUser,{email:email,isBlocked:status}).then(res => {
           handleSearch();
        }).catch(err => {
        });
    }
    const handleSearch = (val) => {
        val=!val?"":val;
        Api.Get(apiUrls.userController.searchUser+ `?searchterm=${val}&pageNo=1&pageSize=100`).then(res => {
            setUserList(res.data.data);
            if (footerOption.totalRecord !== res.data.totalRecord) {
                var data={totalRecord: res.data.totalRecord,currPage: pagingData.currPage }
                setFooterOption({ ...data});
            }
            else
            setFooterOption({ ...footerOption, ['currPage']: pagingData.currPage });
            
        }).catch(err => {
            // setLoadingData(false);
            // toast.error(common.toastMsg.error);
        });
    }
    const tableHeaderOption = {
        searchHandler: handleSearch,
        headerName: 'Users',
        addUrl: "/RoomCreate"
    }
    useEffect(() => {
        Api.Get(apiUrls.userController.getUsers + `?pageNo=1&pageSize=10`)
            .then(res => {
                setUserList(res.data.data);
                if (footerOption.totalRecord !== res.data.totalRecord) {
                    var data={totalRecord: res.data.totalRecord,currPage: pagingData.currPage }
                    setFooterOption({ ...data});
                }
                else
                setFooterOption({ ...footerOption, ['currPage']: pagingData.currPage });
                
            })
            .catch(err => {
            });
    }, []);

    return (
        <div>
            <TableHeader userRole={userRole} option={tableHeaderOption}></TableHeader>
            <ul className='user-list table-container'>
                {
                    userList?.map((ele,ind) => {
                        return <li key={common.getElementKey()}>
                            <div className='sr px-4'>{ind+1}</div>
                            <div className='user-img'>
                                <LazyLoadImage src={ele.imageUrl} alt='User Image'/>
                            </div>
                            <div className='user-details-box'>
                                <div className='part'>
                                    <div className='sub-part'>{ele.firstName + ' ' + ele.lastName}</div>
                                    <div className='sub-part sub-text sub-email'>{ele.email}</div>
                                    <div className='sub-part sub-text'>{ele.mobile}</div>
                                </div>
                                <div className='part'>
                                    <div className={ele.isLocked?'part-badge-danger':'part-badge-success'}>{ele.isLocked?'Locked':'Unlocked'}</div>
                                </div>
                                <div className='part'>
                                    <div className={ele.isBlocked?'part-badge-danger':'part-badge-success'}>{ele.isBlocked?'Blocked':'Unblocked'}</div>
                                </div>
                                <div className='ctrl'>
                                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
                                        <button title='Edit Profile' type="button" className="btn btn-primary"><i className="fa fa-edit"></i></button>
                                        <button title='View Profile' type="button" className="btn btn-primary"><i className="fa fa-eye"></i></button>
                                        <button title='Delete Profile' type="button" className="btn btn-primary"><i className="fa fa-trash-alt"></i></button>
                                      {!ele.isLocked && <button onClick={e=>lockUnlockProfile(ele.email,true)} title='Lock User' type="button" className="btn btn-primary"><i className="fa fa-lock"></i></button> }
                                      {ele.isLocked &&  <button onClick={e=>lockUnlockProfile(ele.email,false)} title='Unlock User' type="button" className="btn btn-primary"><i className="fa fa-unlock"></i></button> }
                                      {!ele.isBlocked && <button onClick={e=>blockUnblockProfile(ele.email,true)} type="button"title='Block User' className="btn btn-primary"><i className="fa fa-user-lock"></i></button>}
                                        {ele.isBlocked && <button onClick={e=>blockUnblockProfile(ele.email,false)} type="button"title='Unblock User' className="btn btn-primary"><i className="fa fa-user-check"></i></button>}
                                    </div>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
            <TableFooter option={footerOption}></TableFooter>
        </div>
    )
}
