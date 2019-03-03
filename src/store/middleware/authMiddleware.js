import AuthActions from '../actions/authActions';
import DirectusSDK from "@directus/sdk-js";
import ProjectActions from '../actions/projectActions';

const client = new DirectusSDK();

export default class AuthMiddleWare {

    static async GetData(token) {
        try {
            // client.login({
            //     url: "https://api.fairweb.at/",
            //     project: "_",
            //     email: "public@fairweb.at",
            //     password: "Password1",
            //     persist: true,
            //     storage: window.localStorage,
            // })
            //     .then(({ token }) => {
            //         console.log(token, "token")
            //         window.sessionStorage.setItem("token", token);
            //     })
            //     .catch(error => console.error(error));
            // const savedToken = await window.sessionStorage.getItem("token");
            let data = await client.getItems('home', { 'access_token': token });
            console.log(data, "U DALDJKLSJDKL");
            return data.data[0];
        }
        catch (err) {
            console.log("ERRR", err);
            throw err;
        }
    }

    static async Login(obj) {
        try {
            let result = await client.login({
                url: "https://api.fairweb.at/",
                project: "_",
                email: obj.email,
                password: obj.password,
                persist: false,
                storage: window.localStorage,
            })
            if(result.token){
                return result.token;
            }
            console.log(result, "Chal jaaaaaaaaaaaaaaa")
            // .then(({ token }) => {
            //     console.log(token, "MAAAA KAAAAAAAAAAAAAA KUSSSSSSSSSSSSS")
            //     return token;
            //     // window.sessionStorage.setItem("token", token);
            //     // // if (token) {
            //     //     dispatch(ProjectActions.getMidData());
            //     // }
            //     // let data = await client.getItems('home', { 'access_token': token });
            // })
            // .catch(error => console.error(error, "MAAAAAAAA KAAAAAAAAAAA ERORRRRs"));
        }
        catch (err) {
            console.log(err, "ERROR");
            throw err;
        }
    }

    static checkAutCookieData() {
        return (dispatch) => {
            const cookieAuthenticated = window.sessionStorage.getItem("token");
            // const data = JSON.parse(localStorage.getItem('tabHandel'))
            console.log(cookieAuthenticated)
        }
    }

    static authenticate = async (data) => {
        let {
            username,
            password,
            // check
        } = data;
        // return await HttpService.post('/v1/auth', {
        //     username,
        //     password,
        // });
    };
};