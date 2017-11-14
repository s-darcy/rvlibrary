import React from 'react';
import OptionsBox from './OptionsBox';

function Recommendation(props = "El Pooch of La Mancha") {
  return (
    <div class="columns medium-6 left  recommendation__book-cards">
      <article className="row  recommendation__book-cards--card">
        <div className="small-4 columns  recommendation__book-cards--image">
          <img src="http://books.google.com/books/content?id=fdjqz0TPL2wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="book cover" />
        </div>
        <div className="bookdetails  small-8 columns">
          <h3 className="recommendation__book-cards--title">{props.title}</h3>
          <p className="recommendation__book-cards--author"><span className="author">{props.author}</span></p>
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
            <p className="recommendation__book-cards--text reviewText">Description coming soon. Fearful inexpedient fearful will joy philosophy. Battle war transvaluation eternal-return society madness eternal-return chaos right free morality merciful.</p>
          </div>
        </div>
        <OptionsBox />
      </article>
    </div>
  );
}

export default Recommendation;