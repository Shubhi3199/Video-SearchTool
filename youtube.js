import axios from 'axios';     //for youtube api related queries go to bookmarks
                               //or youtube search API (google it)

const KEY='AIzaSyA1QxzflgPzYLSCrRx88UygsYYHM-cdoKA';

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params:{
            part:'snippet',
            maxResults: 5,
            key: KEY

        }
    }
);
