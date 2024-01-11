import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {userProvider} from '../../providers/dataProvider.js'
import BadgeContainer from '../../components/BadgeContainer'
import ProfileHeader from '../../components/ProfileHeader'
import UserStatContainer from '../../components/UserStatContainer'
import TagListContainer from "../../components/TagListContainer";
import PostListContainer from "../../components/PostListContainer";

function ProfilePage() {
  const {userId} = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getUser() {
      setLoading(true)
      const data = await userProvider(userId)
      setUser(data)
      setLoading(false)
    }

    getUser()
  }, [userId])

  function getBadgeData(user) {
    const BADGE_TYPES = ['gold', 'silver', 'bronze']
    return BADGE_TYPES.map((type) => ({
      badges: user[type]
        .sort((a, b) => b.award_count - a.award_count)
        .slice(0, 3),
      count: user.base[0].badge_counts[type],
      type: type,
    }))
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="2xl:w:6/12 md:w-12/12 relative mx-auto w-full border-x border-zinc-500 p-6 text-left lg:w-10/12 xl:w-8/12">
          <ProfileHeader user={user.base[0]} />
          <div className="mt-4 flex w-full flex-wrap gap-4 text-center text-stone-300">
            <div className="">
              <UserStatContainer user={user.base[0]} />
            </div>
            <div className="grow text-left">
              <div className="mb-2 text-xl font-bold">Badges</div>
              <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
                {getBadgeData(user).map((badgeType) => (
                  <BadgeContainer
                    badgeData={badgeType}
                    key={badgeType.color}
                  />
                ))}
              </div>
            </div>
          </div>
          <TagListContainer tags={user.tags}/>
          <PostListContainer posts={user.posts}/>
        </div>
      )}
    </>
  )
}

export default ProfilePage
