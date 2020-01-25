import React, {Component} from 'react';

class Listings extends Component{
    constructor(){
        super();
        this.state={};
    }
    render(){
        return (<section id="listings">
            <section className="search-area">
                <input type="text" name="search"/>
            </section>
            <selection className="sortby-area">
                <div>
                    390 results found
                </div>
                <div className="sort-options">
                    <select name="sortby" className="sortby">
                        <option value="price-asc">Highest Price</option>
                        <option value="price-desc">Lowest Price</option>
                    </select>
                    <div className="view">
                        list icon, grid icon.
                    </div>
                </div>
            </selection>
            <section className="listings-results">
                <div className="listing">
                    <div className="listing-img">
                        imagehere
                        <span className="Address">Address</span>
                        <div className="details">
                            <div className="user-image">
                               imagehere
                            </div>
                            <div className="user-details">
                                <span className="user-name">Nina Smith</span>
                                <span className="post-date">05/05/2017</span>
                            </div>
                            <div className="listing-details">
                                <div className="floor-space">squareimagehere <span>1000 ft<sup>2</sup></span></div>
                                <div className="bedrooms"> bed image here <span>3 bedrooms</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-info">
                        <span>$1000 / month</span>
                        <span>LOCATIONHERE Ridgewood, NY</span>
                    </div>
                </div>
            </section>
            <section className="pagination">
                <ul className="pagination-nums">
                    <li>Prev</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>Next</li>
                </ul>
            </section>
        </section>);
    }
}
export default Listings;