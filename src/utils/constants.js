export const GOOGLE_API_KEY = "AIzaSyCh5UaK8PyHKSDhHEIlEoguy-LsNtDUEXI";
export const API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const API_VIDEO_DETAIL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" +
  GOOGLE_API_KEY;
// Authorization: Bearer[YOUR_ACCESS_TOKEN];
// Accept: application / json;
export const SEARCH_SUGGESTIONS =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const OFF_SET_LIMIT = 25;
