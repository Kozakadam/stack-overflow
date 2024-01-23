import {useNavigate, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

function InputElement({id}) {
  const navigate = useNavigate()
  const [searchParam, setSearchParam] = useState('')
  let {intitle} = useParams()

  useEffect(() => {
    if (intitle) {
      setSearchParam(intitle)
    } else {
      setSearchParam('')
    }
  }, [intitle])

  function submit(e) {
    e.preventDefault()
    const searchPath = "search";
    const firstPage = 1;
    if (searchParam && searchParam !== '') {
      navigate(`/${searchPath}/${searchParam}/${firstPage}`)
    } else {
      navigate('/')
    }
  }

  return (
    <form
      className="mx-2 my-auto w-full"
      onSubmit={(e) => submit(e)}>
      <input
        id={id}
        type="text"
        className="w-full bg-stone-300 px-2 py-1 text-black"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}></input>
    </form>
  )
}

export default InputElement
