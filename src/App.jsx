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
		cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Project_Hail_Mary%2C_First_Edition_Cover_%282021%29.jpg/250px-Project_Hail_Mary%2C_First_Edition_Cover_%282021%29.jpg',
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
	},{
	title: '1984',
	author: 'George Orwell',
	series: '',
	cover: 'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg',
	startDate: '5 Feb 2022',
	finishDate: '15 Feb 2022',
	format: 'Paperback',
	genre: 'Dystopian, Political Fiction, Classic',
	quotes: [
		'Big Brother is Watching You.',
		'War is peace. Freedom is slavery. Ignorance is strength.',
	],
	favouriteCharacter: 'Winston Smith',
	leastFavouriteCharacter: 'O\'Brien',
	overallRating: 4,
},
{
	title: 'To Kill a Mockingbird',
	author: 'Harper Lee',
	series: '',
	cover: 'https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg',
	startDate: '20 Mar 2022',
	finishDate: '30 Mar 2022',
	format: 'Hardcover',
	genre: 'Classic, Historical, Coming-of-age',
	quotes: [
		'You never really understand a person until you consider things from his point of view.',
		'The one thing that doesn’t abide by majority rule is a person’s conscience.',
	],
	favouriteCharacter: 'Atticus Finch',
	leastFavouriteCharacter: 'Bob Ewell',
	overallRating: 5,
},
{
	title: 'The Catcher in the Rye',
	author: 'J.D. Salinger',
	series: '',
	cover: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg',
	startDate: '1 Apr 2022',
	finishDate: '7 Apr 2022',
	format: 'eBook',
	genre: 'Classic, Young Adult, Literary Fiction',
	quotes: [
		'Don’t ever tell anybody anything. If you do, you start missing everybody.',
		'People never notice anything.',
	],
	favouriteCharacter: 'Holden Caulfield',
	leastFavouriteCharacter: 'Stradlater',
	overallRating: 3,
},
{
	title: 'Pride and Prejudice',
	author: 'Jane Austen',
	series: '',
	cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVFywj2lHkJEKWK7m8BhjSG_0WZgAGmdRTg&s',
	startDate: '10 May 2022',
	finishDate: '25 May 2022',
	format: 'Paperback',
	genre: 'Romance, Classic, Historical Fiction',
	quotes: [
		'I could easily forgive his pride if he had not mortified mine.',
		'You must allow me to tell you how ardently I admire and love you.',
	],
	favouriteCharacter: 'Elizabeth Bennet',
	leastFavouriteCharacter: 'Mr. Collins',
	overallRating: 4,
},
{
	title: 'The Alchemist',
	author: 'Paulo Coelho',
	series: '',
	cover: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
	startDate: '1 Jun 2022',
	finishDate: '5 Jun 2022',
	format: 'eBook',
	genre: 'Fiction, Philosophy, Self-help',
	quotes: [
		'And, when you want something, all the universe conspires in helping you to achieve it.',
		'It’s the possibility of having a dream come true that makes life interesting.',
	],
	favouriteCharacter: 'Santiago',
	leastFavouriteCharacter: 'The Crystal Merchant',
	overallRating: 4,
}
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
