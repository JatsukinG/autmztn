//@ts-nocheck
'use client'
import React, { useRef, useState } from 'react'

const descriptions = {
  firstName: {
    title: 'First name',
    description: 'First name of the client'
  },
  lastName: {
    title: 'Last name',
    description: 'Last name of the client'
  },
  address: {
    title: 'Address',
    description: 'Address of the client'
  },
  store: {
    title: 'Store',
    description: 'Store when client is doing his money transactions'
  }
}

const client = {
  firstName: 'Julian',
  lastName: 'Trujillo',
  address: 'Belencito calle 32',
  store: 'Rumba#12',
}

const FormInput = () => {
  const inputRef = useRef()
  const [inputValue, setInputValue] = useState('')
  const [showVariables, setShowVariables] = useState(false)
  const [information, setInformation] = useState(descriptions.firstName)
  const [variables, setVariables] = useState(['firstName', 'lastName', 'address', 'store'])
  const [cursor, setCursor] = useState(-1)

  const handleOption = (id) => {
    setShowVariables(false)
    setCursor(-1)
    if (inputValue[inputValue.length - 2] === '{') {
      inputRef.current.focus()
      return setInputValue(`${inputValue}${id}}}`)
    }
    inputRef.current.focus()
    return setInputValue(`${inputValue}{${id}}}`)
  }

  const mouseHover = (id) => {
    setInformation(descriptions[id])
  }

  const onMouseOut = () => {
    console.log('mouse out')
  }

  const onKeydown = (e) => {
    if (e.key === 'ArrowDown') {
      const n = cursor < variables.length - 1 ? cursor + 1 : 0
      setCursor(n)
      mouseHover(variables[n])
    }
    if (e.key === 'ArrowUp') {
      const n = cursor > 0 ? cursor - 1 : variables.length - 1
      setCursor(n)
      mouseHover(variables[n])
    }
    if (e.key === 'Enter') {
      handleOption(variables[cursor])
    }
  }

  const onChanged = (e) => {
    if (e.target.value[e.target.value.length - 1] === '{') {
      setShowVariables(true)
    } else {
      setShowVariables(false)
    }
    setInputValue(e.target.value)
  }

  return (
      <div>
        <input
            ref={inputRef}
            className="bg-transparent outline-none border-b-2 focus:border-blue-200 my-2 w-full py-2 mt-8"
            type="text"
            placeholder="add text..."
            value={inputValue}
            onChange={onChanged}
            onKeyDown={onKeydown}
        />
        {
            showVariables &&
            <div className="absolute flex shadow-2xl w-60 max-h-32 bg-gray-50 overflow-hidden">
              <div className="w-1/3 flex flex-col border-y-green-300 border-r overflow-y-scroll">
                {
                  variables.map((variable, index) => (
                      <button
                          key={variable}
                          onMouseOut={onMouseOut}
                          onMouseOver={() => {
                            mouseHover(variable)
                          }}
                          type="button"
                          onClick={() => handleOption(variable)}
                          className={`text-xs font-bold p-2 border-b hover:bg-blue-100 ${cursor === index && 'bg-blue-100'}`}>
                        {variable}
                      </button>
                  ))
                }
              </div>
              <div className="w-2/3 text-sm p-4">
                <h3><b>value: {information.title}</b></h3>
                <p>{information.description}</p>
              </div>
            </div>
        }
      </div>
  )
}

export default FormInput