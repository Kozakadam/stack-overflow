import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {questionProvider} from '../../providers/dataProvider.js'
import Question from '../../components/searchPageComponents/Question'
import PageNavigationFooter from '../../components/searchPageComponents/PageNavigationFooter/index.js'
import { QUESTION_PROVIDER_CONFIG } from "../../providers/providerConfig.js";

const STARTING_PAGE = 1

function SearchPage() {
  let {intitle} = useParams()
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState([])
  const [currentPage, setCurrentPage] = useState(STARTING_PAGE)
  const [isNextPage, setIsNextPage] = useState(false)
  const [topic, setTopic] = useState('')

  useEffect(() => {
    async function getQuestions() {
      setLoading(true)
      let page = currentPage
      if (topic !== intitle) {
        setTopic(intitle)
        setCurrentPage(STARTING_PAGE)
        page = STARTING_PAGE
      }
      const data = await questionProvider({intitle, page}, QUESTION_PROVIDER_CONFIG)
      setIsNextPage(data.has_more)
      setQuestions(data.items)
      setLoading(false)
    }

    getQuestions()
  }, [intitle, currentPage])

  function handlePageChange(change) {
    setCurrentPage((currentPage) => currentPage + change)
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="2xl:w:6/12 mx-auto mb-10 w-full text-left md:w-11/12 lg:w-10/12 xl:w-8/12">
          {questions.length > 0 ? (
            <>
              {questions.map((q) => (
                <Question
                  question={q}
                  key={q.question_id}
                />
              ))}
              <PageNavigationFooter
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                isNextPage={isNextPage}
              />
            </>
          ) : (
            <div>No questions found!</div>
          )}
        </div>
      )}
    </>
  )
}

export default SearchPage
