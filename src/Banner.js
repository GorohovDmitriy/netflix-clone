import React from 'react'
import './Banner.css'
import axios from './axios'
import requests from './requests'

function Banner() {
	const [movie, setMovie] = React.useState([])

	React.useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(requests.fetchNetflixOriginals)
			setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)])
			return requests
		}
		fetchData()
	}, [])
	console.log(movie)

	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: `url('http://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
				backgroundPosition: 'center center',
			}}
		>
			<div className='banner__contents'>
				{/* title */}
				<h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List</button>
				</div>
				<h1 className='banner__description'>{movie?.overview}</h1>
				{/* div -> 2 button */}
				{/* description */}
			</div>
		</header>
	)
}

export default Banner
