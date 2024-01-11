import {useNavigate} from 'react-router-dom'
import {
  constructLabelWithCount,
  parseBody,
  parseDate,
} from '../../utilities/utilities.js'

function Question({question}) {
  const navigate = useNavigate()

  function getVoteStyle(answered) {
    const baseStyle = 'text-green-600 border border-green-600'
    const answeredStyle = 'text-stone-700 bg-green-200'
    return answered ? answeredStyle : baseStyle
  }

  function toUser(userId) {
    navigate(`/profile/${userId}`)
  }

  return (
    <div className="grid grid-cols-4 gap-4 border-b border-zinc-700 py-4 text-stone-300 sm:grid-cols-5 md:grid-cols-7">
      <div className="min-w-18 relative col-span-1">
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
      </div>
      <div className="relative col-span-3 mr-4 h-full sm:col-span-4 md:col-span-6 ">
        <div className="text-[#0074D6]">{question.title}</div>
        <div className="mb-10 text-sm text-white">
          {parseBody(question.body)}
        </div>
        <span className="absolute bottom-3 text-xs lg:bottom-0">
          {question.tags.map((tag) => (
            <span
              key={tag}
              className="mr-1 rounded bg-gray-800 p-1 px-2 text-sky-300">
              {tag}
            </span>
          ))}
        </span>
        <span className="absolute bottom-[calc(-12px)] right-0 text-xs lg:bottom-0">
          <img
            src={question.owner.profile_image}
            alt="profile picture"
            className="inline h-4 w-4"></img>
          <span
            className="mx-2 text-[#0074D6] hover:cursor-pointer"
            onClick={() => toUser(question.owner.user_id)}>
            {question.owner.display_name}
          </span>
          <span className="text-stone-400">
            asked {parseDate(question.creation_date)}
          </span>
        </span>
      </div>
    </div>
  )
}

export default Question
