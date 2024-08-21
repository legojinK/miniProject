import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Card from "../component/Card.jsx";
import {Container,Col , Row} from "react-bootstrap";

const ProductList = () => {
    const [productList,setProductList]=useState([])

    useEffect(()=>{
        getProductList()

    },[])

    const getProductList = async()=>{
        const url = `http://localhost:4000/products`;
        const { data } = await axios.get(url);
        console.log(111,data)
        setProductList(data)
    }


    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item) => (
                        <Col lg={3} key={item.id}>
                            <Card items={item}/>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    );
};

export default ProductList;