import React from 'react';
import c from './Main.module.css';

import { AiOutlineStar } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { GoRepoForked } from 'react-icons/go'
import json from '../../json/data.json'
const Main = () => {

  // const [Github, setGithub] = useState([]);
  // const [loading, setLoading] = useState(false);


  // const BASE_URL = "https://api.github.com/";
  // useEffect(() => {
  //   fetch(BASE_URL + 'users/REACT-DEVELOPER-IBROKHIM/repos/')
  //     .then((response) => response.json())
  //     .then((result) =>
  //       setGithub(result));
  //   setLoading(true)
  // },);
  // if (!loading) {
  //   return (
  //     <h1>Loading...</h1>
  //   )
  // }
  return (
    <>
      <div className={c.mainBottom}>
        <div className={c.mainBottom_header}>
          <b>Papular repositories</b>
        </div>
        {
          json.map(data => {
            return (
              <div>
                {data.repostory.map(repostory => {
                  return (
                    <>
                      <div>
                        <div className={c.box_wrapper}>
                          <div className={c.Main_box}>
                            <div className={c.main_box_header}>
                              <a className={c.NavLink_repostorys} href="https://github.com/AbdurakhmonANV/Amazon"><blockquote>{repostory.name}</blockquote></a>
                              <button className={c.repostory_bottom}>{repostory.public}</button>
                            </div>
                            <div className={c.main_box_bottom}>
                              <p className={c.repostory_language}><div className={c.araund}>.</div> {repostory.language}</p>
                              {/* <div className={c.repostory_star}>&nbsp;  <AiOutlineStar />&nbsp;{repostory.star}</div>
                              <div className={c.repostory_forked}>&nbsp;  <GoRepoForked />{repostory.forked}</div> */}
                            </div>
                          </div>
                          <div className={c.Main_box}>
                            <div className={c.main_box_header}>
                              <a className={c.NavLink_repostorys} href="https://github.com/AbdurakhmonANV/exam"><blockquote>{repostory.exam}</blockquote></a>
                              <button className={c.repostory_bottom}>{repostory.public}</button>
                            </div>
                            <div className={c.main_box_bottom}>
                              <p className={c.repostory_language}><div className={c.araund}>.</div> {repostory.language}</p>
                              {/* <div className={c.repostory_star}>&nbsp;  <AiOutlineStar />&nbsp;{repostory.star}</div>
                              <div className={c.repostory_forked}>&nbsp;  <GoRepoForked />{repostory.forked}</div> */}
                            </div>
                          </div>
                         
                        </div>
                      </div>
                    </>
                  )
                })}


              </div>
            )
          })
        }












      </div>


    </>
  )
}

export default Main