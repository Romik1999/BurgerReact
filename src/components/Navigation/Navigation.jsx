import React from "react";
import style from "./Navigation.module.css"
import classNames from "classnames";
import {Container} from "../Container/Container";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory} from "../../store/category/categorySlice.js";

export const Navigation = ({className}) => {
    const {category, activeCategory} = useSelector((state) => state.category);
    const dispatch = useDispatch();


    return (
        <nav className={style.navigation}>
            <Container className={style.container}>
                <ul className={style.list}>
                    {
                        category.map((item, i) => (
                            <li className={style.item} key={i}>
                                <button className={classNames(
                                    style.button,
                                    activeCategory === i ? style.button_active : ''
                                )}
                                        style={{backgroundImage: `url(${item.image})`}}
                                        onClick={() => {
                                            dispatch(changeCategory({indexCategory: i}))
                                        }}
                                >
                                    {item.rus}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </nav>
    )
}

