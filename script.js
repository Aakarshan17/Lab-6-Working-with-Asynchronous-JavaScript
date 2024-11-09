// Simulated data fetching functions .

function fetchUserProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("User profile retrieved") : reject("Failed to fetch user profile");
        }, 1000);
    });
}

function fetchUserPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Posts retrieved") : reject("Failed to fetch posts");
        }, 1500);
    });
}

function fetchComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Comments retrieved") : reject("Failed to fetch comments");
        }, 1200);
    });
}

//sequential data fetching with async,await.

async function fetchSequentially() {
    try {
        console.log(await fetchUserProfile());
        console.log(await fetchUserPosts());
        console.log(await fetchComments());
        console.log("Sequential data fetching completed.");
    } catch (error) {
        console.error("Sequential fetch error:", error);
    }
}

// Parallel data fetching with async/await.

async function fetchInParallel() {
    try {
        const results = await Promise.all([
            fetchUserProfile(),
            fetchUserPosts(),
            fetchComments()
        ]);
        results.forEach(result => console.log(result));
        console.log("Parallel data fetching completed.");
    } catch (error) {
        console.error("Parallel fetch error:", error);
    }
}

// Chaining async functions to fetch all data in sequence and log each step..

async function getUserContent() {
    console.log("Starting data retrieval...");
    try {
        const userProfile = await fetchUserProfile();
        console.log(userProfile);

        const userPosts = await fetchUserPosts();
        console.log(userPosts);

        const comments = await fetchComments();
        console.log(comments);

        console.log("All data fetched successfully.");
    } catch (error) {
        console.error("Error during data retrieval:", error);
    }
}

// Testing
fetchSequentially();
fetchInParallel();
getUserContent();