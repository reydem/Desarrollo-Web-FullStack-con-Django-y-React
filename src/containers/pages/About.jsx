import Header from "components/about/Header"
import TestStats from "components/about/TestStats"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function About(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div data-scroll-section className="pt-28">
            <Header/>
            <TestStats/>
            </div>
            <Footer/>
        </Layout>
    )
} 
export default About
