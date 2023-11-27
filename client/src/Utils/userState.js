import { createGlobalState } from 'react-hooks-global-state';

// Get the role of user from the local storage
export const getCurrUser = () => {
  try {
    const result = JSON.parse(localStorage.getItem('user'));
    if (!result) {
      return { role: 'DefaultUser' };
    }
    return result.role || { role: 'Student' };
  } catch (error) {
    // Handle JSON parse error if the item is not a valid JSON
    return { role: 'DefaultUser' };
  }
};

const { setGlobalState, useGlobalState } = createGlobalState({
  currUser: getCurrUser(),
});

export const setUserState = (s) => {
  setGlobalState('currUser', s);
};

export { useGlobalState };
