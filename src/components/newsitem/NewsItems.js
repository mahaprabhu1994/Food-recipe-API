import React, { useState, useEffect } from 'react'
import { Container, ParaScroll, PopupContainer, PopupImg, ProductImg, ProductPage, StyledPopup } from './Styled_NewsItem'
import axios from "axios";

// import ShowMore from 'react-show-more-button';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ShowMore from 'react-show-more-button/dist';

function NewsItems() {

    const [items, setitems] = useState([])


    useEffect(() => {



        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(res => {

                console.log(res.data);

                setitems(res.data.categories)

            })
            .catch(err => {

                console.log(err.data);

            })

    }, [])


    const itemslist = items.map((obj) => {
        return (
            <Container>
                <ProductImg src={obj.strCategoryThumb} />
                <h3>{obj.strCategory}</h3>
                {/* <ShowMore maxHeight={140} backgroundColor={'#d2d2d4'} >
                    <p>{obj.strCategoryDescription}</p>
                </ShowMore> */}

                {/* ------------------------------ */}
                {/* <Popup trigger={<button> Trigger</button>} position="center"
                    Modal
                >
                    <ProductImg src={obj.strCategoryThumb} />
                    <h3>{obj.strCategory}</h3>
                    <div><p>{obj.strCategoryDescription}</p></div>
                </Popup> */}

                {/* ----------------------------------- */}
                <StyledPopup  trigger={<button>Show more...</button>} position="center">
                    {close => (
                        <PopupContainer>
                            <PopupImg src={obj.strCategoryThumb} />
                            <h3>{obj.strCategory}</h3>


                            {/* ------show more popup------ */}

                            
                                <ParaScroll>
                                    <p>{obj.strCategoryDescription}</p>
                                </ParaScroll>
                            

                            {/* ------------------------------ */}

                            {/* <div><p>{obj.strCategoryDescription}</p></div> */}


                            <a className="close" onClick={close}>
                                &times;
                            </a>
                        </PopupContainer>
                    )}
                </StyledPopup>

                {/* ------------------------------------ */}
            </Container>
        );
    })


    return (
        <ProductPage>
            
            {/* type-1 */}
            {/* {items.map((obj) => {
                return (
                    <Container>
                        <ProductImg src={obj.strCategoryThumb} />
                        <h3>{obj.strCategory}</h3>
                        <p>{obj.strCategoryDescription}</p>
                    </Container>
                );
            })} */}

            {/* type-2 */}
            {itemslist}


        </ProductPage>
    )
}

export default NewsItems