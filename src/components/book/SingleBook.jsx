import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";


export default function SingleBook({book}) {

  return (
    <Link>
    <section className="gap-4 bg-gray-300 rounded-md shadow-md p-4 ">
    <div className="p-4">
      <img className="rounded-md max-h-40" src={book?.image} alt="" />
    </div>
    <div className="ml-5 text-sm font-semibold space-y-1 mt-2">
      <p>Book Name: {book?.bookName}</p>
      <p>Author: {book?.author}</p>
      <p>Category: {book?.category}</p>
      <p>Rating: {book?.rating}</p>
    </div>
    <button type="button" className="btn mt-2 ml-5 bg-red-800 text-white hover:text-black">Book Details</button>
    </section>
    </Link>

  )
}
