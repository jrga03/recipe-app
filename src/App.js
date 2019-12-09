/* eslint-disable import/first */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SpecialsList from './components/SpecialsList';

import { getRecipes, getSpecials } from './utils';

function App() {
    const [recipes, setRecipes] = useState([]);
    const [specials, setSpecials] = useState({});
    const [recipesObject, setRecipesObject] = useState({});

    useEffect(() => {
        async function fetchRecipes() {
            const { data } = await getRecipes();
            const recipesByUuid = data.reduce(( acc, recipe ) => ({
                ...acc,
                [ recipe.uuid ]: recipe
            }), {});

            setRecipes( data );
            setRecipesObject( recipesByUuid );
        }

        async function fetchSpecials() {
            const { data } = await getSpecials();
            const specialsByType = data.reduce(( acc, special ) => ({
                ...acc,
                [ special.type ]: acc[ special.type ]
                    ? acc[ special.type ].concat( special )
                    : [special]
            }), {});
            setSpecials( specialsByType );
        }

        fetchRecipes();
        fetchSpecials();
    }, []);

    return (
        <BrowserRouter>
            <div className="app">
                <RecipeList recipes={ recipes } />

                <Switch>
                    <Route exact path="/">
                        <h3>Select a recipe above</h3>
                    </Route>
                    <Route path="/:recipeUuid">
                        <RecipeDetails recipes={ recipesObject } />
                    </Route>
                </Switch>

                <hr />

                <footer>
                    { Object.keys( specials ).map(( type ) => (
                        <SpecialsList
                            key={ type }
                            type={ type }
                            specials={ specials[ type ] }
                        />
                    )) }
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
