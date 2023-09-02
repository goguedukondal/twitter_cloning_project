import React from 'react'
import './Leftsidebar.css'
import { FaTwitter } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';
import { MdMailOutline } from 'react-icons/md';
import { MdBookmarkBorder } from 'react-icons/md';
import { FaListAlt } from 'react-icons/fa';
import { MdPermIdentity } from 'react-icons/md';
import { MdMoreHoriz } from 'react-icons/md';
import Leftsidebaroption from './Leftsidebaroption';
function Leftsidebar() {
  return (
    <div className='leftsidebar'>
        <FaTwitter className="leftsidebar__twitterIcon" />
        <Leftsidebaroption active Icon={FaHome} text="Home"/>
        <Leftsidebaroption  Icon={FaSearch} text="Explore"/>
        <Leftsidebaroption  Icon={MdNotificationsNone} text="Notifications"/>
        <Leftsidebaroption  Icon={MdMailOutline}  text="Messages"/>
        <Leftsidebaroption  Icon={MdBookmarkBorder} text="Bookmarks"/>
        <Leftsidebaroption  Icon={FaListAlt} text="Lists"/>
        <Leftsidebaroption  Icon={MdPermIdentity} text="Profile"/>
        <Leftsidebaroption  Icon={MdMoreHoriz} text="More"/>
        <button className="tweet_button">Tweet</button>

    </div>
  )
}

export default Leftsidebar