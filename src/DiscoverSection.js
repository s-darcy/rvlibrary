import React from 'react';

function DiscoverSection(props) {

  return (
    <section className="discoverSection column">
      <h2>Discover</h2>
      <div className="discoverBox">
        <form className="searchbox">
          <div className="row">
            <div className="small-8 small-centered columns">
              <div className="row collapse prefix-radius">
                <div className="small-2 columns">
                  <label htmlFor="searchInput" className="prefix">Search</label>
                </div>
                <div className="small-8 columns">
                  <input type="text" id="searchInput" value={props.searchTerm} onChange={props.search} />
                </div>
                <div className="small-2 columns">
                  <button className="button tiny searchResetBtn" onClick={props.clearSearch}>Reset</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default DiscoverSection;


