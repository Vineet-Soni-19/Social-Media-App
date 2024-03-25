import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className='flex justify-around'>
        <div>profile picture</div>
        <div>
            <div>
            Username
            <button>edit profile</button>
            settings
            </div>
            <div>
                No of posts
                followers
                following
            </div>
            <div>
                Bio
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
