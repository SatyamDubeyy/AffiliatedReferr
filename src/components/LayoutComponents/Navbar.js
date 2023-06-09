import React from 'react'
import { Dropdown, Avatar } from 'antd'
// import { DownOutlined } from '@ant-design/icons'
// import { MdArrowDropDown } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import logo from '../../assets/project-logo.png'

const Navbar = () => {
  const navigate = useNavigate()
  const profileDetails = useSelector((state) => state.userReducer.user)

  const items = [
    {
      label: <div onClick={() => navigate('/account-details')}>Profile</div>,
      key: '0',
    },
    {
      label: <div onClick={() => navigate('/setting')}>Posts</div>,
      key: '1',
    },
    {
      label: (
        <div
          onClick={() => {
            localStorage.clear()
            navigate('/login')
          }}
        >
          Logout
        </div>
      ),
      key: '2',
    },
  ]

  return (
    <div className='nav-container'>
      <div className='left'>
        <div className='nav-icon'>
          <img src={logo} />
        </div>
      </div>
      <div className='right'>
        <div
          className='nav-link'
          onClick={() => {
            window.scrollTo(0, 0)
            navigate('/home')
          }}
        >
          Home
        </div>
        <div
          className='nav-link'
          onClick={() => {
            window.scrollTo(0, 0)
            navigate('/create-post')
          }}
        >
          Create Post
        </div>
        <Dropdown
          className='nav-drop-down'
          menu={{
            items,
          }}
          trigger={['click']}
        >
          <div onClick={(e) => e.preventDefault()}>
            <Avatar className='header-avatar' src={profileDetails?.profileImage} />
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default Navbar
