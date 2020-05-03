// import * as admin from 'firebase-admin';

const ADD_COMMENT = 'ADD_COMMENT'

const createComment = comment => ({
  type: ADD_COMMENT,
  comment
})


