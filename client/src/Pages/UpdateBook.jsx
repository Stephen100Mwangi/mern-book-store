import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';

const UpdateBook = () => {

    // UseStates
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear,setPublish] = useState('');
    const [pages, setPages] = useState(0);
    const [loading,setLoading] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      setLoading(true);

      // Fetch book
      axios.get(`http://localhost:5555/books/${id}`).then((response) => {
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setPublish(response.data.publishYear);
        setPages(response.data.pages);

        setLoading(false);
    
      }).catch((error) =>{
        setLoading(false);
        console.log(error);
        alert("Could not fetch book.An error occured")
      })
    },[]);
    
    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear,
            pages,
        };

        setLoading(true);
        axios.put(`http://localhost:5555/books/${id}`,data)
        .then(() => {
            setLoading(false);
            alert("Book successfully updated");
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
        <h1 className="text-3xl my-4">Edit Book</h1>
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

                <button className='p-2 px-3 my-8 mx-auto bg-sky-300 w-fit hover:rounded-full' onClick={handleEditBook}>Upadate Book</button>
            </div>
        </div>
      
    </div>
  )
}

export default UpdateBook

