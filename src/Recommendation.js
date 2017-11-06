import React from 'react';

function Recommendation(props = "El Pooch of La Mancha") {
  return (
    <article className="row">
      <div className="bookcontainer small-2 columns">
        <img src="http://via.placeholder.com/120x171" alt="book cover" />
      </div>
      <div className="bookdetails small-4 columns">
        <h3>{props.title}</h3>
        <p>By <span className="author">{props.author}</span></p>
        <div className="optionsBox">
          <a href="#">Order</a>
          <a href="#">Review</a>
        </div>
      </div>
      <div className="small-6 columns">
        <p className="reviewText">Description coming soon. Fearful inexpedient fearful will joy philosophy. Battle war transvaluation eternal-return society madness eternal-return chaos right free morality merciful.</p>
      </div>
    </article>

  );
}

export default Recommendation;