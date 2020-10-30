import React from "react";

import classes from './Dropdown.module.css';
import {MovieType} from "../../../interfaces/state";
import {movieTypeToString} from "../../../utils/time";

interface propType {
    title: string;
    options: any[];
    changeType: (type: MovieType) => void;
}

const dropdown = (props: propType) => {
    const clickHandler = (type: MovieType) => {
        if (props.title === "Movies") {
            props.changeType(type);
        }
    }
    const options = props.options.map(option => {
        return (<p key={option} onClick={() => clickHandler(option)}>
            {
                movieTypeToString(option)
            }
        </p>);
    })
    return (
        <div className={classes.Dropdown}>
            <p className={classes.DropButton}>{props.title}</p>
            <div className={classes.Content}>
                {options}
            </div>
        </div>
    );
}

export default dropdown;