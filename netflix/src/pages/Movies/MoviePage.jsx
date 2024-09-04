import React, {useState} from 'react';
import {useSearchMoviesQuery} from "../../hooks/useSearchMovie.jsx";
import {useSearchParams} from "react-router-dom";
import {Alert, Col, Container, Row} from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard.jsx";
import ReactPaginate from "react-paginate";

const MoviePage = () => {

    const [query,setQuery]=useSearchParams()
    const [page, setPage] = useState(1);
    const keyword =query.get("q")
    const {data,isLoading,isError,error}=useSearchMoviesQuery({keyword, page})
    if(isLoading) {
        return  <h1>Loading</h1>
    }
    if(isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
    const handlePageClick =({selected})=>{
        setPage(selected +1)
    }

    return (
        <div>
            <Container>
                {data?.results.length === 0 ? (
                    <div>{keyword} 와 일치하는 영화가 없습니다.</div>
                ) : (
                    <Row>
                        {data?.results.map((movie, index) => (
                            <Col lg={3} xs={6} key={index} className="movie-card-box">
                                <MovieCard movie={movie}/>
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
                        pageCount={data?.total_pages}
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