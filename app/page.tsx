//@ts-nocheck
import Header from 'app/components/header/Header'
import Link from 'next/link'

export default function Home() {

  return (
      <div className="w-screen h-screen">
        <Header/>
        <div className="h-full w-full flex justify-around items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl mb-8">Automation Page</h1>
            <p className="mb-6 text-justify">
              <b>Hi, welcome</b> to automation page, a support tool <br/>
              to engineers, where you can perform <br/>
              your tasks more easily and have more time for your <br/>
              <b>solitary life</b>
            </p>
            <div>
              <button className="bg-green-400 mr-4 px-4 py-3 rounded-2xl hover:bg-green-600">
                <Link href="/quick-start">Quick start</Link>
              </button>
              <button className="bg-violet-400 mr-4 px-4 py-3 rounded-2xl hover:bg-violet-600">
                Sing up
              </button>
              <button className="bg-blue-400 mr-4 px-4 py-3 rounded-2xl hover:bg-blue-600">
                <Link href="/auth/login">Sing in</Link>
              </button>
            </div>
          </div>
          <img src="/robot.svg" alt="Logo" className="w-72 animate-bounce"/>
        </div>
      </div>
  )
}