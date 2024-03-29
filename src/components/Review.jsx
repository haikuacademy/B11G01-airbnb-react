import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Reviews({ rating, house_id }) {
  const [reviews, setReviews] = useState([])
  // const [loading, setLoading] = useState(true)
  const [reviewed, setReviewed] = useState(false)

  const getReviews = async () => {
    if (house_id) {
      let response = await axios.get(
        `https://haiku-bnb.onrender.com/reviews?house_id=${house_id}`
      )
      console.log('data', response)
      setReviews(response.data)
    }
  }
  const leaveReview = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    let formObject = Object.fromEntries(form.entries())
    formObject.house_id = house_id
    setReviewed(true)
  }

  useEffect(() => {
    getReviews()
    // eslint-disable-next-line
  }, [])

  const averageRating = 0

  // reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  return (
    <div>
      <div className="container mx-auto gap-2">
        <div className="flex gap-2 items-center">
          <div className="inline mb-4">
            <FontAwesomeIcon icon={faCommentDots} />
            <span className="text-lg font-bold ml-1">
              {reviews.length} Reviews
            </span>
            <div>
              <FontAwesomeIcon
                icon={faStar}
                className="absolute mt-1 pointer-events-none text-yellow-500"
              />
              <span className="text-sm ml-6">
                Average Rating: {averageRating.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Review(props) {
  const review = props.review
  return (
    <div className="border border-solid border-slate-300 rounded-lg p-3 m-2 text-sm bg-white">
      <div className="flex cols-2 p-3 border-slate-300 gap-3">
        <img
          src={review.author.picture}
          alt="User"
          className="w-10 rounded-full"
        ></img>
        <div className="inline text-slate-400">
          <div>{review.date}</div>
          <div className="text-black">
            <div>
              {review.author.firstName} {review.author.lastName}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 my-2"></div>
      <div>
        <FontAwesomeIcon
          icon={faStar}
          className="absolute mt-1 mr-4 pointer-events-none text-yellow-500"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="absolute mt-1 ml-5 pointer-events-none text-yellow-500"
        />
        <div className="pl-11">{review.rating}</div>
      </div>
      <div className="grid justify-items-start p-3 items-center">
        <p>
          <ul></ul>
        </p>
      </div>
    </div>
  )
}
