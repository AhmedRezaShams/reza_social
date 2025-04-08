

import CustomButton from '../components/Button';
import CreatePost from '../components/CreatePost';
import FetchPost from '../services/api/fetchPost';


export default async function DashboardPage() {
  const buttonName = "Create Post"
  return (
    <div className=''>
       <CustomButton children={buttonName} />
      <FetchPost />
     
    </div>


  )
}
