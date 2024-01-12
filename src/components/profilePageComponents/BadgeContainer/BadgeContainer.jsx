import React from 'react'
import {badgeIcon} from '../../../assets/icons/svgLib.js'

function BadgeContainer({badgeData}) {
  return (
    <div className="mb-4 h-48 min-w-48 grow rounded-lg border border-zinc-500 pb-2 text-3xl">
      <div className="flex">
        <svg
          className={`mx-auto my-2 ml-2 h-12 w-12 fill-current text-badge-${badgeData.type}`}>
          <path d={badgeIcon}></path>
        </svg>
        <div className="my-auto pr-2 mx-auto text-xs">
          {badgeData.count}{' '}
          {badgeData.type.substring(0, 1).toUpperCase() +
            badgeData.type.substring(1, badgeData.type.length)}{' '}
          badges
        </div>
      </div>
      <div className="mt-6 w-full">
        {badgeData.badges.map((badge) => {
          return (
            <div
              className="grid grid-cols-6"
              key={badge.badge_id}>
              <div className="col-span-5 mx-2 my-1 w-fit bg-zinc-900 p-1 text-left text-xs text-white">
                <span className={`my-auto px-1 text-badge-${badgeData.type} font-bold`}>&bull;</span> {badge.name}
              </div>
              <div className="col-span-1 mx-auto my-1 w-full p-1 pr-2 text-right text-xs text-white">
                {badge.award_count}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BadgeContainer
