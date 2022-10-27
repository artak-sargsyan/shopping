import {Link} from 'react-router-dom'
import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import './Nav.css'


export default function Nav(){
    const [count,setCount] = useState(true)
    return(
        <>
        <div className={count ? 'Nav' :'Nav1'}>
        <div className='Nav_header'>
            <p className='Nav_header_pi'>
                <img  className='Nav_header_pi_img' src='./img/logo.png'/>
            </p>
        </div>
        <div className={count ? 'Nav_header':'Nav_header_1'}>
            <Link className={count ? 'Nav_header_link' : 'Nav_header_link1'} to={'*'}>Տուն 
            <p className='Nav_header_link_border'></p>
            </Link>
            <Link className={count ? 'Nav_header_link' : 'Nav_header_link1'} to={'/Shop'}>Խանութ 
            <p className='Nav_header_link_border'></p>
            </Link>
            <Link className={count ? 'Nav_header_link' : 'Nav_header_link1'} to={'Blog'}>Բլոգ 
            <p className='Nav_header_link_border'></p>
            </Link>
            <Link className={count ? 'Nav_header_link' : 'Nav_header_link1'} to={'/About'}>Օգտվող 
            <p className='Nav_header_link_border'></p>
            </Link>
            <Link className={count ? 'Nav_header_link' : 'Nav_header_link1'} to={'/Contact'}>Կապ 
            <p className='Nav_header_link_border'></p>
            </Link>
            <Link className={count ? 'Nav_header_link Nav_link' : 'Nav_header_link1'}   to={'/ShopCard'}><Icon icon="ant-design:shopping-outlined" /></Link>
            <Icon className={count ? 'icon_hamburger': 'icon_hamburger_1'} icon="ci:hamburger"  onClick={()=>{
                setCount(false)
            }}/>
            <Icon className={count ? 'icon_small' : 'icon_small_1'} icon="teenyicons:x-small-outline" onClick={()=>{
                setCount(true)
            }}/>
        </div>
        </div>
       
        </>
    )
}