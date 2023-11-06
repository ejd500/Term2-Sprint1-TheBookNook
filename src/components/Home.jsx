import Header from "./Header"
import Welcome from "./Welcome"
import Section2 from "./Section2"
import Footer from "./Footer"



const Home = ({onPurchase}) => {
  return (
    <div>
        <Header/>
        <Welcome/>
        <Section2 onPurchase={onPurchase}/>
        <Footer/>
    </div>
  )
}

export default Home