import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(


        "64b5dde311bafcec9586",
        ID.unique(),
        file
    );

    return fileUploaded;
}

export default uploadImage