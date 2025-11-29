import conf from '.../conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
     client = new Client();
     Account;

     constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.Account = new Account(this.client)    
     }

     async createAccount ({email, password, name}){
        try{
           const userAccount=await this.account.create(ID.unique(), email, password, name)
           if (userAccount){
            //call another method
           }else {
            return userAccount;
           }
        }catch (error) {
            throw error;
        }
     }
}


const authService = new AuthService();

export default AuthService

