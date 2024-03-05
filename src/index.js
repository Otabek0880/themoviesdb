import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/home/home.page';
import App from './App';
import MoviePage from './pages/movies/movie.page.jsx';
import PeoplePage from './pages/people/people.page.jsx';
import PeopleSinglePage from './pages/peopleSinglePage/peopleSinglePage.jsx';
import NowPlayingPage from './pages/movies/nowPlaying/nowPlaying.page.jsx';
import UpcomingPage from './pages/movies/upcoming/upcoming.page.jsx';
import TopRatedPage from './pages/movies/toprated/toprate.page.jsx';
import TVpage from './pages/tvshows/tv.page.jsx';
import AiringTodayPage from './pages/tvshows/AiringToday/AiringToday.jsx';
import OnTVPage from './pages/tvshows/onTV/onTV.page.jsx';
import MovieSinglePage from './pages/movies/singleMoviePage/singleMovie.page.jsx';
import TvSinglePage from './pages/tvshows/singleTvPage/singleTv.page.jsx';
import SearchPage from './pages/search/search.page.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<App/>}>
     <Route path='/' element={<HomePage/>} />
        <Route path='/movie' element={<MoviePage />} />
        <Route path='/movie/now_playing' element={<NowPlayingPage />} />
        <Route path='/movie/upcoming' element={<UpcomingPage />} />
        <Route path='/movie/top_rated' element={<TopRatedPage />} />
        <Route path='/movie/:id' element={ <MovieSinglePage/>} />
        <Route path='/tv' element={<TVpage />} />
        <Route path='/tv/airing_today' element={<AiringTodayPage />} />
        <Route path='/tv/on-the-air' element={<OnTVPage />} />
        <Route path='/tv/:id' element={ <TvSinglePage/>} />
        <Route path='/tv/top-rated' element={<TopRatedPage/> } />
        <Route path='/person' element={<PeoplePage />} />
        <Route path='/person/:id' element={<PeopleSinglePage />} />
        <Route path='/search' element={<SearchPage/>} />
       <Route path='*' element={<h1>Bunday sahifa topilmadi</h1>} />
     </Route>
   </Routes>
 </BrowserRouter>
);


