function Review() {
  return (
    <div className="border border-solid border-slate-300 rounded-lg p-3 m-2 text-sm bg-white">
      <div className="flex cols-2 p-3 border-slate-300 gap-3">
        <img
          src="https://randomuser.me/api/portraits/women/53.jpg"
          alt="User photo"
        ></img>
        <div className="inline text-slate-400">
          <div>12.12.2023 </div>
          <div className="text-black">
            <div>Karen Trash</div>
          </div>
        </div>
      </div>
      <div className="flexflex gap-2 my-2"></div>
      <span mr-2>Rating : 2.5</span>
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

export default Review
