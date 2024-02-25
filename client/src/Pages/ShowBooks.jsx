import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from '../Components/Spinner'
import BackButton from '../Components/BackButton'

const ShowBooks = () => {

    const [book,setBook] = useState({});
    const [isLoading,setLoading] = useState(false);
    const { id } = useParams();

    

    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
        .then((response) =>{
            setBook(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
  return (
    <div className='m-6'>
      <BackButton />
      <h1 className="my-4 text-3xl">Show Book</h1>
      {isLoading ? (
        <Spinner />
      ):(
        <div className="flex flex-col border-2 border-sky-400 w-fit p-4">
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Id</span>
                <span>{book._id}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Title</span>
                <span>{book.title}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Author</span>
                <span>{book.author}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Publish Year</span>
                <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Create Time</span>
                <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
                <span>{new Date(book.updatedAt).toString()}</span>
            </div>
            <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Pages</span>
                <span>{book.pages}</span>
            </div>

        </div>
      )}

    </div>
  )
}

export default ShowBooks
