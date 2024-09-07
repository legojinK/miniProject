import React, { useEffect, useState } from 'react';
import { useSearchMoviesQuery } from "../../hooks/useSearchMovie.jsx";
import { useSearchParams } from "react-router-dom";
import { Alert, Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard.jsx";
import ReactPaginate from "react-paginate";
import SortDropdown from "../Homepage/components/Filters/SortDropdown.jsx";
import FilterDropdown from "../Homepage/components/Filters/FilterDropdown.jsx";
import { useFilterQuery } from "../../hooks/useFilter.jsx";

const MoviePage = () => {
    const [query, setQuery] = useSearchParams();
    const [page, setPage] = useState(1);
    const [sortKeyword, setSortKeyword] = useState("");
    const [genreKeyword, setGenreKeyword] = useState("");
    const [selectedGenreName, setSelectedGenreName] = useState("장르별");

    const keyword = query.get("q");

    const { data, isLoading, isError, error } = useSearchMoviesQuery({ keyword, page });

    const { data: filteredData, isLoading: isFilterLoading, isError: isFilterError, error: filterError, refetch } = useFilterQuery({
        genreKeyword,
        sortKeyword,
        page,
    });

    useEffect(() => {
        if (sortKeyword || genreKeyword) {
            refetch();
        }
    }, [sortKeyword, genreKeyword, page, refetch]);

    if (isLoading || isFilterLoading) {
        return <h1>Loading</h1>;
    }

    if (isError || isFilterError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    const handlePageClick = ({ selected }) => {
        setPage(selected + 1);
    };

    const moviesScreen = (genreKeyword || sortKeyword ? filteredData?.results : data?.results) || [];

    return (
        <div>
            <Container>
                <div className="filter-container">
                    <div className="dropdown-container">
                        <SortDropdown setSortKeyword={setSortKeyword} />
                        <FilterDropdown
                            setGenreKeyword={setGenreKeyword}
                            setSelectedGenreName={setSelectedGenreName}
                            selectedGenreName={selectedGenreName}
                        />
                    </div>
                    <button
                        className="filter-rollback-button"
                        onClick={() => {
                            setSortKeyword("");
                            setGenreKeyword("");
                            setSelectedGenreName("장르별");
                        }}
                    >
                        Reset
                    </button>
                </div>
                {moviesScreen.length === 0 ? (
                    <div>No results found for {keyword}</div>
                ) : (
                    <Row>
                        {moviesScreen.map((movie, index) => (
                            <Col lg={3} xs={6} key={index} className="movie-card-box">
                                <MovieCard movie={movie} />
                            </Col>
                        ))}
                    </Row>
                )}
                <div className="d-flex justify-content-center my-4">
                    <ReactPaginate
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={5}
                        pageCount={genreKeyword || sortKeyword ? filteredData?.total_pages : data?.total_pages}
                        previousLabel="< "
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                        forcePage={page - 1}
                    />
                </div>
            </Container>
        </div>
    );
};

export default MoviePage;
