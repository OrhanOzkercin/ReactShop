import { UserActionTyes } from '../types';

export const setCurrentUser = (user) => ({
	type: UserActionTyes.SET_CURRENT_USER,
	payload: user,
});
