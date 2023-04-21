import {connect} from 'react-redux'
function Navbar(){
    return(
        <nav className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>
            Navbar
        </nav>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar)

