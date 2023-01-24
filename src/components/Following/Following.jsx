import React from 'react';
import './Following.css';
import json from '../../json/follow.json';
import {GoLocation } from 'react-icons/go'

const Following = () => {
  return (
    <>
    <div className='following'> 
    {
        json.map(data => {
            return(
                <>
                <div className='follow_wrapper'>
                    <div><img className='follow_img' src={data.avatar} alt="" /></div>
                    <div>
                        <div className='follow_header'>
                            <div className='follow_un'>
                                <div><b ><a className='fName'href="https://github.com/Jahongir0126">{data.name}</a></b></div>&nbsp;&nbsp;
                                <div><p className='fUser'>{data.user}</p></div>
                            </div>
                            <button className='unfollowBtn'>Unfollow</button>
                        </div>
                        <div className='follow_loc'>{data.work}</div>
                        <div className='follow_loc'><span className='loc_ico'><GoLocation/></span>{data.loc}</div>
                    </div>
                </div>
                </>
            )
        })
    }
    
    </div>
    </>
  )
}

export default Following