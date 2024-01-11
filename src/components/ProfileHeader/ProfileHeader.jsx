import React from 'react'
import { parseDate } from "../../utilities/utilities.js";

function ProfileHeader({user}) {
  return (
    <div className="flex w-full gap-6 text-stone-300">
      <img
        src={user.profile_image}
        className="max-w-40"></img>
      <div className="mt-4 sm:mt-14">
        <div className="text-3xl">{user.display_name}</div>
        <div className="text-xs">
          Member since {parseDate(user.creation_date)}
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
