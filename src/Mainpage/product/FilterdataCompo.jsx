import React, { useState } from "react";
import Data from "../Data";
import "./FilterComp.css";
const Database = Data;

function Filter(props) {
    const [filters, setfilters] = useState({});
    const [pricerange, setpricerange] = useState(3999)
    const [secondStoredata, setsecondStoredata] = useState(Database);
    const [handleSearchinput, sethandleSearchinput] = useState()
    const [searchData, setsearchData] = useState([])
    const Category = [
        "Office",
        "Living Room",
        "Kitchen Table",
        "Bedroom",
        "Dinning Table",
        "Kids"
    ];
    const brands = ["Godrej Interio", "Ikea", "Hulsta", "Nilkamal"];



    props.setpassingData(secondStoredata)
    props.setinputgetdata(handleSearchinput)


    const handlerangeslider = (event) => {
        setpricerange(event)
        getFilterdName('price', event)
    }
    const getFilterdName = (property, value) => {
        filters[property] = value;
        filterDatabase();
    };



    const filterDatabase = () => {
        let data = [];
        if (filters.category) {
            const categoryFilter = Database.filter((item) => {
                return item.category === filters["category"];
            })
            data = [...categoryFilter]


        }
        if (filters == 'All') {
            const categoryFilter = data.filter((item) => {
                return item.category === filters["category"];
            })
            data = [...categoryFilter]


        }



        if (filters.Brand) {
            if (!filters.category) {
                const brandFilter = Database.filter((item) => {
                    return item.Brand === filters["Brand"];
                });
                data = [...brandFilter]
            }
            if (filters.Brand == 'All') {
                const brandFilter = Database.filter((item) => {
                    return item.category !== filters["All"];
                })
                data = [...brandFilter]
            }

            else {

                const brandFilter = data.filter((item) => {
                    return item.Brand === filters["Brand"];
                });
                data = [...brandFilter]
            }

        }

        if (filters.price) {
            if (filters.category || filters.Brand) {
                const priceFilter = data.filter((item) => {
                    console.log(filters['price'], "price")
                    return item.price <= (filters['price']);
                })
                console.log(priceFilter, "pricefilter")
                data = [...priceFilter]
            }

            else {
                const priceFilter = Database.filter((item) => {
                    return ((item.price) <=  filters.price)
                })
                data = [...priceFilter]
            }

        }
        setsecondStoredata(data)
        console.log(data, 'last')
    };



    return (
        <div className="filter-container">
            <div className="inputBoxContainer">
                <input className="inputbox" type="text" onChange={(e) => { sethandleSearchinput(e.target.value) }} placeholder="search"></input>
            </div>
            <article className="category">
                <p> Category </p>
                {Category.map((buttonName, index) => {
                    return (
                        <div className="categoryFilterContainer">
                            <button
                                key={index}
                                type="button"
                                className="categoryFilter"
                                onClick={() => {
                                    getFilterdName("category", buttonName);
                                }}
                            >
                                {buttonName}
                            </button>
                        </div>
                    );
                })}
            </article>

            <article className="Brandcompo">
                <h3>Company</h3>
                <select
                    name="BrandS"
                    className="Brand"
                    onChange={(e) => {
                        getFilterdName("Brand", e.target.value);
                    }}
                >
                    {brands.map((BrandName, index) => {
                        return <option value={BrandName}>{BrandName}</option>
                    })}
                </select>
            </article>

            <article className="Pricerange">

                <p> $ {pricerange} </p>
                <input type="range"
                    className="rangeFilter" onChange={(e) => {
                        handlerangeslider(e.target.value)
                    }} min="0" max="3999"
                    value={pricerange}
                />
            </article>

            <article className="clearfilte">
                <button className="clearfiltebutton" onClick={() => {
                    setpricerange(3999)
                    setfilters({})
                    setsecondStoredata(Database)


                }}  > clear filters</button>
            </article>
        </div>


    );
}
export default Filter;
