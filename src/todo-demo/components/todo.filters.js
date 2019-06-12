import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
    return (
        <nav className="visibility-filters">
            <ul className="pagination justify-content-center">
                {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                    const currentFilter = VISIBILITY_FILTERS[filterKey];
                    return (
                        <li key={`visibility-filter-${currentFilter}`}
                            className="page-item">
                                <a className="page-link" href="#" onClick={() => {
                                setFilter(currentFilter);
                            }}> {currentFilter}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
};
export default connect(
    mapStateToProps,
    { setFilter }
)(VisibilityFilters);
