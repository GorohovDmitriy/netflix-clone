import React from 'react'
import './App.css'
import Row from './components/Row/Row'
import requests from './requests'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Banner />
			<Row isLargeRow={true}
				title='ORIGINAL NEFLIX'
				fetchUrl={requests.fetchNetflixOriginals}
			/>
			<Row title='Actions Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
			<Row title='Upcoming' fetchUrl={requests.fetchTopUpcoming} />
			<Row title='Now Playing' fetchUrl={requests.fetchTopNowPlaying} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
		</div>
	)
}

export default App
