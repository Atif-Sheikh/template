import DirectusSDK from "@directus/sdk-js";

const client = new DirectusSDK();

export default class ProjectMiddleWare {
    
    static async GetMiddleData() {
        try{
            const savedToken = await window.sessionStorage.getItem("token");
            let data = await client.getItems('about', { 'access_token': savedToken });
            return data.data[0];
        }
        catch(err){
            throw err;
        }
    }
}