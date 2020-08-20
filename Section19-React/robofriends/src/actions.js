import { CHANGE_SEARCH_FIELD } from './constants';
  
// This is the action that will take the text inputted by user
// To make it cleaner we can wrap object around brackets which is the same as return:
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

// The action will the Type of change search field and it's going to send a payload of text