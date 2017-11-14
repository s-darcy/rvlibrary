import React from 'react';
import OptionsBox from './OptionsBox';

function Review() {
  return (
    <div class="columns medium-6 left  review__book-cards">
      <article className="row  review__book-cards--card">
        <div className="bookcontainer small-4 columns  review__book-cards--image">
          <img src="http://via.placeholder.com/120x171" alt="book cover" />
        </div>
        <div className="small-8 columns">
          <h3 className="review__book-cards--title">El Pooch of La Mancha</h3>
          <p className="review__book-cards--author"><span className="author">Alex Nelson</span></p>
          
          <span className="rating">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span>
        </div>  
        <div className="row">
          <div className="small-12 columns">
            <p className="review__book-cards--text  reviewText">Fearful inexpedient fearful will joy philosophy. Battle war transvaluation eternal-return society madness eternal-return chaos right free morality merciful.</p>
          </div>  
        </div>
        <OptionsBox />
      </article>
    </div>  
  );
}

export default Review;