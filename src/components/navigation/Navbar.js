import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo_oo from 'assets/img/oo.png'
import logo_boomslag from 'assets/img/boomslag-black.png'
import loading_dots from 'assets/img/loading-dots.gif'
function Navbar() {
    return (
        <nav className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className="bg-white px-4 sm:px-6">
                <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="ml-4 mt-2">
                        <img
                            src={logo_boomslag}
                            width={160}
                            height={160}
                            className=""
                        />
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <div className="ml-4 mt-2 flex-shrink-0">
                            <Link to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Casos</Link>
                            <Link to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Servicios</Link>
                            <Link to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Nosotros</Link>
                            <Link to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Carreras</Link>
                            <Link to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Blog</Link>
                            <Link to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Contacto</Link>

                        </div>
                        <Link
                            to="/contacto"
                            className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                            Hire Us
                            <img className='w-7 h-2 mt-1 ml-2' src={loading_dots}size={20} color="#f2f2f2" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Navbar)

