import React, { useState } from 'react';

function Menu() {
  const [selected, setSelected] = useState('Popularity'); 

  const handleOptionChange = (event) => {
    setSelected(event.target.value);
  };

    return (
    <div className='flex items-center text-[15px] justify-evenly max-w-7xl mt-8 text-gray-600'>

        <div className="relative">
        <select
          className="border border-gray-400 rounded-md h-8 w-28 px-2"
          value={selected}
          onChange={handleOptionChange}
        >
          <option value="Popularity">Popularity</option>
          <option value="New">New</option>
          <option value="NetWorthy">Net Worthy</option>
        </select>
        
      </div>


        <div className='w-[800px]'>
          <ul className='flex justify-between'>
            <li className='hover:text-black cursor-pointer'>All</li> 
            <li className='hover:text-black cursor-pointer'>Animation</li> 
            <li className='hover:text-black cursor-pointer'>Branding</li> 
            <li className='hover:text-black cursor-pointer'>Illustration</li> 
            <li className='hover:text-black cursor-pointer'>Mobile</li> 
            <li className='hover:text-black cursor-pointer'>Print</li> 
            <li className='hover:text-black cursor-pointer'>Product Design</li> 
            <li className='hover:text-black cursor-pointer'>Typography</li> 
            <li className='hover:text-black cursor-pointer'>Web Design</li> 
          </ul> 
        </div>
        <button className='border border-gray-400 rounded-md h-8 w-24'>Filters</button>
    </div>

    ) 
}


export default Menu