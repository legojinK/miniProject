import React from "react";
import { Dropdown } from "react-bootstrap";

const SortDropdown = ({ setSortKeyword }) => {
    const handleSortSelect = (eventKey) => {
        setSortKeyword(eventKey);
    };

    return (
        <Dropdown onSelect={handleSortSelect}>
            <Dropdown.Toggle variant="success" id="sort-dropdown">
                정렬
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="popularity.desc">인기순 (높은순)</Dropdown.Item>
                <Dropdown.Item eventKey="popularity.asc">인기순 (낮은순)</Dropdown.Item>
                <Dropdown.Item eventKey="primary_release_date.desc">발매일 (최근순)</Dropdown.Item>
                <Dropdown.Item eventKey="primary_release_date.asc">발매일 (오래된순)</Dropdown.Item>
                <Dropdown.Item eventKey="vote_average.desc">별점 (높은순)</Dropdown.Item>
                <Dropdown.Item eventKey="vote_average.asc">별점 (낮은순)</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SortDropdown;
