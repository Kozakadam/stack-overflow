import React from 'react'
import {
  adjustLabelAccordingToCount,
  roundToThousand,
} from '../../utilities/utilities.js'

function UserStatContainer({user}) {
  return (
    <>
      <div className="mb-2 text-left text-xl font-bold">Stats</div>
      <div className="h-48 min-w-40 grid-cols-2 grid-rows-3 flex-nowrap gap-0 rounded-lg border border-zinc-500 px-4 py-4 text-left md:grid">
        <div>
          <div>{roundToThousand(user.reputation)}</div>
          <div className="text-xs">reputation</div>
        </div>
        <div>
          <div>{roundToThousand(user.view_count)}</div>
          <div className="text-xs">reach</div>
        </div>
        <div>
          <div>{roundToThousand(user.answer_count)}</div>
          <div className="text-xs">
            {adjustLabelAccordingToCount(user.answer_count, 'answer')}
          </div>
        </div>
        <div>
          <div>{roundToThousand(user.question_count)}</div>
          <div className="text-xs">
            {adjustLabelAccordingToCount(user.question_count, 'question')}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserStatContainer
