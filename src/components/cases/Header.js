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
        {/* <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12"> */}
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div>



            <div>
              <h1 className="text-4xl font-bold tracking-tight pb-16 sm:text-6xl">
                Casos de estudios 4:04

              </h1>
              <p className="mt-16 text-2xl max-w-3xl leading-8 text-black ">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                amet fugiat veniam occaecat fugiat aliqua.
              </p>



              <ul className="flex gap-8 items-center justify-center py-12">
                <li className="inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out mx-4">
                  <Link to="/servicos/AlgoAqui" className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center '>
                    item 1
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out mx-4">
                  <Link to="/servicos/AlgoAqui" className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center '>
                    item 1
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out mx-4">
                  <Link to="/servicos/AlgoAqui" className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center '>
                    item 1
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out mx-4">
                  <Link to="/servicos/AlgoAqui" className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center '>
                    item 1
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out mx-4">
                  <Link to="/servicos/AlgoAqui" className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center '>
                    item 1
                  </Link>
                </li>
              </ul>




            </div>



            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default Header