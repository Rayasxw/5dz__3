import { types } from "../types/types";



 export function asyncFunctionAction() {
    return function () {
        setTimeout (() => {
            alert('hello')
        }, 2000);
    }
 }

 export function dogsAction(dogImage) {
    return {
        type: types.GET_DOGS, 
        payload: {dogImage }
    };
}

export function fetchDogs() {
    return async function (dispatch) {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            
            dispatch(dogsAction(data.message)); 
        } catch (error) {
            console.error("Ошибка при загрузке собак:", error);
        }
    };
}

export function observationsAction(observations) {
    return {
        type: types.GET_OBSERVATIONS, 
        payload: { observations }
    };
}

export function fetchObservations() {
    return async function (dispatch) {
        try {
            const response = await fetch('https://api.inaturalist.org/v1/observations?taxon_id=3&per_page=5');
            const data = await response.json();
            
            dispatch(observationsAction(data.results)); 
        } catch (error) {
            console.error("Ошибка при загрузке наблюдений:", error);
        }
    };
}

export function  getCharacterAction(character) {
    return {
        type: types.GET_CHARACTER, 
        payload: { character }
    };
}

export function fetchCharacter() {  
    return async function (dispatch) {
        try {
            const response = await fetch('https://67ac8c3c3f5a4e1477daf793.mockapi.io/iceAge/characters');
            const data = await response.json();
            
            dispatch(getCharacterAction(data)); 
        } catch (error) {
            console.error("Ошибка при загрузке персонажа:", error);
        }
    };
}


