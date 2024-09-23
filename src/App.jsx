
import './App.css'
import Banner from './components/Banner'
import BookList from './components/book/BookList'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import Faq from './pages/Faq'
import Homepage from './pages/Homepage'

function App() {
  return (
    <>
    {/* <Homepage /> */}
    <Header />
    <Banner />
    <BookList />
    <Faq />
    <Footer />
    </>
  )
}

export default App
