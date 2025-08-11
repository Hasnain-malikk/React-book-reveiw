import React from 'react'
import BookReview from './components/BookReview'
import Chatbot from './components/Chatbot'
import ParentsInsights from './components/ParentsInsights'

const books = [
	{
		title: 'The Devil Wears Prada',
		author: 'Lauren Weisberger',
		series: '',
		cover: 'data:image/jpeg;base64,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',
		startDate: 'February 4, 2003',
		finishDate: '15 Mar 2024',
		format: 'Paperback',
		genre: 'Fiction, Chick lit, Humor, Roman à clef',
		quotes: [
			'Human beings have a remarkable ability to accept the abnormal and make it normal.',
			'If you can’t solve a problem, sleep on it.',
		],
		favouriteCharacter: 'Rocky',
		leastFavouriteCharacter: 'Stratt',
		overallRating: 5,
	}
// 	{
// 		title: 'All Systems Red',
// 		author: 'Martha Wells',
// 		series: 'The Murderbot Diaries #1',
// 		cover:
// 			'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631585309i/32758901.jpg',
// 		startDate: '5 Feb 2023',
// 		finishDate: '7 Feb 2023',
// 		format: 'Hardcover',
// 		genre: 'Science Fiction, Novella, Adult, Space, Robots',
// 		quotes: [
// 			'As a heartless killing machine, I was a terrible failure.',
// 			"I hate having emotions about reality; I'd much rather have them about Sanctuary Moon.",
// 		],
// 		favouriteCharacter: 'Murderbot',
// 		leastFavouriteCharacter: 'Dr. Mensah',
// 		overallRating: 4,
// 	},
// 	{
// 		title: 'The Hobbit',
// 		author: 'J.R.R. Tolkien',
// 		series: '',
// 		cover: 'https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg',
// 		startDate: '1 Jan 2022',
// 		finishDate: '10 Jan 2022',
// 		format: 'eBook',
// 		genre: 'Fantasy, Adventure, Classic',
// 		quotes: [
// 			'So comes snow after fire, and even dragons have their endings.',
// 			'There is nothing like looking, if you want to find something.',
// 		],
// 		favouriteCharacter: 'Bilbo Baggins',
// 		leastFavouriteCharacter: 'Smaug',
// 		overallRating: 5,
// 	},{
// 	title: '1984',
// 	author: 'George Orwell',
// 	series: '',
// 	cover: 'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg',
// 	startDate: '5 Feb 2022',
// 	finishDate: '15 Feb 2022',
// 	format: 'Paperback',
// 	genre: 'Dystopian, Political Fiction, Classic',
// 	quotes: [
// 		'Big Brother is Watching You.',
// 		'War is peace. Freedom is slavery. Ignorance is strength.',
// 	],
// 	favouriteCharacter: 'Winston Smith',
// 	leastFavouriteCharacter: 'O\'Brien',
// 	overallRating: 4,
// },
// {
// 	title: 'To Kill a Mockingbird',
// 	author: 'Harper Lee',
// 	series: '',
// 	cover: 'https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg',
// 	startDate: '20 Mar 2022',
// 	finishDate: '30 Mar 2022',
// 	format: 'Hardcover',
// 	genre: 'Classic, Historical, Coming-of-age',
// 	quotes: [
// 		'You never really understand a person until you consider things from his point of view.',
// 		'The one thing that doesn’t abide by majority rule is a person’s conscience.',
// 	],
// 	favouriteCharacter: 'Atticus Finch',
// 	leastFavouriteCharacter: 'Bob Ewell',
// 	overallRating: 5,
// },
// {
// 	title: 'The Catcher in the Rye',
// 	author: 'J.D. Salinger',
// 	series: '',
// 	cover: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg',
// 	startDate: '1 Apr 2022',
// 	finishDate: '7 Apr 2022',
// 	format: 'eBook',
// 	genre: 'Classic, Young Adult, Literary Fiction',
// 	quotes: [
// 		'Don’t ever tell anybody anything. If you do, you start missing everybody.',
// 		'People never notice anything.',
// 	],
// 	favouriteCharacter: 'Holden Caulfield',
// 	leastFavouriteCharacter: 'Stradlater',
// 	overallRating: 3,
// },
// {
// 	title: 'Pride and Prejudice',
// 	author: 'Jane Austen',
// 	series: '',
// 	cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVFywj2lHkJEKWK7m8BhjSG_0WZgAGmdRTg&s',
// 	startDate: '10 May 2022',
// 	finishDate: '25 May 2022',
// 	format: 'Paperback',
// 	genre: 'Romance, Classic, Historical Fiction',
// 	quotes: [
// 		'I could easily forgive his pride if he had not mortified mine.',
// 		'You must allow me to tell you how ardently I admire and love you.',
// 	],
// 	favouriteCharacter: 'Elizabeth Bennet',
// 	leastFavouriteCharacter: 'Mr. Collins',
// 	overallRating: 4,
// },
// {
// 	title: 'The Alchemist',
// 	author: 'Paulo Coelho',
// 	series: '',
// 	cover: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
// 	startDate: '1 Jun 2022',
// 	finishDate: '5 Jun 2022',
// 	format: 'eBook',
// 	genre: 'Fiction, Philosophy, Self-help',
// 	quotes: [
// 		'And, when you want something, all the universe conspires in helping you to achieve it.',
// 		'It’s the possibility of having a dream come true that makes life interesting.',
// 	],
// 	favouriteCharacter: 'Santiago',
// 	leastFavouriteCharacter: 'The Crystal Merchant',
// 	overallRating: 4,
// }
]

const App = () => {
	return (
		<div>
			{books.map((book, idx) => (
				<BookReview key={idx} {...book} />
			))}
			<Chatbot />
			<ParentsInsights/>
		</div>
	)
}

export default App
