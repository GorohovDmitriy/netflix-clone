import React from 'react'
import './Banner.css'
import axios from '../../axios'
import requests from '../../requests'

function Banner() {
	const [movie, setMovie] = React.useState([])

	// Функция которая получает один рандомный фильм из базы данных
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
				<img className='banner__logo' src="/images/N.png" alt="Netflix" />
				<h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>Trailer</button>
				</div>
				<div className="banner__year">
					<p className='banner__date'>{movie?.first_air_date}</p>
					<p className='banner__vote'>{movie?.vote_average}</p>
				</div>
				<h1 className='banner__description'>{movie?.overview}</h1>
				<div className="social__block">
					<p className="social__plus">+</p>
					<div className='social__up'>
						<img src="/images/Vector.svg" alt="Lick" />
					</div>
					<div className='social__down'>
						<img src="images/Vector-down.svg" alt="deaseLick" />
					</div>
					<p className='social__i'>i</p>
					<div className='social__red'></div>
					<div className='social__rating'><p>16 +</p></div>
				</div>
			</div>

			<div className="banner__fadeButtom"></div>
		</header>
	)
}

export default Banner
