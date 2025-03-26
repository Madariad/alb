import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from './data.json'
import axios from 'axios' 

const initialComments = [
  {
    id: 1,
    author: 'Иван Иванов',
    comment: 'Отличный план урока! Помог студентам лучше понять геометрию.',
    rating: 5,
  },
  {
    id: 2,
    author: 'Мария Петрова',
    comment: 'Можно добавить больше примеров для самостоятельной работы.',
    rating: 4,
  },
]

export default function LessonDetails() {
  const [comments, setComments] = useState(initialComments)
  const [name, setName] = useState('')
  const [errors, setErrors] = useState(false)

  const [newComment, setNewComment] = useState('')

  const [newRating, setNewRating] = useState(5)
  const [lesson, setLesson] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const foundLesson = data.lessonPlans.find(less => less.id === Number(id))
    setLesson(foundLesson)
  }, [id])

  if (!lesson) {
    return <h1 className="text-center text-2xl mt-10 text-gray-600">Loading...</h1>
  }

  const handleAddComment = () => {
    if (name.trim().length == 0 && newComment.trim().length == 0) {
      setErrors(true)
    }
    setErrors(false)

    const commentObj = {
      id: comments.length + 1,
      author: name,
      comment: newComment,
      rating: newRating,
    }
    // setComments([commentObj, ...comments])
    // setNewComment('')
    // setNewRating(5)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pb-10">
      {/* Заголовок с фоном-параллакс */}
      <header className="relative h-64 z-[1] sm:h-80 md:h-96 overflow-hidden mb-12">
        <img 
          src={lesson.image} 
          alt={lesson.title} 
          className="absolute inset-0 w-full h-full object-cover transform scale-110 filter brightness-75"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            {lesson.title}
          </h1>
          <p className="mt-2 sm:mt-4 max-w-lg text-sm sm:text-base md:text-xl text-gray-200 drop-shadow">
            {lesson.description}
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* План урока */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            План урока
          </h2>
          <ol className="list-decimal pl-4 sm:pl-6 space-y-2 text-base sm:text-lg text-gray-700">
            {lesson.steps.map((step) => (
              <li key={step.id} className="hover:text-purple-600 transition-colors">
                {step.step}
              </li>
            ))}
          </ol>
        </section>

        {/* Контент урока */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            Контент урока
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            {lesson.content}
          </p>
        </section>

        {/* Список материалов */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            Необходимые материалы
          </h2>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-base sm:text-lg text-gray-700">
            {lesson.materials.map((material, idx) => (
              <li key={idx} className="hover:underline">
                {material}
              </li>
            ))}
          </ul>
        </section>

        {/* Рекомендации */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            Рекомендации и варианты адаптации
          </h2>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-base sm:text-lg text-gray-700">
            {lesson.recommendations.map((rec, idx) => (
              <li key={idx}>
                {rec}
              </li>
            ))}
          </ul>
        </section>

        {/* Отзывы и комментарии */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            Отзывы и комментарии
          </h2>
          {/* Форма добавления отзыва */}
          <div className="mb-8 p-4 sm:p-6 rounded-xl bg-white/70 shadow-lg backdrop-blur-md">
             <input 
             name='name' 
             value={name} 
             placeholder='ваша имя'
             onChange={(e) => setName(e.target.value)}

               className="w-[300px] p-3 mb-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
             />

            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Оставьте ваш комментарий..."
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
              rows="3"
            />
            <div className="flex flex-col sm:flex-row items-center mt-4">
              <label className="mb-2 sm:mb-0 sm:mr-4 text-base sm:text-xl text-gray-700 font-medium">
                Оценка:
              </label>
              <select
                value={newRating}
                onChange={(e) => setNewRating(Number(e.target.value))}
                className="p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-base sm:text-xl"
              >
                {[5, 4, 3, 2, 1].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddComment}
                className="mt-4 sm:mt-0 sm:ml-auto px-6 py-2 sm:px-8 sm:py-3 bg-purple-600 text-white rounded-xl text-base sm:text-xl font-semibold transition-colors hover:bg-purple-700"
              >
                Оставить отзыв
              </button>
            </div>
          </div>
          {/* Список комментариев */}
          <div className="space-y-4 sm:space-y-6 max-h-80 overflow-y-auto">
            {comments.map((comm) => (
              <div key={comm.id} className="p-4 sm:p-6 rounded-xl bg-white/80 shadow-lg backdrop-blur-sm">
                <div className="flex justify-between items-center border-b pb-2 mb-3">
                  <span className="font-bold text-base sm:text-xl text-gray-800">{comm.author}</span>
                  <span className="text-yellow-500 text-base sm:text-xl font-bold">Рейтинг: {comm.rating}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700">
                  {comm.comment}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Кнопка загрузки ещё отзывов */}
        <div className="text-center">
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-600 text-white rounded-full text-base sm:text-xl font-medium transition-colors hover:bg-green-700">
            Загрузить еще комментарии
          </button>
        </div>
      </div>
    </div>
  )
}
