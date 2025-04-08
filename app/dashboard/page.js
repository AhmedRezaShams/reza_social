


import CreatePost from '../components/CreatePost';
import FetchPost from '../services/api/fetchPost';

export default async function DashboardPage() {
 
  return (
    <div className=''>
      <CreatePost/>
      <FetchPost />
     
    </div>


  )
}
