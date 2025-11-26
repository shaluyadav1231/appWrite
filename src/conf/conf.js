const conf ={
    appwriteUrl: stringify(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: stringify(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: stringify(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: stringify(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: stringify(import.meta.env.VITE_BUCKET_ID)
}


export default conf