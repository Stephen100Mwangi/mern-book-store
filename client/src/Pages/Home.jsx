import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../Components/Spinner'
import axios from 'axios'
import { MdOutlineAddBox } from 'react-icons/md'
import { FaCircleInfo } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import './styles.css'

const Home = () => {

    // Books
    const [books,setBooks] = useState([]);
    const [isLoading,setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);

        // Fetch books
        axios.get('http://localhost:5555/books').then((response)=>{
            setBooks(response.data.data)
            setLoading(false);
        }).catch((error) =>{
            console.log(error);
            setLoading(false);
        })
    },[])
    // const time = new Date();
  return (
    <div className='homepage'>
        <div className="imagecontainer">
            <img src="images/book.jpg" alt="" />
        </div>
        <div className="flex justify-between items-center z-50 shadow-2xl">
            <h1 className="text-3xl my-8 text-red-500">
                Book List
            </h1>
            <Link to="/books/create"><MdOutlineAddBox className="text-blue-800 text-4xl mx-4"/></Link>
        </div>
        {
            isLoading? (<Spinner />):(<table className='w-[90%] p-6 rounded-xl mx-10 border-separate border-spacing-2 shadow-2xl my-4'>
                <thead>
                    <tr>
                        <th className='border rounded-md border-slate-600'>No</th>
                        <th className='border rounded-md border-slate-600'>Title</th>
                        <th className='border rounded-md border-slate-600'>Author</th>
                        <th className='border rounded-md border-slate-600 max-md:hidden'>Year Published</th>
                        <th className='border rounded-md border-slate-600 max-md:hidden'>Pages</th>
                        <th className='border rounded-md border-slate-600'>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => (
                            <tr className='h-8' key={book._id}>
                                <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
                                <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
                                <td className="border border-slate-700 rounded-md text-center">{book.author}</td>
                                <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.publishYear}</td>
                                <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.pages}</td>
                                <td className="border border-slate-700 rounded-md text-center">
                                    <div className="flex justify-center gap-x-4">
                                        <Link to={`/books/show/${book._id}`}><FaCircleInfo className='text-2xl text-green-500'/></Link>
                                        <Link to={`/books/update/${book._id}`}><FaRegEdit className='text-2xl text-yellow-500'/></Link>
                                        <Link to={`/books/delete/${book._id}`}><MdAutoDelete className='text-2xl text-red-600'/></Link>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>)
        }
    </div>
  )
}

export default Home
