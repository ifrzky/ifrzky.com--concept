import Link from "next/link"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

let ArticleSa = () => {
    return (
<div className="content-wrapper  bg-cover">
    <Navbar />
    <div className="blur-bg ">
        <div className="blur-bg__overlay background: rgb(0, 0, 0) none repeat scroll 0% 0%;"></div>
        <div className="bg bg-[url('/images/sa.png')]"></div>
    </div>
    <div className="main">
        <div className="container">
            <p>p</p>
            <p>p</p>
            <p>p</p>
            <p>p</p>
            <p>p</p>
            <p>p</p>
            <p>p</p>
            <p>p</p>
            <p>p</p>
        </div>
    </div>    
    <Footer />
</div>
    
    );
} 

export default ArticleSa;
     

