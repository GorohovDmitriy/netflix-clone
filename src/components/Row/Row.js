import React from 'react'
import YouTube from 'react-youtube'
import axios from '../../axios'
import './Row.css'
import movieTrailer from 'movie-trailer'

const base_url = 'http://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = React.useState([])
	const [trailerUrl, setTrailerUrl] = React.useState('')


	// Функция которая получает данные о всех фильмах, как только монтируеться компонент
	React.useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl)
			setMovies(request.data.results)
			return request
		}
		fetchData()
	}, [fetchUrl])

	// Опции Видео трейлеров
	const opts = {
		height: '390',
		width: '1400px',
		playerVars: {
			autoplay: 1,
		}
	}

	// Функция которая по клику даёт трейлер их Ютюба
	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl('')
		} else {
			movieTrailer(movie?.title || movie?.name || movie?.original_name || '').then(url => {
				const urlParams = new URLSearchParams(new URL(url).search)
				setTrailerUrl(urlParams.get('v'))
			}).catch(e => console.log(e))
		}
	}

	return (
		<div className='row'>
			<h2>{title}</h2>
			<div className='row__posters'>
				{movies &&
					movies.map((movie, index) => (
						<>
							<img
								onClick={() => handleClick(movie)}
								className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
								key={`${movie.name}__${index}`}
								src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
								alt={movie.name}
							/>
							{/* <p>{movie?.title || movie?.name || movie?.original_name}</p> */}
						</>
					))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	)
}

export default Row
