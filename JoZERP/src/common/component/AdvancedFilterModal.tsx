import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../data/redux';
import { setProgramLevel, setDegree, toggleCourse, resetFilters } from '../data/redux/filterSlice';
import '../../styles/Navbar.css';
import '../../styles/AdvancedFilterModal.css';
import filterIcon from '../images/filter-icon.png';
import dropdownIcon from '../images/dropdown-icon.png';

const AdvancedFilterModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const { programLevel, degree, courses } = useSelector((state: RootState) => state.filters);

    const isAnyFilterSelected = !!(programLevel || degree || courses.length > 0);

    const programLevels = ['Undergraduate', 'Postgraduate', 'Doctoral'];
    const degrees = ['B.E.', 'B.Tech'];
    const availableCourses = [
        'Computer Science',
        'Information Technology',
        'Artificial Intelligence',
        'Electronics',
        'Data Science'
    ];

    if (!isOpen) return null;

    return (
        <div
            className="modal-content advanced-filter-dropdown"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="modal-body">
                {/* Program Level */}
                <div className="filter-column">
                    <h3>Program Level</h3>
                    <ul className="filter-options">
                        {programLevels.map((level) => (
                            <li
                                key={level}
                                className={`advancedfilter-option ${programLevel === level ? 'selected' : ''
                                    }`}
                                onClick={() => dispatch(setProgramLevel(level))}
                            >
                                {level}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Degree */}
                <div className="filter-column">
                    <h3>Degree</h3>
                    <ul className="filter-options">
                        {degrees.map((d) => (
                            <li
                                key={d}
                                className={`advancedfilter-option ${degree === d ? 'selected' : ''
                                    }`}
                                onClick={() => dispatch(setDegree(d))}
                            >
                                {d}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Course */}
                <div className="filter-column">
                    <h3>Course</h3>
                    <ul className="filter-options">
                        {availableCourses.map((course) => (
                            <li key={course} className="advancedfilter-option">
                                <input
                                    type="checkbox"
                                    id={course}
                                    checked={courses.includes(course)}
                                    onChange={() =>
                                        dispatch(toggleCourse(course))
                                    }
                                />
                                <label htmlFor={course}>
                                    {course}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="modal-footer">
                <button
                    className="reset-btn"
                    onClick={() => dispatch(resetFilters())}
                >
                    Reset
                </button>
                <button
                    className={`view-btn ${isAnyFilterSelected ? 'active' : ''}`}
                    onClick={onClose}
                >
                    View
                </button>
            </div>
        </div>
    );
};

const AdvancedFilterNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="advanced-filter-wrapper" ref={containerRef} style={{ position: 'relative' }}>
            <button
                className="advanced-filter-btn"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="filter-icon">
                    <img src={filterIcon} alt="filter" width="16" height="16" />
                </span>
                Advanced Filter
                <span className="dropdown-arrow">
                    <img src={dropdownIcon} alt="arrow" width="12" height="8" />
                </span>
            </button>

            <AdvancedFilterModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};

export { AdvancedFilterModal };
export default AdvancedFilterNavbar;
