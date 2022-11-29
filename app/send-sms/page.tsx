//@ts-nocheck
'use client'
import React from 'react'
import FormInput from 'app/components/forms/FormInput'

export default function SendSms() {

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(replaceVariables(inputValue, client))
  }

  return (
      <div className="w-screen h-screen flex items-center justify-center">
        <form
            onSubmit={onSubmit}
            className="flex flex-col w-2/3 h-2/3 bg-gray-100 text-center shadow-2xl rounded-3xl py-8 px-14">
          <h2 className="text-gray-500 text-4xl font-bold italic">Send message</h2>
          <FormInput />
          <FormInput />
          <button className="bg-blue-300 rounded-2xl py-2 text-gray-600 mt-4">Send message</button>
        </form>
      </div>
  )
}