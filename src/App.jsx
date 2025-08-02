import React from 'react'
import BookReview from './components/BookReview'

const books = [
	{
		title: 'All Systems Red',
		author: 'Martha Wells',
		series: 'The Murderbot Diaries #1',
		cover:
			'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631585309i/32758901.jpg',
		startDate: '5 Feb 2023',
		finishDate: '7 Feb 2023',
		format: 'Hardcover',
		genre: 'Science Fiction, Novella, Adult, Space, Robots',
		quotes: [
			'As a heartless killing machine, I was a terrible failure.',
			"I hate having emotions about reality; I'd much rather have them about Sanctuary Moon.",
		],
		favouriteCharacter: 'Murderbot',
		leastFavouriteCharacter: 'Dr. Mensah',
		overallRating: 4,
	},
	{
		title: 'Project Hail Mary',
		author: 'Andy Weir',
		series: '',
		cover: 'https://images-na.ssl-images-amazon.com/images/I/91w5Zc8bIPL.jpg',
		startDate: '10 Mar 2024',
		finishDate: '15 Mar 2024',
		format: 'Paperback',
		genre: 'Science Fiction, Space, Adventure',
		quotes: [
			'Human beings have a remarkable ability to accept the abnormal and make it normal.',
			'If you can’t solve a problem, sleep on it.',
		],
		favouriteCharacter: 'Rocky',
		leastFavouriteCharacter: 'Stratt',
		overallRating: 5,
	},
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		series: '',
		cover: 'https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg',
		startDate: '1 Jan 2022',
		finishDate: '10 Jan 2022',
		format: 'eBook',
		genre: 'Fantasy, Adventure, Classic',
		quotes: [
			'So comes snow after fire, and even dragons have their endings.',
			'There is nothing like looking, if you want to find something.',
		],
		favouriteCharacter: 'Bilbo Baggins',
		leastFavouriteCharacter: 'Smaug',
		overallRating: 5,
	},
]

const App = () => {
	return (
		<div>
			{books.map((book, idx) => (
				<BookReview key={idx} {...book} />
			))}
		</div>
	)
}

export default App
