import React from "react";
import style from "./OrderGoogs.module.css"
import {Count} from "../Count/Count";
import classNames from "classnames";

export const OrderGoogs = () => {
    return (
        <li className={style.item}>
            <img className={style.image} src="img/burger_1.jpg" alt="Супер сырный"/>

            <div className={classNames(style.goods, style.goods)}>
                <h3 className={style.title}>Супер сырный</h3>

                <p className={style.weight}>512г</p>

                <p className={style.price}>1279
                    <span className="currency">₽</span>
                </p>
            </div>

           <Count/>
        </li>
    );
}
