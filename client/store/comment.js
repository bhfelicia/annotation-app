const initialState = {
  commentList: []
};

const ADD_COMMENT = "ADD_COMMENT";

let initialId = 0;
export const createComment = comment => ({
  type: ADD_COMMENT,
  id: initialId++,
  comment
});

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      const newComment = {
        comment: action.comment,
        id: action.id
      };
      return { ...state, commentList: [...state.commentList, newComment] };
    default:
      return state;
  }
};

export default commentReducer;
