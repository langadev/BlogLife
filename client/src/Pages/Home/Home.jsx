import Navbar from '../../components/Navbar/Navbar';
import Mobile from '../../components/Navbar/Mobile/Mobile';
import Posts from '../../components/Posts/Posts';
import loginFecth from '../../assets/config';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const getPosts = async () => {
    try {
      const response = await loginFecth.get('/post/index');
      const data = response.data;
      console.log(data);

      
      const storage = getStorage();
      const postsWithImages = await Promise.all(
        data.map(async (post) => {
          try {
            const imageRef = ref(storage, post.image); 
            const imageUrl = await getDownloadURL(imageRef);
            return { ...post, imageUrl };
          } catch (error) {
            console.error('Erro ao obter a imagem do Firebase:', error);
            return { ...post, imageUrl: null };
          }
        })
      );

      setPosts(postsWithImages);
    } catch (e) {
      console.error('Erro ao buscar usuários:', e);
      setError('Erro ao buscar usuários. Por favor, tente novamente mais tarde.');
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='home-container'>
      <div>
       <Navbar/>
      </div>
      <div><Mobile/></div>

      <div className="posts">
        {error && <div className="error-message">{error}</div>}
        {posts.map((item) => (
          <Posts
            key={item.id}
            id={item.id}
            title={item.title}
            text={item.content}
            image={item.imageUrl} 
            date={item.createdAt}
            user={item.User.name}
          />
        ))}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
