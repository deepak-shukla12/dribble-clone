import {React,useState} from 'react' 
import { EyeIcon, HeartIcon } from "@heroicons/react/solid";

function Project({ id, name, likecnt, imgUrl }) { 

   const [isLiked, setIsLiked] = useState(false);
   const [likeCount, setLikeCount] = useState(likecnt);
   const handleLikeClick = () => {
      setIsLiked(!isLiked);
      setLikeCount((prevCount) => prevCount + (isLiked ? -1 : 1));
    };

    return ( 
       <div className='w-[340px] h-[270px] rounded-xl mb-5'> 
          <img className='rounded-xl' src={imgUrl} alt="" /> 
          <div className='flex justify-between p-2'> 
             <div className='flex items-center'> 
               <h3 className='font-bold text-black text-[15px]'>{name}</h3> 
               <h3 className='bg-gray-300 text-white p-[2px] text-xs font-bold rounded-md ml-2'>TEAM</h3> 
             </div> 
             <div className='flex space-x-2'> 
                <div className='flex items-center'>
                <button
                     onClick={handleLikeClick}
                     className={`focus:outline-none ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
                     >
                     <HeartIcon className='h-3 w-3' />
                </button>
                  <h2 className='text-sm'>{likeCount}</h2>
                </div> 
                <div className='flex items-center'>
                    <EyeIcon className='h-3 w-3 text-gray-500'/>
                    <h2 className='text-sm'>30.2k</h2>
                </div>
             </div> 
          </div> 
       </div> 
    );
} 
    
export default Project