import React, { useState } from 'react';
import '../styles/Header.css';
import searchIcon from '../assets/images/search.png';
import filterIcon from '../assets/images/filter.png';

const Header: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="fc-header">
            <h1 className="fc-title">Fee Collection</h1>
            
            <div className="fee-header-right">
                <div className="search-container">
                    <span className="search-icon">
                        <img src={searchIcon} alt="search" width="16" height="16" />
                    </span>
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="filter-wrapper">
                        <div className="filter-settings-btn">
                            <img src={filterIcon} alt="filter" width="16" height="16" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;