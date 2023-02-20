import React from 'react'
import PortfolioCard from './PortfolioCard'
import portfolio_data from './portfolio_data'

const Portfolio = () => {
    return (
      <>
        <section className='Portfolio top' id='portfolio'>
          <div className='container'>
            <div className='heading text-center '>
              <h4>CHECK OUT MY PORTFOLIO</h4>
              <h1>My Portfolio</h1>
            </div>
  
            <div className='content grid'>
              {portfolio_data.map((value, index) => {
                return <PortfolioCard key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
              })}
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Portfolio