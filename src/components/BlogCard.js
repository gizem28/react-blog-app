import React from 'react'

const BlogCard = () => {
    return (
        <div>
            {[].map((card, index) => {
        return (
          <div className="cards" key={index}>
            <div className="title">
              <h2>{card.title}</h2>
            </div>
            <img src={card.image} alt={card.title} />
            <div className="card-over">
              <p>{card.desc}</p>
            </div>
          </div>
        );
      })}
        </div>
    )
}

export default BlogCard
