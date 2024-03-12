import React from 'react' 
import Project from './Project' 
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.jpg"
import img5 from "../img/img5.jpg"
import img6 from "../img/img6.jpg"
import img7 from "../img/img7.jpg"
import img8 from "../img/img8.jpg"
import img9 from "../img/img9.png"
import img10 from "../img/img10.png"
import img11 from "../img/img11.jpg"
import img12 from "../img/img12.png"
import img13 from "../img/img13.jpg"

function Projects() { 

    const cardsData = [
        { id: 1, name: 'Dan Cederholm', likecnt: 30, imgUrl: img2},
        { id: 2, name: 'Folio', likecnt: 72, imgUrl: img3},
        { id: 3, name: 'Lisa Champ', likecnt: 84, imgUrl: img4},
        { id: 4, name: 'Ben Didier', likecnt: 76, imgUrl: img5},
        { id: 5, name: 'Mary Maka', likecnt: 56, imgUrl: img6},
        { id: 6, name: 'Sebastian Abboud', likecnt: 98, imgUrl: img7},
        { id: 7, name: 'Andrew Colin Beck', likecnt: 78, imgUrl: img8},
        { id: 8, name: 'Adam Johnson', likecnt: 57, imgUrl: img9},
        { id: 9, name: 'VAGO', likecnt: 23, imgUrl: img10},
        { id: 10, name: 'Kirk! Wallace', likecnt: 43, imgUrl: img11},
        { id: 11, name: 'Ilya Boyko', likecnt: 29, imgUrl: img12},
        { id: 12, name: 'Angie Mathot', likecnt: 50, imgUrl: img13},
      ];
    return ( 


    <div className='flex flex-wrap max-w-7xl justify-evenly mt-10'> 
       
       {cardsData.map((card) => (
          <Project key={card.id} name={card.name} likecnt={card.likecnt} imgUrl={card.imgUrl} />
        ))}
    </div>

    ) 
} 

export default Projects