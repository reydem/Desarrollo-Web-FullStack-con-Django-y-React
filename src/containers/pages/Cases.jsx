import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Header from "components/cases/Header"
import CasesList from "components/cases/CasesList"
import { useEffect } from "react"

function Cases(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div data-scroll-section className="pt-28">
            <Header/>
            <CasesList/>
            </div>
            <Footer/>
        </Layout>
    )
} 
export default Cases
