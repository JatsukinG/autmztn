//@ts-nocheck
'use client'
import React, { useState } from 'react'

const JuryAbsolute = () => {
  const [inputValue, setInputValue] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [numbersArray, setNumbersArray] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue('')
    const numbersArray = inputValue.split(',').map((number) => Number(number))
    if (numbersArray.length % 2) {
      console.log('Es impar')
    } else {
      console.log('Es par')
    }
    setNumbersArray(numbersArray)
    setShowResults(true)
    console.log(numbersArray)
  }

  const handleChange = (e) => setInputValue(e.target.value)

  return (
      <div className="flex flex-col items-center w-screen h-screen">
        <h1 className="text-3xl font-bold text-gray-500 text-center mt-8">Estabilidad Absoluta de Jury</h1>
        <form
            onSubmit={handleSubmit}
            className="flex items-center w-3/4 mt-4">
          <input
              type="text"
              placeholder="Ingresa la ecuacion caracteristica: x,x,x,x"
              value={inputValue}
              onChange={handleChange}
              className="text-center w-full outline-none border-2 rounded-3xl py-2 px-4 mr-4"
          />
          <button type="submit" className="bg-green-400 rounded-3xl py-2 px-4">
            Resolver
          </button>
        </form>
        <div className="w-3/4 text-center h-2/3 border-2 rounded-2xl mt-8 overflow-y-scroll">
          {
            showResults ?
                <div className="flex flex-col items-center p-4">
                  <div className="flex mb-8">
                    {
                      numbersArray.map((number, index) =>
                          <p key={index} className="px-4 py-2 border-2 border-gray-500 rounded-2xl mr-4">a{
                            <sub>{index}</sub>} = {number}</p>
                      )
                    }
                  </div>
                  <h4>Primer paso:</h4>
                </div>
                :
                <p className="p-4">
                  Este criterio de estabilidad tiene la particularidad de poder ser
                  empleadodirectamente sobre sistemas de tiempo discreto expresados en la variable z.
                  <br/>
                  Este método prueba la estabilidad absoluta, revela la existencia de cualquier raíz inestable,
                  pero no da su localización.
                </p>
          }
        </div>
      </div>
  )
}

export default JuryAbsolute