import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faStar } from '@fortawesome/free-solid-svg-icons'

export default function LeaveReview() {
  return (
    <div className="border rounded p-3 m-10">
      <div className="flex text-sm gap-1 mb-2 justify-left">Leave a Review</div>
      <div>
        <FontAwesomeIcon
          icon={faStar}
          className="absolute pointer-events-none text-yellow-500"
        />
        <div className="flex text-sm ml-6 mb-1">0</div>
        <textarea
          className="border w-full p-2 mt-1 mb-1 rounded span-w"
          placeholder="Please leave a review for this house..."
        ></textarea>
        <div>
          <button className="border bg-red-400  text-white rounded justify-left p-4 py-2">
            {' '}
            Submit Review
          </button>
        </div>
      </div>
    </div>
  )
}
