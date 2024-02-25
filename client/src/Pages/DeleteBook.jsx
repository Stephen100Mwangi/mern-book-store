import React, { useState } from 'react'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(() =>{
      setLoading(false);
      alert("Book deleted successfully");
      navigate('/');
    }).catch((error) => {
      alert("An error occured while deleting the book")
      console.log(error);
    })

  }

  const handleBack = () => {
    navigate('/');
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1>Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 p-8 items-center mx-auto border-e-sky-400 space-y-5">
        <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
        <button className="bg-red-600 text-bold text-white p-4 min-w-[200px] shadow-xl hover:rounded-full px-10" onClick={handleDelete}>Yes Delete It</button>
        <button className="bg-green-600 text-bold text-white p-4 min-w-[200px] shadow-xl hover:rounded-full px-10" onClick={handleBack}>Not Yet</button>
      </div>
      
    </div>
  )
}

export default DeleteBook
