import React from 'react'

const Stories = ({ news }) => {
  return(
    <section className='stories'>
      {news && (
        news.map((oneNew, i) => {
            return(
              <article key={oneNew.objectID} className='story'>
                <h4 className='title'>{oneNew.title}</h4>
                <p className='info'>
                {oneNew.points} points by <span>{oneNew.author} | </span> {oneNew.num_comments}{' '}
                comments
                </p>
                <div>
                  <a
                  href={oneNew.url}
                  className='read-link'
                  target='_blank'
                  rel='noopener noreferrer'
                  >
                  readmore
                  </a>
                  <button
                    className='remove-btn'
                  >
                    remove
                  </button>
                </div>
              </article>
            )
        })
      )}
    </section>
  )
}

export default Stories
