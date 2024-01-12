import {useNavigate} from 'react-router-dom'
import QuestionStatistics from '../QuestionStatistics'
import QuestionBody from '../QuestionBody'

function Question({question}) {

  return (
    <div className="grid grid-cols-4 gap-4 border-b border-zinc-700 py-4 text-stone-300 sm:grid-cols-5 md:grid-cols-7">
      <div className="min-w-18 relative col-span-1">
        <QuestionStatistics question={question} />
      </div>
      <div className="relative col-span-3 mr-4 h-full sm:col-span-4 md:col-span-6 ">
        <QuestionBody question={question} />
      </div>
    </div>
  )
}

export default Question
