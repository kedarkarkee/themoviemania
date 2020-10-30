import React, {ChangeEvent, useState} from "react";

import Dropdown from "./Dropdown/Dropdown";

import classes from './Navigation.module.css';
import searchIcon from '../../assets/search.svg';
import {changeType, searchMovies} from "../../store/actions";
import {connect} from "react-redux";
import {MovieType} from "../../interfaces/state";

type propType = ReturnType<typeof mapDispatchToProps>;
const Navigation = (props: propType) => {
    const [searchText, setSearchText] = useState("");
    const dropdownDatas = [
        {
            title: 'Movies',
            options: [
               MovieType.Popular, MovieType.Now_Playing, MovieType.Upcoming, MovieType.Top_Rated
            ]
        },
        {
            title: 'TV Shows',
            options: [
                'Popular', 'Airing Today', 'On The Air', 'Top Rated'
            ]
        }
    ];
    const dropdownItems = dropdownDatas.map(d => {
        return <Dropdown changeType={props.changeType} key={d.title} title={d.title} options={d.options}/>
    });
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }
    const searchHandler = () => {
        if (searchText.trim().length !== 0) {
            props.searchMovies(searchText);
        }
    }
    return (
        <div className={classes.Navigation}>
            <h2>Movies Mania</h2>
            <div className={classes.SearchContainer}>
                <input className={classes.Search} placeholder="Search" value={searchText} onChange={inputHandler}/>
                <img src={searchIcon} alt="search" className={classes.SearchIcon} onClick={searchHandler}/>
            </div>
            <div className={classes.Dropdowns}>
                {dropdownItems}
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeType: (type: MovieType) => dispatch(changeType(type)),
        searchMovies: (query: string) => dispatch(searchMovies(query))
    }
}

export default connect(null, mapDispatchToProps)(Navigation);