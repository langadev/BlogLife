import { Link } from 'react-router-dom';
import './Posts.css';
import profile from '/images/20201106_225150.jpg';

function Posts({ id, title, date, image, text, user }) {
 
  const limitWords = (str, num) => {
    const words = str.split(' ');
    return words.slice(0, num).join(' ') + (words.length > num ? '...' : '');
  };
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-br', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  return (
    <div className="post-container  px-4 md:px-10 lg:px-20">
      <div className="post flex flex-col lg:flex-row " key={id}>
        <div className="px-1 py-5 postImage w-full  lg:w-[300px] mb-4 lg:mb-0">
          <img src={image} alt={image} className='h-[200px] w-full lg:w-[300px] object-cover' />
        </div>
        <div className=" flex-1 ">
          <div className="title px-4 lg:px-8">
            <Link to={`/posts/${id}`}>
              <h1 className="text-[1.25rem] lg:text-[1.5rem] font-bold text-left">
                {limitWords(title, 10)} 
              </h1>
            </Link>
          </div>
          <div className="desc px-4 lg:px-8">
            <p className="text-[1rem]">{limitWords(text, 30)}</p> 
          </div>
          <div className="user px-4 lg:px-8 flex gap-x-2 mt-2 items-center">
            <img className="w-8 lg:w-10 rounded-full" src={profile} alt="User" /> 
            <p className='text-[0.85rem] lg:text-[0.9rem] font-bold'>{user},</p>
            <p className='text-[0.85rem] lg:text-[0.9rem]'>{formatDate(date)}</p>
          </div>
          <div className="tags mt-2 flex px-4 lg:px-8 gap-x-2 items-center">
            <div className="tag flex items-center justify-center text-white bg-violet-600 w-auto rounded-md px-4 py-1">
              <span className="text-[0.85rem] lg:text-[0.9rem] cursor-pointer">reactjs</span>
            </div>
            <div className="tag flex items-center justify-center text-white bg-slate-600 w-auto rounded-md px-4 py-1">
              <span className="text-[0.85rem] lg:text-[0.9rem] cursor-pointer">nodejs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
