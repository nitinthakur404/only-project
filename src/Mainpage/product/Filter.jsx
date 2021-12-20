import React, { useState, useEffect } from "react";
import Data from "../Data";
import "./FilterComp.css";
const Database = Data;

function Filter() {
    const [filters, setfilters] = useState({});
    // const [pricerange, setpricerange] = useState(0)
    const [Database, setDatabase] = useState(Data);
    const [secondStoredata, setsecondStoredata] = useState();
    const Category = [
        "All",
        "Office",
        "Living Room",
        "Kitchen Table",
        "Bedroom",
        "Dinning Table",
        "Kids"
    ];
    const brands = ["All", "Godrej Interio", "Ikea", "Hulsta", "Nilkamal"];

    // console.log(Object.keys(filters), "key")
    const getFilterdName = (property, value) => {
        filters[property] = value;

        filterDatabase();
    };

    const filterDatabase = () => {
        console.log(filters);
        let data = [];

        if (filters.category) {
            const categoryFilter = Database.filter((item) => {
                return item.category === filters["category"];
            })
            data = [...data, ...categoryFilter]
            console.log(data)
        }

        if (filters.Brand) {
            const brandFilter = data.filter((item) => {
                return item.Brand === filters["Brand"];
            });

            data = [...brandFilter]
            console.log(data)
        }


        // console.log(data);


        // setDatabase([...categoryFilter, ...brandFilter]);
    };

    console.log(Database);
    // console.log(filters, 'last')

    return (
        <div className="filter-container">
            <article className="category">
                <p> category </p>
                {Category.map((buttonName, index) => {
                    return (
                        <div>
                            <button
                                key={index}
                                type="button"
                                className="buttonFilter"
                                onClick={() => {
                                    getFilterdName("category", buttonName);
                                }}
                            >
                                {buttonName}{" "}
                            </button>
                        </div>
                    );
                })}{" "}
            </article>

            <article className="Options&vlaue ">
                <select
                    name="BrandS"
                    className="Brand"
                    onChange={(e) => {
                        getFilterdName("Brand", e.target.value);
                    }}
                >
                    {brands.map((BrandName) => {
                        return <option value={BrandName}>{BrandName}</option>;
                    })}
                </select>
            </article>

            {/* <article >

                <h1> $ {pricerange} </h1>
                <input type="range"
                    className="rangeFilter"
                    min="0"

                    max="3999.99" />

            </article> */}
        </div>
    );
}
export default Filter;
