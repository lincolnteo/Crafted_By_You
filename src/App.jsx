import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1126px] flex-col border-x border-gray-200 text-center text-gray-700">
      <section className="flex grow flex-col place-items-center place-content-center gap-[25px] px-5 py-8 lg:gap-[18px] lg:px-5 lg:py-6">
        <div className="relative">
          <img src={heroImg} className="relative z-0 w-[170px]" width="170" height="179" alt="" />
          <img
            src={reactLogo}
            className="absolute left-0 right-0 top-[34px] z-10 mx-auto h-7 [transform:perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute left-0 right-0 top-[107px] z-0 mx-auto h-[26px] w-auto [transform:perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
            alt="Vite logo"
          />
        </div>
        <div>
          <h1 className="mb-4 text-4xl font-medium tracking-tight text-gray-900 lg:text-6xl">
            Get started
          </h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="mb-6 rounded-md border-2 border-transparent bg-indigo-100 px-2.5 py-1.5 text-base text-indigo-700 transition-colors hover:border-indigo-300 focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="relative w-full">
        <span className="absolute -top-[4.5px] left-0 h-0 w-0 border-[5px] border-transparent border-l-gray-200"></span>
        <span className="absolute -top-[4.5px] right-0 h-0 w-0 border-[5px] border-transparent border-r-gray-200"></span>
      </div>

      <section className="flex flex-col border-t border-gray-200 text-center lg:flex-row lg:text-left">
        <div className="flex-1 border-b border-gray-200 px-5 py-6 lg:border-r lg:border-b-0 lg:px-8 lg:py-8">
          <svg className="mb-4 h-[22px] w-[22px] lg:mx-0 mx-auto" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="mb-2 text-xl font-medium tracking-tight text-gray-900 lg:text-2xl">Documentation</h2>
          <p>Your questions, answered</p>
          <ul className="mt-5 flex list-none flex-wrap justify-center gap-2 p-0 lg:mt-8 lg:justify-start">
            <li>
              <a
                href="https://vite.dev/"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 no-underline transition-shadow hover:shadow"
              >
                <img className="h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 no-underline transition-shadow hover:shadow"
              >
                <img className="h-[18px] w-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-5 py-6 lg:px-8 lg:py-8">
          <svg className="mb-4 h-[22px] w-[22px] lg:mx-0 mx-auto" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="mb-2 text-xl font-medium tracking-tight text-gray-900 lg:text-2xl">Connect with us</h2>
          <p>Join the Vite community</p>
          <ul className="mt-5 flex list-none flex-wrap justify-center gap-2 p-0 lg:mt-8 lg:justify-start">
            <li>
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 no-underline transition-shadow hover:shadow"
              >
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 no-underline transition-shadow hover:shadow"
              >
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 no-underline transition-shadow hover:shadow"
              >
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 no-underline transition-shadow hover:shadow"
              >
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="relative w-full">
        <span className="absolute -top-[4.5px] left-0 h-0 w-0 border-[5px] border-transparent border-l-gray-200"></span>
        <span className="absolute -top-[4.5px] right-0 h-0 w-0 border-[5px] border-transparent border-r-gray-200"></span>
      </div>
      <section className="h-12 border-t border-gray-200 lg:h-[88px]"></section>
    </div>
  )
}

export default App
