import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Card from "../component/Card.jsx";
import {Container,Col , Row} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

const ProductList = () => {
    const [productList,setProductList]=useState([])
    const [search,setSearch]=useSearchParams();

    useEffect(()=>{
        getProductList()
    },[search])

    const getProductList = async()=>{

        const searchQuery =search.get("q")||"";
        const url = `https://my-json-server.typicode.com/legojinK/miniProject/products?q=${searchQuery}`;
        const { data } = await axios.get(url);
        setProductList(data)
    }
    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item) => (
                        <Col lg={3} key={item.id}>
                            <Card item={item}/>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    );
};

export default ProductList;