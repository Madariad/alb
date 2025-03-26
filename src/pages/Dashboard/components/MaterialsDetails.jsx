import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import matdata from './matData.json';

export default function MaterialsDetails() {
  const [material, setMaterial] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const found = matdata.find(item => item.id === Number(id))
    setMaterial(found)
  }, [id])

  if (!material) {
    return <div className="text-center text-gray-600 mt-10">Загрузка...</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl my-10">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{material.title}</h1>
      
      {/* Введение */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Введение</h2>
        <p className="text-gray-600">{material.introduction}</p>
      </section>

      {/* Основной контент */}
      {material.sections.map((sec, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">{sec.heading}</h2>
          <p className="text-gray-600 whitespace-pre-line">{sec.content}</p>
        </section>
      ))}

      {/* Мультимедиа */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Мультимедиа</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {material.multimedia.map((img, idx) => (
            <img key={idx} src={img} alt="Пример методики" className="object-cover w-full h-48 rounded-md shadow"/>
          ))}
        </div>
      </section>

      {/* Дополнительные ресурсы */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Дополнительные ресурсы</h2>
        <ul className="list-disc list-inside text-gray-600">
          {material.additionalResources.map((res, idx) => (
            <li key={idx}>
              <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {res.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Отзывы и комментарии */}
      {/* Если потребуется, раскомментируйте этот блок и добавьте обработку отзывов */}
      {/*
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Отзывы и комментарии</h2>
        {material.reviews && material.reviews.length > 0 ? (
          material.reviews.map((review, idx) => (
            <div key={idx} className="mb-4 p-4 border border-gray-200 rounded-md">
              <p className="text-gray-800 font-semibold">{review.author}</p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Нет отзывов.</p>
        )}
      </section>
      */}
    </div>
  )
}
