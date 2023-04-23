import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Header from "components/services/Header"
import ServicesList from "components/services/ServicesList"

function Services(){
    return(
        <Layout>
            <Navbar/>
            <div data-scroll-section className="pt-28">
            <Header/>
            <ServicesList section_title={'Software and Product Development'}/>
            </div>
            <Footer/>
        </Layout>
    )
} 
export default Services
