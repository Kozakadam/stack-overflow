import React from 'react'
import BadgeContainer from '../BadgeContainer/index.js'

function BadgeList({user}) {
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
    <div className="grow text-left">
      <div className="mb-2 text-xl font-bold">Badges</div>
      <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
        {getBadgeData(user).map((badgeType) => (
          <BadgeContainer
            badgeData={badgeType}
            key={badgeType.type}
          />
        ))}
      </div>
    </div>
  )
}

export default BadgeList
