import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
function Header() {

  window.onscroll = function () { scrollFunction() }

    function scrollFunction() {
    if (document.getElementById('navbar')) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('navbar').classList.add('shadow-navbar');
        document.getElementById('navbar').classList.add('bg-white');
      } else {
        document.getElementById('navbar').classList.remove('shadow-navbar');
        document.getElementById('navbar').classList.remove('bg-white');
      }
    }
  }

  return (
    <main>
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12  ">
        <div>
          <div>
          <h1 className="text-4xl font-semibold tracking-tight pb-16  sm:text-7xl">
              Agency for <span> </span>
                  <Typewriter
                        words={['Dreamers', 'Creators', 'You!']}
                        loop={0}
                        cursor
                        
                        cursorStyle='_'
                        typeSpeed={120}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                    />
              </h1>
              <ul className="flex gap-8">
                <li className="inline-flex">
                  <Link to="/servicos/AlgoAqui">
                    item 1
                  </Link>
                </li>
                <Link to="/servicos/AlgoAqui">
                  item 1
                </Link>
              </ul>
            <p className="mt-16 text-2xl max-w-3xl leading-8 text-black ">
            Jumpstart today your business with one of our services that range from <span className='lg:text-xl text-md font-medium leading-8 text-gray-700 sm:text-center  transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'><Link to='/'>Web Development</Link></span> 
            <span className='mx-1 lg:text-xl text-md font-medium leading-8 text-gray-700 sm:text-center transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'><Link to='/'> App Development</Link></span>
            <span className='mx-1 lg:text-xl text-md font-medium leading-8 text-gray-700 sm:text-center transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'><Link to='/'> Game Development</Link></span>
            <span className='mx-1 lg:text-xl text-md font-medium leading-8 text-gray-700 sm:text-center transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'><Link to='/'> Digital Marketing</Link></span>
            </p>
            {/* <div className="absolute bottom-0 left-0 flex space-x-6 xl:mx-20 mx-6">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-900 hover:text-gray-800">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-8 w-8" aria-hidden="true" />
              </a>
            ))}
            </div> */}
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
            <img src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" className='w-full h-full object-cover'/>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Header