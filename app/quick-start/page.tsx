import React from 'react'
import Link from 'next/link'

const quickStart = () => {
  return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h2 className="font-bold text-4xl text-gray-500 mb-12">Selecciona el tema para empezar...</h2>
        <div className="w-3/4 flex flex-wrap justify-center gap-8">
          <div
              className="w-72 h-32 bg-green-400 text-center flex items-center font-bold px-8
              rounded-3xl hover:scale-105 hover:cursor-pointer duration-300 shadow-2xl">
            <Link href="/ruth-hurwitz/absolute">Estabilidad absoluta de Ruth Hurwitz</Link>
          </div>
          <div
              className="w-72 h-32 bg-amber-400 text-center flex items-center font-bold px-8
              rounded-3xl hover:scale-105 hover:cursor-pointer duration-300 shadow-2xl">
            <Link href="ruth-hurwitz/relative">Estabilidad relativa de Ruth Hurwitz</Link>
          </div>
          <div
              className="w-72 h-32 bg-blue-400 text-center flex items-center font-bold px-8
              rounded-3xl hover:scale-105 hover:cursor-pointer duration-300 shadow-2xl">
            <Link href="jury/absolute">Estabilidad absoluta de Jury</Link>
          </div>
          <div
              className="w-72 h-32 bg-violet-400 text-center flex items-center font-bold px-8
              rounded-3xl hover:scale-105 hover:cursor-pointer duration-300 shadow-2xl">
            <Link href="jury/relative">Estabilidad relativa de Jury</Link>
          </div>
          <div
              className="w-72 h-32 bg-red-400 text-center flex items-center font-bold px-8
              rounded-3xl hover:scale-105 hover:cursor-pointer duration-300 shadow-2xl">
            <Link href="digital-process">Tabla de procesadores digitales</Link>
          </div>
        </div>
        <div className="fixed bottom-8 left-8 hover:text-blue-500">
          <Link href="/">Back</Link>
        </div>
      </div>
  )
}

export default quickStart