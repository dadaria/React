export const SHOW_PROFILE_INFO = '@@profile/SHOW_PROFILE_INFO';

export const showProfileInfo = (name, email, number) => ({
    type: SHOW_PROFILE_INFO,
    name,
    email, 
    number,
});