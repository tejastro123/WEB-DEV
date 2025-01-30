document.addEventListener("DOMContentLoaded", () => {
    const rewatchBtn = document.getElementById("rewatch-btn");
    const videoContainer = document.getElementById("video-container");
    const closeVideoBtn = document.getElementById("close-video");

    rewatchBtn.addEventListener("click", () => {
        videoContainer.style.display = "block";
    });

    closeVideoBtn.addEventListener("click", () => {
        videoContainer.style.display = "none";
    });
});
