import conf from '../conf/conf';
import { Client, Databases, Storage, Query, ID } from 'appwrite';

export class DataBaseServices {
    client = new Client();
    databases;
    storage;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
                console.log("Appwrite::Config::createPost Method Error: ", error);
            }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                     title,
                     content,
                     featuredImage,
                     status
                }
            )
        } catch (error) {
            console.log("Appwrite::Config::updatePost Method Error: ", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite::Config::deletePost Method Error: ", error);
            return false;
        }
    }
    async getPost(slug){
        try {
           return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite::Config::getPost Method Error: ", error);
            return false;
        }
    }
    async getActivePosts(queries=[Query.equal('status','active')]){
        try {
           return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
            
        } catch (error) {
            console.log("Appwrite::Config::getActivePosts Method Error: ", error);
            return false;
        }
    }

    async fileUpload(file){
        try {
            await this.storage.createFile(
                conf.appwriteBuckId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite::Config::fileUpload Method Error: ", error);
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBuckId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite::Config::deleteFile Method Error: ", error);
            return false;
        }
    }
    async filePreview(fileId){
        try {
            await this.storage.getFilePreview(
                conf.appwriteBuckId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite::Config::filePreview Method Error: ", error);
            return false;
        }
    }
}

const databaseServ = new DataBaseServices();

export default databaseServ;