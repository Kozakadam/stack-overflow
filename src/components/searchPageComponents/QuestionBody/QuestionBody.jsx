import React from 'react'
import {parseBody, parseDate} from '../../../utilities/utilities.js'
import {useNavigate} from 'react-router-dom'

function QuestionBody({question}) {
  const navigate = useNavigate()

  function toUser(userId) {
    navigate(`/profile/${userId}`)
  }

  return (
    <>
      <div className="text-[#0074D6]">{question.title}</div>
      <div className="mb-6 text-sm text-white">{parseBody(question.body)}</div>
      <div className="flex flex-wrap">
        <span className="my-auto text-xs lg:bottom-0">
          {question.tags.map((tag) => (
            <span
              key={tag}
              className="mr-1 rounded bg-gray-800 p-1 px-2 text-sky-300">
              {tag}
            </span>
          ))}
        </span>
        <span className="my-2 grow text-xs lg:bottom-0">
          <span className="float-right my-auto text-stone-400">
            asked {parseDate(question.creation_date)}
          </span>
          <span
            className="float-right mx-2 my-auto text-[#0074D6] hover:cursor-pointer"
            onClick={() => toUser(question.owner.user_id)}>
            {question.owner.display_name}
          </span>
          <img
            src={question.owner.profile_image}
            alt="profile picture"
            className="float-right my-auto inline h-4 w-4"></img>
        </span>
      </div>
    </>
  )
}

export default QuestionBody
