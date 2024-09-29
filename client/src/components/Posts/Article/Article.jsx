import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import { ThemeContext } from '../../../context/ThemeContext';
import './Article.css';
import Footer from '../../Footer/Footer';
import loginFecth from '../../../assets/config'; 

export default function Article() {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await loginFecth.get(`/post/show${id}`); 
        const data = response.data;
       
        console.log(data); 
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-br', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Navbar />
      <div className="article flex flex-col px-4 md:px-10 lg:px-20 py-10 gap-y-6">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <div className="error-message text-center">
            <p className="text-red-500">Error: {error}</p>
            <button 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" 
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        ) : post ? (
          <>
            <h1 className='text-[1.75rem] lg:text-[2rem] font-bold text-justify'>{post.title}</h1>
            <img 
              className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded' 
              src={post.image} 
              alt="Post" 
            />
            <div className="details flex flex-col gap-y-2">
              <span className='font-bold text-lg'>{post.User.name || 'Author'}</span>
              <p className='text-md text-gray-600'>{formatDate(post.createdAt) || 'Date'}</p>
            </div>
            <div className="content mt-4">
              <p className='text-[1.1rem] md:text-[1.2rem] text-justify'>
                {post.content}
              </p>
            </div>
          </>
        ) : (
          <p>No post found</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
