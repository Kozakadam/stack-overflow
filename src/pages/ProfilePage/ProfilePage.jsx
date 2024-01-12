import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {userProvider} from '../../providers/dataProvider.js'
import ProfileHeader from '../../components/profilePageComponents/ProfileHeader'
import UserStatContainer from '../../components/profilePageComponents/UserStatContainer'
import TagListContainer from '../../components/profilePageComponents/TagListContainer'
import PostListContainer from '../../components/profilePageComponents/PostListContainer'
import BadgeList from '../../components/profilePageComponents/BadgeList'
import { USER_PROVIDER_CONFIG } from "../../providers/providerConfig.js";

function ProfilePage() {
  const {userId} = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getUser() {
      setLoading(true)
      const data = await userProvider(userId, USER_PROVIDER_CONFIG)
      setUser(data)
      setLoading(false)
    }

    getUser()
  }, [userId])

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="2xl:w:6/12 md:w-12/12 relative mx-auto w-full border-x border-zinc-500 p-6 text-left lg:w-10/12 xl:w-8/12">
          <ProfileHeader user={user.base[0]} />
          <div className="mt-4 flex w-full flex-wrap gap-4 text-center text-stone-300">
            <UserStatContainer user={user.base[0]} />
            <BadgeList user={user}/>
          </div>
          <TagListContainer tags={user.tags} />
          <PostListContainer posts={user.posts} />
        </div>
      )}
    </>
  )
}

export default ProfilePage
