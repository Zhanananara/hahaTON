import { Container, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContextProvider';
import Spinner from '../components/Spinner/Spinner';

const ProdDetail = () => {
    const {prodId} = useParams();

    const {getOneProduct, forEditVal} = useProductContext();

    useEffect(() =>{
        getOneProduct(prodId)
    },[]);

    console.log(forEditVal)
    return (
        <Container maxWidth="lg">
        <div>
            <Paper>
            <h1>RPODDETAIL</h1>
            {
                forEditVal ? (
                    <>
                    <img width='400px'
                    src={forEditVal.img} alt=""/>
                    <h3>{forEditVal.title}</h3>
                    <p>{forEditVal.description}</p>
                    <p>Price is - <strong>{forEditVal.price}</strong></p>
                    <p>Type is - <strong>{forEditVal.type}</strong></p>
                    </>
                ) : (
                    <Spinner/>
                )
            }
            </Paper>
        </div>
        </Container>
    );
};

export default ProdDetail;