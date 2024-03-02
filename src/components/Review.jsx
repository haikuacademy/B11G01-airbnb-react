import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Reviews() {
  const reviews = [
    {
      content:
        'This place exceeded my expectations! I would definitely return.',
      rating: 5,
      date: '2024-03-02',
      author: {
        firstName: 'Ryan',
        lastName: 'Jones',
        picture: 'https://randomuser.me/api/portraits/men/71.jpg'
      }
    },
    {
      content: 'Not satisfied with the house. It could be better.',
      rating: 2,
      date: '2024-03-01',
      author: {
        firstName: 'Karen',
        lastName: 'Trash',
        picture: 'https://randomuser.me/api/portraits/women/53.jpg'
      }
    },
    {
      content: 'Great location and super responsive host!',
      rating: 4.5,
      date: '2024-02-28',
      author: {
        firstName: 'Jim',
        lastName: 'Crawford',
        picture: 'https://randomuser.me/api/portraits/men/11.jpg'
      }
    }
  ]

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <div className="container mx-auto gap-2">
      <div className="flex gap-2 items-center">
        <div className="inline mb-4">
          <FontAwesomeIcon icon={faCommentDots} />
          <span className="text-lg font-bold ml-1">
            {' '}
            {reviews.length} Reviews
          </span>
          <div>
            <FontAwesomeIcon
              icon={faStar}
              className="absolute mt-1 pointer-events-none text-yellow-500"
            />
            <span
              className="text-sm ml-6
            "
            >
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
