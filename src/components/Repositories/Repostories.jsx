import React from 'react';
import c from './Repostories.module.css';

import { AiOutlineStar, AiFillCaretDown } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import json from '../../json/data.json'


const Repostories = () => {
  return (
    <>

      <div className={c.mainBottom}>

        <div className={c.repos_search}>
          <form action=""><input placeholder='Find a repository...' className={c.reposInput} type="text" /></form>
          <button className={c.btnType}>Type <span className={c.repos_btnIco}><AiFillCaretDown /></span></button>
          <button className={c.btnLang}>Language <span className={c.repos_btnIco}><AiFillCaretDown /></span></button>
          <button className={c.btnSort}>Sort <span className={c.repos_btnIco}><AiFillCaretDown /></span></button>
        </div>
        <div className={c.mainBottom_header}>
        </div>
        {
          json.map(data => {
            return (
              <>
                {data.repostory.map(repostory => {
                  return (
                    <div className={c.box_wrapper}>
                      <div className={c.Main_box}>
                        <div className={c.main_box_header}>
                          <NavLink className={c.NavLink_repostorys} to="https://github.com/AbdurakhmonANV/Amazon"><blockquote>{repostory.name}</blockquote></NavLink>
                          <button className={c.repostory_bottom}>{repostory.public}</button>
                          <div className={c.repostory_star}>&nbsp;  <AiOutlineStar />&nbsp;Star <span className={c.repos_btnIco}><AiFillCaretDown /></span></div>
                        </div>

                        <div className={c.main_box_bottom}>
                          <p className={c.repostory_language}><div className={c.araund}>.</div> {repostory.language}</p>
                          <div className={c.repostory_update}>&nbsp; {repostory.update}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </>

            )
          })
        }
      </div>

    </>
  )
}

export default Repostories