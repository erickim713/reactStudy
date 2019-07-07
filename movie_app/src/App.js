import React from 'react';
import './App.css';
import Movie from './Movie';

// const movies = [
//     'Tate no Yuusha no Nariagari',
//     'Overlord'
// ];


// const moviePostersLinks = [
//     'https://cdn.myanimelist.net/images/anime/1490/101365.jpg',
//     'https://i.ytimg.com/vi/uhlBqFj9kDw/maxresdefault.jpg',
// ];

// another way of  doing the same thing but fewer code

const movisses = [
   {
       title: 'Tate no Yuusha no Nariagarie',
       link: 'https://cdn.myanimelist.net/images/anime/1490/101365.jpg',
   },
   {
       title: 'Overlord',
       link: 'https://i.ytimg.com/vi/uhlBqFj9kDw/maxresdefault.jpg',
   },
]


function App() {
  return (
    <div className="App">
        {movisses.map(
            (currentMovie) => {
                return <Movie title={currentMovie.title} link={currentMovie.link}/>
                }
            )
        }
    </div>
  );
}

export default App;
