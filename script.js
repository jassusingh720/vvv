// Page loading animation
window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
});

// Sample video data
const videos = [
    { title: "Funny Cats", category: "comedy", src: "videos/cat.mp4" },
    { title: "Learn JavaScript", category: "education", src: "videos/js.mp4" },
    { title: "Relaxing Music", category: "music", src: "videos/music.mp4" }
];

let currentPage = 1;
const videosPerPage = 2;

// Render Videos
function renderVideos(page = 1) {
    const container = document.getElementById('video-container');
    container.innerHTML = "";

    const start = (page - 1) * videosPerPage;
    const end = start + videosPerPage;

    const currentVideos = videos.slice(start, end);

    currentVideos.forEach((video, index) => {
        container.innerHTML += `
        <div class="video-card">
            <video src="${video.src}" controls></video>
            <div class="video-info">
                <h4>${video.title}</h4>
                <div class="like-dislike">
                    <button onclick="likeVideo(${index})">👍 Like</button>
                    <button onclick="dislikeVideo(${index})">👎 Dislike</button>
                </div>
            </div>
        </div>`;
    });

    renderPagination();
}

// Pagination
function renderPagination() {
    const totalPages = Math.ceil(videos.length / videosPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
            <button onclick="renderVideos(${i})">${i}</button>
        `;
    }
}

// Search Functionality
document.getElementById('search').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = videos.filter(video => video.title.toLowerCase().includes(term));
    displayVideos(filtered);
});

function displayVideos(videoList) {
    const container = document.getElementById('video-container');
    container.innerHTML = "";

    videoList.forEach((video, index) => {
        container.innerHTML += `
        <div class="video-card">
            <video src="${video.src}" controls></video>
            <div class="video-info">
                <h4>${video.title}</h4>
            </div>
        </div>`;
    });
}

// Like/Dislike Buttons
function likeVideo(index) {
    alert(`Liked Video: ${videos[index].title}`);
}
function dislikeVideo(index) {
    alert(`Disliked Video: ${videos[index].title}`);
}

// Smooth Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Floating Back-to-Top
window.onscroll = () => {
    document.getElementById('back-to-top').style.display = window.scrollY > 300 ? 'block' : 'none';
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

renderVideos();
