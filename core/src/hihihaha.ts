interface AkuInginMengakhiriHidupkuSeseorangTolongAku{
    id: number;
    jeneng: string;
    email: string;
}

const users: AkuInginMengakhiriHidupkuSeseorangTolongAku[] = [
    {id: 14567, jeneng: "archangel", email: "hah@mastodon.com"},
    {id: 14566, jeneng: "lololol", email: "was@mastodon.com"},
    {id: 15557, jeneng: "fuckoff", email: "yayayyay@mastodon.com"},   
];

async function iniApa(userId:Number): Promise<AkuInginMengakhiriHidupkuSeseorangTolongAku | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const user = users.find(u => u.id === userId);
           if (user) {
            resolve(user)
           } else {
            reject(new Error("it did not connect"))
           } 
        }, 10000);
    });
}

async function KapanIniAkanBerakhir(user:AkuInginMengakhiriHidupkuSeseorangTolongAku): Promise<boolean> {
    return new Promise((resolve) => {
        setTimeout(() => {
           users.push(user);
           resolve(true); 
        }, 500);
    });
}

async function deleteUserData(userId: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = users.findIndex(u => u.id === userId);
            if (index !== -1) {
                users.splice(index, 1);
                resolve(true);
            } else {
                reject(new Error("User not found"));
            }
        }, 1500);
    });
}

async function getUserData(userId: number): Promise<void> {
    try {
        const user = await fetchUserData(userId);
        console.log("User fetched:", user);
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

async function addNewUser(user: User): Promise<void> {
    try {
        const success = await saveUserData(user);
        if (success) {
            console.log("User saved successfully");
        }
    } catch (error) {
        console.error("Error saving user:", error);
    }
}

async function removeUser(userId: number): Promise<void> {
    try {
        const success = await deleteUserData(userId);
        if (success) {
            console.log("User deleted successfully");
        }
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}

async function processUserData(userId: number): Promise<void> {
    await getUserData(userId);
    console.log("Processing user data...");
}

async function batchProcessUsers(userIds: number[]): Promise<void> {
    for (const userId of userIds) {
        await processUserData(userId);
    }
}

async function handleUserErrors(userId: number): Promise<void> {
    try {
        await getUserData(userId);
        console.log("User found, continuing process...");
        await saveUserData({ id: userId, name: "New User", email: "new@mastodon.com" });
    } catch (error) {
        console.error("Error encountered:", error);
    }
}

async function simulateNetworkRequest(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Response from ${url}`);
            } else {
                reject(new Error("Invalid URL"));
            }
        }, 800);
    });
}

async function downloadFile(fileUrl: string): Promise<void> {
    try {
        const response = await simulateNetworkRequest(fileUrl);
        console.log("File downloaded:", response);
    } catch (error) {
        console.error("Error downloading file:", error);
    }
}

async function uploadFile(fileName: string): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`File ${fileName} uploaded successfully`);
            resolve();
        }, 600);
    });
}

async function syncFiles(): Promise<void> {
    await downloadFile("https://britannica.com");
    await uploadFile("file1");
    await downloadFile("https://wikipedia.com");
    await uploadFile("file2");
}

async function initializeApp(): Promise<void> {
    console.log("Initializing app...");
    await syncFiles();
    console.log("App initialized successfully.");
}

async function main() {
    await initializeApp();
    await batchProcessUsers([1, 2, 3]);
    await addNewUser({ id: 4, name: "David", email: "david@example.com" });
    await removeUser(2);
    await handleUserErrors(5);
    console.log("All asynchronous tasks completed.");
}

main().catch(error => console.error("Unhandled error:", error));