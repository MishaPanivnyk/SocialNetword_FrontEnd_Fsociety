import { useState, useEffect } from 'react';
import axios from 'axios';
import { Add, CalendarMonthOutlined, LocationOnOutlined } from '@mui/icons-material';
import style from './style.module.scss';
import { Divider } from '@mui/material';
import EditMyProfile from '../EditMyProfile/EditMyProfile';

type UserProfileTopProps = {
    userData: userDataType;
}

type userDataType = {
    name: string,
    postCount: number,
    friendsCount: number,
    followersCount:number,
    located: string,
    birth_date: string,
    bio: string,
    avatar: string,
    friends_count : number,
}

const MyProfileTop : React.FC<UserProfileTopProps> = ({ userData }) => {

    
return (
        <div className={style.profile__container}>
            {userData && (
                <>
                    <div className="row">
                        <div className="col-12"></div>
                        <div className="col-2">
                        <img className={style.avatar} src={userData.avatar} alt="avatar" />
                        </div>
                        <div className="col-10 d-flex flex-column justify-content-around">
                            <div className={style.name__container}>
                                <div className="row d-flex justify-content-between">
                                    <div className="col-4">
                                        <h2>{userData.name}</h2>
                                    </div>
                                    <div className="col-4 d-flex justify-content-end">
                                        <button title='Add post'><Add/></button>
                                        <EditMyProfile/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-between">
                                    <p className={style.profile__count}><span>{userData.postCount}</span>Posts</p>
                                    <a className={style.profile__count}><span>{userData.friends_count}</span>Friends</a>
                                    <a className={style.profile__count} href=""><span>{userData.followersCount}</span>Followers</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className={style.profile__count__container}>
                                <div className="row">
                                    <div className="col-3">
                                        <a className={style.profile__count} href=""><LocationOnOutlined />{userData.located}</a>
                                    </div>
                                    <div className="col-3">
                                        <a className={style.profile__count} href=""><CalendarMonthOutlined />{userData.birth_date}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="profile__description">
                                <p>{userData.bio}</p>
                            </div>
                        </div>
                    </div>
                    <Divider className={style.divider}/>
                </>
            )}
        </div>
    );
}

export default MyProfileTop;