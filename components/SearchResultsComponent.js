import React from 'react'

const SearchResultsComponent = ({results}) => {
    return (
        <main className='px-6 flex-grow lg:px-0 w-full lg:ml-44 max-w-2xl '>
            <p className='text-gray-600 text-md mb-5 mt-3'>About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.searchTime} seconds)</p>
            {results.items?.map(result => (
                <div key={result.link} className="mb-6">
                    <div className='group'>
                        <a href={result.link}>{result.formattedUrl}</a>
                        <a href={result.link}>
                            <h2 className='truncate text-xl text-blue-800 font-medium group-hover:underline'>{result.title}</h2>
                        </a>
                    </div>
                    <p className='line-clamp-2'>{result.snippet}</p>
                </div>
            ))}
        </main>
    )
}

export default SearchResultsComponent
