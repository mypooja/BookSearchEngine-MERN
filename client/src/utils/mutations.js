import gql from "graphql-tag";

export const SIGNUP = gql`
mutation addUser($username:String!, $password:String!, $email:String!) {
    addUser(username:$username, password:$password, email:$email){
      token
      user {
        username
        email
      }
    }
  }
`

export const LOGIN = gql`
    mutation login($password:String!, $email:String!) {
        login(password:$password, email:$email){
            token
            user {
                username
                email
            }
        }
    }
`
export const SAVE_BOOK = gql`
  mutation saveBook ($bookInput: BookInput){
    saveBook(input:$bookInput){
      email,
      savedBooks{
        bookId
        authors
        title
        description
        link
        image
      }
    }
  }
  `
  
  export const DELETE_BOOK = gql`
  mutation deleteBook ($bookId: String!){
    removeBook(bookId:$bookId){
      email,
      savedBooks{
        bookId
        authors
        title
        description
        link
        image
      }
    }
  }
  `