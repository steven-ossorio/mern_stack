import {
  ADD_POST,
  POST_LOADING,
  GET_POST,
  DELETE_POST,
  GET_POSTS
} from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    }
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
};
