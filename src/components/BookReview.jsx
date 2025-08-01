import React from 'react';

const BookReview = () => {
  return (
    <main className="bg-stone-100 min-h-screen p-4 flex items-center justify-center font-[Inter]">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border border-gray-200">
        {/* Header Section */}
        <header className="mb-8 md:mb-12">
          <h1 className="text-sm font-semibold uppercase text-gray-500 tracking-widest">Book Review</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">All Systems Red</h2>
          <p className="text-base md:text-lg text-gray-500 mt-1">Martha Wells · The Murderbot Diaries #1</p>
        </header>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search reviews, quotes, or notes..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {/* Left Column: Ratings */}
          <div className="md:col-span-1 flex flex-col space-y-6">
            {[
              {
                title: 'Setting',
                desc: 'World building, lore, atmosphere, etc.',
                rating: 5,
              },
              {
                title: 'Plot',
                desc: 'Structure, arcs, pacing, climax, tension, resolution, etc.',
                rating: 4,
              },
              {
                title: 'Characters',
                desc: 'Creativity, relatability, depth, dynamics, arcs, etc.',
                rating: 5,
              },
              {
                title: 'Style',
                desc: 'Writing, prose, point-of-view, narration, etc.',
                rating: 4,
              },
              {
                title: 'Engagement',
                desc: 'Readability, enjoyment, themes, genre, tropes, etc.',
                rating: 5,
              },
            ].map(({ title, desc, rating }) => (
              <div key={title}>
                <h3 className="font-medium text-lg text-gray-700">{title}</h3>
                <p className="text-xs text-gray-400 italic">{desc}</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}

            {/* Overall Rating */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-medium text-lg text-gray-700">Overall rating</h3>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-6 w-6 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column: Notes */}
          <div className="md:col-span-1 flex flex-col space-y-4">
            <div>
              <h3 className="font-medium text-lg text-gray-700">Notes</h3>
              <label className="flex items-center mt-1 text-sm text-gray-500">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600 rounded" />
                <span className="ml-2">Reread</span>
              </label>
            </div>
            <div className="flex-grow p-4 bg-gray-50 rounded-xl border border-gray-200 min-h-[300px]">
              {/* This area would be a large text field in a real app */}
            </div>
            <div className="text-right text-xs text-gray-400">page ##</div>
          </div>

          {/* Right Column: Book Details & Cover */}
          <div className="md:col-span-1 flex flex-col space-y-6">
            <div className="rounded-xl shadow-xl overflow-hidden self-center w-2/3 md:w-full">
              <img
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631585309i/32758901.jpg"
                alt="Book cover for All Systems Red"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Start date</span>
                <span className="text-gray-500">5 Feb 2023</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Finish date</span>
                <span className="text-gray-500">7 Feb 2023</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Format</span>
                <span className="text-gray-500">Hardcover</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg text-gray-700">Genre</h3>
              <p className="text-sm text-gray-500 mt-1">Science Fiction, Novella, Adult, Space, Robots</p>
            </div>
          </div>
        </div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col justify-between md:col-span-2">
            <div>
              <h3 className="font-medium text-lg text-gray-700 mb-2">Quotes to remember</h3>
              <blockquote className="text-gray-600 italic leading-relaxed space-y-4">
                <p className="relative pl-6">
                  <span className="absolute left-0 top-0 text-3xl text-gray-300 font-serif leading-none">“</span>
                  As a heartless killing machine, I was a terrible failure.
                </p>
                <p className="relative pl-6">
                  <span className="absolute left-0 top-0 text-3xl text-gray-300 font-serif leading-none">“</span>
                  I hate having emotions about reality; I'd much rather have them about Sanctuary Moon.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-medium text-lg text-gray-700 mb-2">Most surprising moment</h3>
            <p className="text-gray-600">...</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex items-center justify-between">
            <div>
              <h3 className="font-medium text-lg text-gray-700">Favourite character</h3>
              <p className="text-gray-600">Murderbot</p>
            </div>
            <span className="text-2xl">❤️</span>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex items-center justify-between">
            <div>
              <h3 className="font-medium text-lg text-gray-700">Least favourite character</h3>
              <p className="text-gray-600">...</p>
            </div>
            <span className="text-2xl">😡</span>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 lg:col-span-2">
            <h3 className="font-medium text-lg text-gray-700 mb-2">The ending</h3>
            <p className="text-gray-600">Liked it? Why? Why not? How should it have ended?</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookReview;
