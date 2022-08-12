export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const HOLLY_WOOD = 'HOLLY_WOOD';
export const FAVOURITE_MOVIES = 'FAVOURITE_MOVIES';
export const WATCH_LATER = 'WATCH_LATER';
export const REMOVE_FROM_LIKE = 'REMOVE_FROM_LIKE';
export const REMOVE_FROM_WATCH_LATER = 'REMOVE_FROM_LIKE_WATCH_LATER';

export function loadProduct(bollywood) {
  return {
    type: LOAD_PRODUCTS,
    bollywood: {
      ...bollywood,
    },
  };
}

export function hollywood(hollywood) {
  return {
    type: HOLLY_WOOD,
    hollywood: {
      ...hollywood,
    },
  };
}

export const Like_Movies = bMovies => {
  return {
    type: FAVOURITE_MOVIES,
    payload: bMovies,
  };
};
export const addWatchLater = bMovies => {
  return {
    type: WATCH_LATER,
    payload: bMovies,
  };
};

export const removeLikeMovies = bMovies => {
  return {
    type: REMOVE_FROM_LIKE,
    payload: bMovies,
  };
};

export const removeWatchLaterMovies = bMovies => {
  return {
    type: REMOVE_FROM_WATCH_LATER,
    payload: bMovies,
  };
};

// export const addItemToCart = data => ({
//     type: ADD_ITEM,
//     payload: data,
//   });

//   export const addData = bMovies => ({
//     type: ADD_ITEM,
//     payload: bMovies,
//   });

// };
