import React from 'react';
import OptionsBox from './OptionsBox';

function Review() {
  return (
    <article className="row">
      <div className="bookcontainer small-2 columns">
        <img src="http://via.placeholder.com/120x171" alt="book cover" />
      </div>
      <div className="bookdetails small-4 columns">
        <h3>El Pooch of La Mancha</h3>
        <p>By <span className="author">Alex Nelson</span></p>
        <OptionsBox />
      </div>
      <div className="small-6 columns">
        <span className="rating">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-half-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </span>
        <p className="reviewText">Fearful inexpedient fearful will joy philosophy. Battle war transvaluation eternal-return society madness eternal-return chaos right free morality merciful.</p>
        <h3 className="reviewAuthor">Joe Smith</h3>
      </div>
    </article>
  );
}

export default Review;