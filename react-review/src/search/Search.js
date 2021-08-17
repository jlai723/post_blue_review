import { useEffect, useState } from "react";
import styled from "styled-components";

// Class obj import
import { Film } from './Film';

const Search = () => {
    // Films List
    const [filmList, setFilmList] = useState([])

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(json => {
            let filmArr = json.map(f => {
                return new Film(f)
            })
            console.log(filmArr)
            setFilmList(filmArr)
        })
    }, [])

    return (
        <>
        <input></input>
        <ul>
        {filmList?.map((f) => {
            return <li>{f.title} {f.id}</li>
        })}
        </ul>
        </>
    )
}

export default Search;