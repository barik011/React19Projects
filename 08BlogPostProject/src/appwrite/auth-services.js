import conf from '../conf/conf'
import {Client,Account,ID} from 'appwrite'

export class AuthServ { 

    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create({id:ID.unique(),email,password,name});
            if(userAccount){
                this.login({email,password})
            }
            else{
                return userAccount;
            }
        } catch (error) {
            console.log("Create Account Method Error: ", error);
        }

    }

    async login({email,password}) {
        try {
            return await this.account.createEmailPasswordSession({email,password})
        } catch (error) {
            console.log("Login Method Error: ", error)
        }
    }
    async getCurrentUser(){
        try {
            const userData = await this.account.get();
            return userData;
        } catch (error) {
            console.log("getCurrentUser Method Error: ", error)
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions
            
        } catch (error) {
            console.log("Logout Method Error: ",error)
            
        }
    }
}

const authServ = new AuthServ();

export default authServ;
