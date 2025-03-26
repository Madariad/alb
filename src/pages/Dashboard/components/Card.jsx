import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({image, title, tags, description, src}) {
  return (
    
         <div
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
            <div className="mt-4 mb-6 flex space-x-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-500 px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link to={src}   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition ">
              Подробнее
            </Link>
          </div>
    
  )
}
