import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#76b900]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Company</h2>
              <ul className="font-medium text-black">
                <li className="mb-4">
                  <Link href="/about" className=" hover:underline">About</Link>
                </li>
                <li className="mb-4">
                  <Link href="/ideas" className="hover:underline">BYS</Link>
                </li>
                <li className="mb-4">
                  <Link href="/team" className="hover:underline">Our Team</Link>
                </li>
                <li className="mb-4">
                  <Link href="/blogs" className="hover:underline">Blogs</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Help center</h2>
              <ul className="font-medium text-black">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">Discord Server</Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">Twitter</Link>
                </li>
                <li className="mb-4">
                  <Link href="/support" className="hover:underline">Support</Link>
                </li>
                <li className="mb-4">
                  <Link href="/contact" className="hover:underline">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
              <ul className="font-medium text-black">
                <li className="mb-4">
                  <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                </li>
                <li className="mb-4">
                  <Link href="/licensing" className="hover:underline">Licensing</Link>
                </li>
                <li className="mb-4">
                  <Link href="/terms" className="hover:underline">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">usage</h2>
              <ul className="font-medium text-black">
                <li className="mb-4">
                  <Link href="/marketplace" className="hover:underline">Marketplace</Link>
                </li>
                <li className="mb-4">
                  <Link href="/authenticate" className="hover:underline">Dashboard</Link>
                </li>
                <li className="mb-4">
                  <Link href="/profile" className="hover:underline">Profile</Link>
                </li>
                <li className="mb-4">
                  <Link href="/investments" className="hover:underline">Investments</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#76b900] px-4 py-6 md:flex md:items-center md:justify-between">
            <span className="text-sm text-black dark:text-gray-300 sm:text-center">© {new Date().getFullYear()} <Link href="/">Inqube™</Link>. All Rights Reserved.
            </span>
            <div className="mt-4 flex space-x-5 sm:justify-center md:mt-0 rtl:space-x-reverse">
              <Link href="/" className="text-black hover:text-gray-900 dark:hover:text-white">
                <svg className="size-5 hover:scale-105" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link href="/" className="text-black hover:text-gray-900 dark:hover:text-white">
                <svg className="size-5 hover:scale-105" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                </svg>
                <span className="sr-only">Discord community</span>
              </Link>
              <Link href="/" className="text-black hover:text-gray-900 dark:hover:text-white">
                <svg className="size-5 hover:scale-105" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link href="https://github.com/Inqube-ai" className="text-black hover:text-gray-900 dark:hover:text-white">
                <svg className="size-5 hover:scale-105" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">GitHub account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer