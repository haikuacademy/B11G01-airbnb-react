import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Reviews() {
  return (
    <div className="container mx-auto gap-2">
      <div className="flex gap-2 items-center">
        <div className="inline mb-4">
          <FontAwesomeIcon icon={faCommentDots} />
          <span className="text-lg font-bold ml-1"> 34 Reviews</span>
          <div>
            <FontAwesomeIcon
              icon={faStar}
              className="absolute mt-1 pointer-events-none text-yellow-500"
            />
            <span
              className="text-sm ml-6
            "
            >
              Average Rating: 2.3{' '}
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <Review />
        <Review />
      </div>
    </div>
  )
}

function Review() {
  return (
    <div className="border border-solid border-slate-300 rounded-lg p-3 m-2 text-sm bg-white">
      <div className="flex cols-2 p-3 border-slate-300 gap-3">
        <img
          src="https://randomuser.me/api/portraits/women/53.jpg"
          alt="User"
          className="w-10 rounded-full"
        ></img>
        <div className="inline text-slate-400">
          <div>12.12.2023 </div>
          <div className="text-black">
            <div>Karen Trash</div>
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
        <div className="pl-11">2</div>
      </div>
      <div className="grid justify-items-start p-3 items-center">
        <p>
          Awful place, the pool is cold, the beer is warm. My husband still
          drunk all the time, and it was also raining a lot. I suggest the
          owners to sort these out ASAP. Otherwise I wont return, ever.
        </p>
      </div>
    </div>
  )
}
