import React, { useState } from 'react';
import { Alert, Card, Button } from "react-bootstrap";
import { useReviewsQuery } from "../../hooks/useReviews.jsx";
import "./Reviews.css";

const Reviews = ({ id }) => {
    const { data, isLoading, isError, error } = useReviewsQuery(id);
    const [moreReview, setMoreReview] = useState([]);

    const handleMore = (index) => {
        const updatedReview = [...moreReview];
        updatedReview[index] = !updatedReview[index];
        setMoreReview(updatedReview);
    };

    const getReviewContent = (content, isExpanded) => {
        return isExpanded ? content : `${content.slice(0, 200)}${content.length > 200 ? '...' : ''}`;
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    return (
        <div>
            {data.results.map((review, index) => {
                const isExpanded = moreReview[index] || false;
                const reviewContent = getReviewContent(review.content, isExpanded);

                return (
                    <Card key={index} className="review-card mb-3">
                        <Card.Body>
                            <Card.Title className="review-author">{review.author}</Card.Title>
                            <Card.Footer className="text-muted">
                                {new Date(review.updated_at).toLocaleDateString('en-CA')}{" "}
                                {new Date(review.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </Card.Footer>
                            <Card.Text className="review-content">{reviewContent}</Card.Text>
                            {review.content.length > 200 && (
                                <Button variant="secondary"  onClick={() => handleMore(index)}>
                                    {isExpanded ? '접기' : '더보기'}
                                </Button>
                            )}
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default Reviews;
