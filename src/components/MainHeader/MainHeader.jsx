import React from 'react';
import c from './MainHeader.module.css';

import { HiOutlineRectangleStack } from 'react-icons/hi2'
import { BiBookOpen } from 'react-icons/bi';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { FiPackage } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';




const MainHeader = () => {
  return (
    <>

    
<div className={c.main_header}>
        <ul className={c.main_wrapper}>
          <NavLink className={c.nav} to='/'> <span className={c.main_icons}><BiBookOpen /></span> Overview</NavLink>
          <NavLink className={c.nav} aria-current="page" to='/Repostories'> <span className={c.main_icons}><RiGitRepositoryLine /></span> Repositories</NavLink>
          <a className={c.nav} href='https://github.com/AbdurakhmonANV?tab=projects'> <span className={c.main_icons}> <HiOutlineRectangleStack /></span> Projects</a>
          <as className={c.nav} href='https://github.com/AbdurakhmonANV?tab=packages'> <span className={c.main_icons}><FiPackage /></span> Packages</as>
          <a className={c.nav} href='https://github.com/AbdurakhmonANV?tab=stars'> <span className={c.main_icons}><AiOutlineStar /></span> Stars</a>
        </ul>
      </div>
    </>
  )
}

export default MainHeader