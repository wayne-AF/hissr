import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";
import { toast } from "react-toastify";

// Updates different types of data for InfiniteScroll component
// Filters out duplicates of content if new content has been added
export const fetchMoreData = async (resource, setResource) => {
    try {
        const {data} = await axiosReq.get(resource.next);
        setResource(prevResource => ({
            ...prevResource,
            next:data.next,
            results: data.results.reduce((acc, cur) => {
                return acc.some(accResult => accResult.id === cur.id) 
                ? acc
                : [...acc, cur]
            }, prevResource.results)
        }));
    } catch (err) {
      toast.error("Oops, something went wrong! Try again later")
    }
};

// Increments number of following users by 1
// Increments number of users being followed by 1
export const followHelper = (profile, clickedProfile, following_id) => {
    return profile.id === clickedProfile.id
    ? {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id
    }
    : profile.is_owner
    ? {
        ...profile,
        following_count: profile.following_count + 1
    }
    : profile
};

// Decrements number of following users by 1
// Decrements number of users being followed by 1
export const unfollowHelper = (profile, clickedProfile) => {
    return profile.id === clickedProfile.id
      ? {
          ...profile,
          followers_count: profile.followers_count - 1,
          following_id: null,
        }
      : profile.is_owner
      ? 
        { 
            ...profile, following_count: profile.following_count - 1 
        }
      : profile;
  };

  // Sets token timestamp in the browser's storage
  export const setTokenTimestamp = (data) => {
    const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
    localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
  };

  // Indicates if user's token should be refreshed
  // Will only refresh for logged in user
  export const shouldRefreshToken = () => {
    return !!localStorage.getItem("refreshTokenTimestamp");
  };

  // Removes token timestamp from local storage if user logs out
  // or refresh token expires
  export const removeTokenTimestamp = () => {
    localStorage.removeItem("refreshTokenTimestamp");
  };