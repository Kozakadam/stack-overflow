import React from 'react'
import {constructLabelWithCount} from '../../../utilities/utilities.js'

function QuestionStatistics({question}) {
  function getVoteStyle(answered) {
    const baseStyle = 'text-green-600 border border-green-600'
    const answeredStyle = 'text-stone-700 bg-green-200'
    return answered ? answeredStyle : baseStyle
  }

  return (
      <>
        <div className="absolute end-0 h-fit w-fit p-1 text-sm ">
          {constructLabelWithCount(
            question.up_vote_count + question.down_vote_count,
            'vote'
          )}
        </div>
        <div
          className={`absolute end-0 top-7 h-fit w-fit rounded-md p-1 text-sm ${getVoteStyle(
            question.is_answered
          )}`}>
          {constructLabelWithCount(question.answer_count, 'answer')}
        </div>
        <div className="absolute end-0 top-14 h-fit w-fit p-1 text-sm text-orange-300">
          {constructLabelWithCount(question.view_count, 'view')}
        </div>
      </>
  )
}

export default QuestionStatistics
