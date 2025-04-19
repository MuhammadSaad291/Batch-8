
import './App.css';
import PostList from './component/postList/PostList';
import Navbar from './component/navbar/Navbar';
import SidebarLeft from './component/sidebarLeft/SidebarLeft';
import SearchBox from './component/searchBox/SearchBox';
import Post from './component/post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPost } from './store/slices/postSlice';
function App() {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
    <Navbar/>
    <div className='flex justify-between'>
    <SidebarLeft/>
    <div className='w-[40%]'><SearchBox/>
    {
      post.map((item)=>(
        <div key={item.id}>
        <Post  item={item}/>
        </div>
      ))
    }
    </div>
    <SidebarLeft/>
    </div>
    {/* <PostList/> */}
    </>
  );
}

export default App;
