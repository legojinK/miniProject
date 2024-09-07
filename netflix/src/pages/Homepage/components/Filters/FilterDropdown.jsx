import React from "react";
import { Dropdown } from "react-bootstrap";

const FilterDropdown = ({ setGenreKeyword, setSelectedGenreName, selectedGenreName }) => {
    const genreOptions = [
        { key: "28", label: "Action" },
        { key: "12", label: "Adventure" },
        { key: "16", label: "Animation" },
        { key: "35", label: "Comedy" },
        { key: "80", label: "Crime" },
        { key: "99", label: "Documentary" },
        { key: "18", label: "Drama" },
        { key: "10751", label: "Family" },
        { key: "14", label: "Fantasy" },
        { key: "36", label: "History" },
        { key: "27", label: "Horror" },
        { key: "10402", label: "Music" },
        { key: "9648", label: "Mystery" },
        { key: "10749", label: "Romance" },
        { key: "878", label: "Science Fiction" },
        { key: "10770", label: "TV Movie" },
        { key: "53", label: "Thriller" },
        { key: "10752", label: "War" },
        { key: "37", label: "Western" },
    ];

    const handleGenreSelect = (eventKey) => {
        const selected = genreOptions.find((genre) => genre.key === eventKey);
        if (selected) {
            setSelectedGenreName(selected.label);
            setGenreKeyword(eventKey);
        }
    };

    return (
        <Dropdown onSelect={handleGenreSelect}>
            <Dropdown.Toggle variant="primary" id="genre-dropdown">
                {selectedGenreName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {genreOptions.map((genre) => (
                    <Dropdown.Item key={genre.key} eventKey={genre.key}>
                        {genre.label}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default FilterDropdown;
