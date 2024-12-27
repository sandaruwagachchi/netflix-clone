import { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(); // Move this inside the functional component
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGU3N2EyYWQzMDVkOGQyYTZkZTU4ZDAzMWRlMWMxNSIsIm5iZiI6MTczNTI3OTI0OS4xMjIsInN1YiI6IjY3NmU0MjkxZjk0NTRlZWIxZDkyOTg0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Owrgg4i_uBnAZq4F1oTYhAi4uesyRU4afg8U59tNyZU'
    }
  };
  
 

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])
  return (
    <div className="title-cards">
      <h2>{title ? title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={'https://image.tmdb.org/t/p/w500'+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
