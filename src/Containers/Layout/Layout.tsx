import React from 'react';

import Navigation from "../../Components/Navigation/Navigation";
import Movies from "../Movies/Movies";
import {Redirect, Switch, Route} from "react-router";
import Movie from "../Movie/Movie";

const layout = () => {
    const routes = (
        <Switch>
            <Route path="/movie" component={Movie} />
            <Route path="/" exact component={Movies} />
            <Redirect to="/" />
        </Switch>
    );
    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                {routes}
            </main>
        </>
    );
}

export default layout;