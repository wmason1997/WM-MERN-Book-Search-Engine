import { gql } from '@apollo/client';

// LOGIN_USER will execute 'loginUser' mutation set up using Apollo server
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;


// ADD_USER will execute the 'addUser' mutation
export const ADD_USER = gql`
    mutation addUser()
`


// SAVE_BOOK will execute the 'saveBook' mutation
export const SAVE_BOOK = gql`
    mutation saveBook()
`


// REMOVE_BOOK will execute the 'removeBook' mutation
export const REMOVE_BOOK = gql`
    mutation removeBook()
`