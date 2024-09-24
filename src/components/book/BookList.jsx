import { useEffect } from "react";
import { useState } from "react"
import SingleBook from "./SingleBook";



export default function BookList() {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('book.json')
        .then(response => response.json())
        .then(data => setBooks(data));
    },[])
  return (
    <div className="w-4/5 mx-auto mt-5 rounded-md py-5">
        <h3 className="mt-5 text-2xl font-bold text-center text-red-800">Find Your Best Stories Here</h3>
        <div className="mt-10 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {books.map((book)=>(
                <SingleBook book = {book} />
            ))}
        </div>
    </div>
  )
}
