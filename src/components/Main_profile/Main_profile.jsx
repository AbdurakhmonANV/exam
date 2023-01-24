import React from 'react';
import c from './Main_profile.module.css'
import { useEffect, useState } from 'react';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';
import json from '../../json/data.json';
import { NavLink } from 'react-router-dom';
// import  { Route, Routes } from 'react-router-dom';
// import Followers from '../Followers/Followers';
// import Following from '../Following/Following';

const Main_profile = () => {
  // const [Github, setGithub] = useState([]);
  // const [loading, setLoading] = useState(false);




  // const BASE_URL = "https://api.github.com/";
  // useEffect(() => {
  //     fetch(BASE_URL+ 'users/REACT-DEVELOPER-IBROKHIM')
  //         .then((response) => response.json())
  //         .then((result) =>
  //             setGithub(result));
  //     setLoading(true)
  // },);

  // if (!loading) {
  //     return (
  //         <h1>Loading...</h1>
  //     )
  // }



  return (
    <>
      <div>
        <div className={c.main_profile}>

          {
            json.map(data => {
              return (
                <>
                  <a href={data.avatar_url} >
                    <img className={c.profile_avatar} src={data.avatar_url} alt="" />
                    <div className={c.profile_avatar_ico}><BsEmojiSmile /></div>
                  </a>

                  <div><blockquote className={c.profile_user}>{data.login}</blockquote></div>







                  <button className={c.profile_button}>Edit profile</button>
                  <div className={c.follow_wrap}>
                    <div><MdOutlinePeopleAlt /></div>&nbsp;

               
                    <NavLink  to='/Followers'> <span className={c.follow_number}>{data.followers}</span>&nbsp;followers</NavLink>
                    &nbsp;-&nbsp;

                    <NavLink to='/Following'> <span className={c.follow_number}>{data.following}</span> &nbsp;following</NavLink>
                  </div>



                </>

              )
            })
          }




        </div>
      </div>
    </>
  )
}

export default Main_profile