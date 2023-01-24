import React, { useState } from 'react';
import c from './Navbar.module.css';
// import logo from './../../assets/images/logoo.png'
import { BiBell, BiPlus } from 'react-icons/bi';
import { MdArrowDropDown } from 'react-icons/md';
import { BsSlashSquare } from 'react-icons/bs';
import { useEffect } from 'react';
import json from '../../json/data.json'


export const Navbar = ({ user }) => {
    // const [Github, setGithub] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");




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


    const handleSubmit = (e) => {
        e.preventDefault();
        const userInfo = (search);
        console.log(userInfo);

    }

    return (

        <div className={c.navbar}>

            <div className={c.left_header}>
                <div>
                    <img className={c.logo} src="https://github.githubassets.com/favicons/favicon-dark.svg" alt="" />
                </div>
                <div>
                    <form onSubmit={handleSubmit} className={c.left_header_input} action="">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search or jump to...' type="text" />
                        <BsSlashSquare />
                    </form>

                </div>
            </div>
            <ul className={c.nav_global}>
                <li><a href="https://github.com/pulls">Pull requests</a> </li>
                <li><a href="https://github.com/issues">Issues</a> </li>
                <li><a href="https://github.com/codespaces">Codespaces</a> </li>
                <li><a href="https://github.com/marketplace">Marcetplace</a> </li>
                <li><a href="https://github.com/explore">Explore</a> </li>
            </ul>
            <div className={c.right_header}>
                <div>
                    <BiBell />
                </div>
                <div>
                    <BiPlus />
                    <MdArrowDropDown />
                </div>
                {
            json.map(data => {
                return(
                    <div>
                    <img className={c.header_avatar} src={data.avatar_url} alt="" />
                    <MdArrowDropDown />
                </div>
                )
            })
        }
                
            </div>
        </div>
    )
}
