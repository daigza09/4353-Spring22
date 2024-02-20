import React from 'react'

const HomePageContentBox = ({title, body}) => {
  return (
    <div className="rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 bg-white"> {title}</h3>
          <p>{body}</p>
    </div>
  )
}

export default HomePageContentBox