import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo_oo from 'assets/img/oo.png'
function Navbar() {
    return (
        <nav className='w-full py-10 shadow-md fixed'>
            <div className="bg-white px-4 sm:px-6">
                <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="ml-4 mt-2">
                        <img
                            src={logo_oo}
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
                        <button
                            type="button"
                            className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                            Create new job
                        </button>
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

