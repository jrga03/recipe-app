import axios from 'axios';

export function getRecipes() {
    return axios.get( '/recipes' );
}

export function getSpecials() {
    return axios.get( '/specials' );
}