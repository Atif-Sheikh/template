import DirectusSDK from "@directus/sdk-js";

const client = new DirectusSDK();

export default class ProjectMiddleWare {
    
    static async GetMiddleData() {
        try{
            const savedToken = await window.sessionStorage.getItem("token");
            let data = await client.getItems('about', { 'access_token': savedToken });
            console.log(data, "MAAAAAAAAAAA KIIII");
            return data.data[0];
        }
        catch(err){
            console.log("MAAAAAAAAAAAAAAA KIIIIIIIIIIIIIIIII", err);
            throw err;
        }
    }
}