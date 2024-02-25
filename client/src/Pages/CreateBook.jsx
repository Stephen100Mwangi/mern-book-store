import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';

const CreateBook = () => {

    // UseStates
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear,setPublish] = useState('');
    const [pages, setPages] = useState(0);
    // const time = new Date();
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = () => {
        const data = {
            title,
            author,
            publishYear,
            pages
        }

        setLoading(true);
        axios.post("http://localhost:5555/books", data)
        .then(() => {
            setLoading(false);
            alert("Book succees fully added");
            navigate('/');
        }).catch((error) =>{
            setLoading(false);
            console.log(error);
            alert("An error occurred")
        })
    }
  return (
    <div className='p-4'>
        <BackButton />
        <h1 className="text-3xl my-4">Create Book</h1>
        {loading ? <Spinner /> :''}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl mx-auto p-4 w-[600px]">
            <div className="my-4">
                <label htmlFor="title" className="text-xl mr-4 text-gray-500">Title</label>
                <input type="text" className="border-2 border-gray-500 px-4 py-2 w-full" value={title} onChange={(e)=>setTitle(e.target.value)}/>

                <label htmlFor="author" className="text-xl mr-4 text-gray-500">Author</label>
                <input type="text" className="border-2 border-gray-500 px-4 py-2 w-full" value={author} onChange={(e)=>setAuthor(e.target.value)}/>

                <label htmlFor="yearpublished" className="text-xl mr-4 text-gray-500">Year Published</label>
                <input type="text" className="border-2 border-gray-500 px-4 py-2 w-full" value={publishYear} onChange={(e)=>setPublish(e.target.value)}/>

                <label htmlFor="pages" className="text-xl mr-4 text-gray-500">Pages</label>
                <input type="text" className="border-2 border-gray-500 px-4 py-2 w-full" value={pages} onChange={(e)=>setPages(e.target.value)}/>

                <button className='p-2 my-8 mx-auto bg-sky-300 w-fit' onClick={handleSubmit}>Create Book</button>
            </div>
        </div>
      
    </div>
  )
}

export default CreateBook
