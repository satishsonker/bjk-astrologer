import axios from "axios";
const apiBaseUrl = process.env.REACT_APP_API_URL;
const headers = {
    'Access-Control-Allow-Origin': "*"
}
const apiUrlData = require('./apiUrl');
export const Api = {
    "Post": (url, data) => {
        if (data) {
            return axios.post(apiBaseUrl + url, data, {
                headers:  {
                    'Access-Control-Allow-Origin': "*"
                }
            });
        }
        else {
            throw new Error("Pass Data Object");
        }
    },
    "Put": (url, data) => {
        if (data) {
            return axios.put(apiBaseUrl + url, data, {
                headers:  {
                    'Access-Control-Allow-Origin': "*"
                }
            });
        }
        else {
            throw new Error("Pass Data Object");
        }
    }, 
    "Delete": (url) => {
        return axios.delete(apiBaseUrl + url, {
            headers:  {
                'Access-Control-Allow-Origin': "*"
            }
        });
    }, 
    "Get": (url, useDefault) => {
        let head=useDefault !== undefined && useDefault !== null && !useDefault?{}: {
            'Access-Control-Allow-Origin': "*"
        };
        if (apiUrlData.userLocation === url) {
        }
        return axios.get((useDefault !== undefined && useDefault !== null && !useDefault ? '' : apiBaseUrl) + url, {
            headers: head
        });
    },
    MultiCall:(promises)=>{ //Array of Promises
        return axios.all(promises);
    }
}
axios.interceptors.response.use(
    (res) => {
       // Add configurations here
       if (res.status === 200) {
          console.log('Posted Successfully');
       }
       return res;
    },
    (err) => {
       return Promise.reject(err);
    }
 );
