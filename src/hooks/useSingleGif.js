import {useGifs} from 'hooks/useGifs'
import { useEffect, useState } from 'react'
import getSingleGif from 'services/getSingleGif'

export default function useSingleGif ({id}) {
  const {gifs} = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)

  const [gif, setGif] = useState(gifFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!gif) {
      setIsLoading(true)
      getSingleGif({id})
        .then(gif => {
          setIsLoading(false)
          setGif(gif)
        })
        .catch(() => {
          setIsLoading(false)
          setIsError(true)
        })
    }
  }, [gif, id])

  return {isLoading, isError, gif}
}
