import Banner from "../components/Banner";
import BookList from "../components/book/BookList";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Faq from "./Faq";

export default function Homepage() {
  return (
    <div>
    <Header />
    <Banner />
    <BookList />
    <Faq />
    <Footer />
    </div>
  )
}
