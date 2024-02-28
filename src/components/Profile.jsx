import Nav from './Nav'

function Profile() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="gap-1 flex justify-start bg-blue-200">
        <div className="flex bg-blue-600">1</div>
        <div className="flex bg-blue-600">2</div>
      </div>
    </div>
  )
}

export default Profile
