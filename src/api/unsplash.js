import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 8fba2aa478d218d2f147b5c23e8325b693a6952c4f31b069877088449d2ec4dd'
    }
});