// console.log('Script loaded');

// const images = ['', 'certificates/fuse.jpg', 'certificates/advanced_learning_algo.png', 'certificates/cnn.png', 'certificates/cs50ai.png', 'certificates/cs50w.png', 'certificates/dl.png', 'certificates/dl_badge.png', 'certificates/nn.png', 'certificates/rl.png', 'certificates/rl_and_recommendation.png', 'certificates/sequential.png', 'certificates/structuring_projects.png', 'certificates/supervised.png', 'certificates/tuning.png']

// var current_index = 1;
// var total_images = images.length;

// document.addEventListener("DOMContentLoaded", function () {
//     setInterval(update, 3000);

// });

// function show_image(index) {
//     var image = document.createElement("img");
//     image.src = images[index];
//     image.className = "carousel-image";
//     image.id = `certificate${index}`;
//     document.getElementById("certificate_sec").appendChild(image);
// }

// function remove_image(index){
//     if (document.getElementById(`certificate${index}`)){
//         document.getElementById(`certificate${index}`).remove();
//     }
// }

// function show_next_image() {
//     remove_image(current_index);
//     if (current_index == total_images - 1){
//         current_index = 1;
//     }else{
//         current_index += 1;
//     }
//     show_image(current_index);
// }

// function show_previous_image() {
//     remove_image(current_index);
//     if (current_index == 1){
//         current_index = total_images - 1;
//     }else{
//     current_index -= 1;
//     }
//     show_image(current_index);
// }

// function update(){
//     console.log("running");
//     if (current_index == 0){
//         show_image(current_index + 1);
//         current_index += 2;
//         return;
//     } else{
//         remove_image(current_index);
//         show_next_image();
//     }
// }

// function show_all_images(){
//     for (let i = 1; i < total_images; i++){
//         var image = document.createElement("img");
//         image.src = images[i];
//         image.height = "200";
//         image.width = "300";
//         document.getElementById("all_certificates").appendChild(image);
//     }
// }

// Define socialLinks in the global scope
const socialLinks = [
    { href: "https://www.github.com/thenaivekid", src: "assests/github.webp", alt: "GitHub" },
    { href: "https://www.linkedin.com/in/ashok-neupane-156959232/", src: "assests/linkedin.svg", alt: "LinkedIn" },
    { href: "https://twitter.com/AshokNe13288337", src: "assests/twitter.png", alt: "Twitter" },
    { href: "https://www.facebook.com/ashok.neupane.5473", src: "assests/fb.webp", alt: "Facebook" },
    { href: "https://www.instagram.com/ashoktheoverman/", src: "assests/instagram.svg", alt: "Instagram" },
];

function createSocialLinks() {
    console.log('Creating social links');
    const container = document.getElementById('social-links');
    if (!container) {
        console.error('Social links container not found');
        return;
    }
    console.log('Container found:', container);

    socialLinks.forEach((link, index) => {
        console.log(`Creating link ${index + 1}:`, link);
        const a = document.createElement('a');
        a.href = link.href;
        a.className = "mr-5 text-white";
        a.target = link.download ? "_self" : "_blank";
        if (link.download) a.download = "";

        const img = document.createElement('img');
        img.src = link.src;
        img.alt = link.alt;
        img.style.height = "30px";
        img.loading = "lazy";

        a.appendChild(img);
        container.appendChild(a);
        console.log(`Link ${index + 1} created and appended`);
    });

    console.log('All links created');
}

// Define interests
const interests = {
    personal: ['Reading books', 'Travelling', 'Hiking'],
    technical: ['Machine Learning', 'Data Science', 'Cool innovative software products']
};

function createInterestsSection() {
    const container = document.getElementById('interests');
    if (!container) {
        console.error('Interests container not found');
        return;
    }

    const personalInterests = document.createElement('p');
    personalInterests.className = 'text-white mb-2';
    personalInterests.textContent = `Personal Interests: ${interests.personal.join(', ')}`;
    container.appendChild(personalInterests);

    const technicalInterests = document.createElement('p');
    technicalInterests.className = 'text-white';
    technicalInterests.textContent = `Technical Interests: ${interests.technical.join(', ')}`;
    container.appendChild(technicalInterests);
}

const educationData = [
    {
        image: "assests/pulchowk.jpg",
        title: "Bachelor in Engineering, Computer",
        institution: "Pulchowk Engineering College",
        link: "https://pcampus.edu.np/"
    },
    {
        image: "assests/xavier.jpg",
        title: "High School, Science",
        institution: "St. Xavier's College",
        link: "https://www.sxc.edu.np/"
    },
    {
        image: "assests/school.png",
        title: "School",
        institution: "Shree Indrenee Vidhya Mandir",
        link: null
    },
    {
        image: "assests/fuse.png",
        title: "AI Fellowship",
        institution: "Fuse Machine",
        link: null
    },
    {
        image: "assests/cs50.jpg",
        title: "CS50's AI",
        institution: "Harvard University",
        link: null
    },
    {
        image: "assests/cs50.jpg",
        title: "CS50's Web development",
        institution: "Harvard University",
        link: null
    },
    {
        image: "assests/deep.png",
        title: "Machine Learning and Deep Learning",
        institution: "Stanford University",
        link: null
    }
];

function createEducationCards() {
    const container = document.getElementById('education-container');
    if (!container) {
        console.error('Education container not found');
        return;
    }

    educationData.forEach(edu => {
        const card = document.createElement('div');
        card.className = "custom_card max-w-md mx-auto bg-[rgb(26,27,27)] rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-500 ease-in-out p-4 mb-4 cursor-pointer";
        card.style.width = "calc(33.333% - 1rem)";

        if (edu.link) {
            card.onclick = () => window.open(edu.link, '_blank');
        }

        card.innerHTML = `
            <div class="md:flex grayscale hover:grayscale-0 h-full">
                <div class="md:flex-shrink-0">
                    <img class="h-48 w-full object-cover md:w-48 aspect-square object-contain" src="${edu.image}" alt="${edu.title}">
                </div>
                <div class="p-4 flex flex-col justify-center">
                    <div class="text-center uppercase tracking-wide text-sm text-white font-semibold">${edu.title}</div>
                    <div class="text-center block mt-1 text-lg leading-tight font-medium text-white">${edu.institution}</div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

const projectsData = [
    {
        category: "ml, mobile app",
        name: "Face Recognition App",
        description: "Face recognition mobile app with custom trained siamese neural network",
        hosted_link: "",
        colaborators: "Anil Shrestha, Jeevan Neupane",
        code_link: "https://github.com/thenaivekid/Face-recognition-mobile-app",
        image: "projects/siamese_nn.png",
        video_demo_link: ""
    },
    {
        category: "Front end",
        name: "Study Tracker",
        description: "A simple web app to track study patterns and durations during exam season.",
        hosted_link: "https://thenaivekid.github.io/study-tracker/",
        colaborators: "",
        code_link: "https://github.com/thenaivekid/study-tracker",
        image: "projects/Screenshot (379).png",
        video_demo_link: ""
    },
    {
        category: "Data Science",
        name: "Queue Management System Data Science",
        description: "SQL queries to efficiently retrieve data, data extraction, EDA, visualization",
        hosted_link: "",
        colaborators: "",
        code_link: "https://github.com/thenaivekid/Queue-Management-System-Data-Science",
        image: "projects/service_x_counter_summary.png, projects/queue_viz.png",
        video_demo_link: ""
    },
    {
        category: "Data Science, Survey",
        name: "AI in Engineering Education, Pulchowk Campus",
        description: "Use of AI tools by students",
        hosted_link: "",
        colaborators: "",
        code_link: "",
        image: "projects/ai_er.png",
        video_demo_link: ""
    },
    {
        category: "ml, mobile app",
        name: "Easy Reports",
        description: "Medical document simplifier",
        hosted_link: "",
        colaborators: "Sadhana Panthi",
        code_link: "",
        image: "projects/easy_reports.png",
        video_demo_link: "https://www.youtube.com/watch?v=3A_vL0BVWR0"
    },
    {
        category: "ML",
        name: "Transformer Text to Speech from scratch",
        description: "",
        hosted_link: "",
        colaborators: "Dipan Bartaula",
        code_link: "https://github.com/thenaivekid/Transformer-text-to-speech-from-scrach",
        image: "projects/Transformer_text_to_speech.png",
        video_demo_link: ""
    },
    {
        category: "ML, Web app",
        name: "InfluencerInsight",
        description: "A web app to analyze social media comments using BERT deep learning model.",
        hosted_link: "",
        colaborators: "Anil Shrestha, Jeevan Neupane",
        code_link: "",
        image: "projects/Screenshot-2019-03-11-12.31.44.png",
        video_demo_link: ""
    },
    {
        category: "ML, Web app",
        name: "E-Gunaso",
        description: "Quora-like app to find similar complaints about government offices.",
        hosted_link: "",
        colaborators: "Anil Shrestha, Jeevan Neupane, Sadhana Panthi",
        code_link: "",
        image: "projects/comment-opinion-review-support.png",
        video_demo_link: ""
    },
    {
        category: "ml, mobile app",
        name: "VeggieTrends",
        description: "Trend analysis and prediction of vegetable prices and production.",
        hosted_link: "",
        colaborators: "Sadhana Panthi",
        code_link: "",
        image: "projects/veggie.png",
        video_demo_link: ""
    },
    {
        category: "C++, OOP",
        name: "Zippe",
        description: "File compression desktop app using Huffman and LZ encoding.",
        hosted_link: "",
        colaborators: "Anil Shrestha, Jeevan Neupane",
        code_link: "https://github.com/thenaivekid/Zippe",
        image: "projects/zippe_compression.png",
        video_demo_link: ""
    },
    {
        category: "ML, Web app",
        name: "BalenAI",
        description: "Real-time AI app to detect smoking through CCTV and alert authorities.",
        hosted_link: "",
        colaborators: "Anil Shrestha, Jeevan Neupane, Sadhana Panthi",
        code_link: "",
        image: "projects/balen_ai_smoking_detection.png",
        video_demo_link: ""
    },
    {
        category: "ML, Web app",
        name: "Autograder",
        description: "Automatically grade and comment on student assignments.",
        hosted_link: "",
        colaborators: "Jeevan Neupane, Sadhana Panthi",
        code_link: "https://github.com/thenaivekid/autograder",
        image: "projects/autograder_gradescope.png",
        video_demo_link: ""
    },
    {
        category: "Front end",
        name: "Infinitely Nested Comments",
        description: "",
        hosted_link: "",
        colaborators: "",
        code_link: "https://github.com/thenaivekid/reddit-comments",
        image: "projects/reddit_comments.png",
        video_demo_link: ""
    },
    {
        category: "ML, Web app",
        name: "Nepali OCR",
        description: "Letter segmentation using classic algorithms and trained image classifiers.",
        hosted_link: "",
        colaborators: "",
        code_link: "https://github.com/thenaivekid/Nepali-OCR",
        image: "projects/nepali_ocr.png",
        video_demo_link: ""
    },
    {
        category: "ML",
        name: "Speech Master",
        description: "Audio and video sentiment analysis tool for actor training.",
        hosted_link: "",
        colaborators: "Sadhana Panthi",
        code_link: "",
        image: "projects/speech_master.png",
        video_demo_link: ""
    },
    {
        category: "ML",
        name: "Neural Coloring",
        description: "Turning black and white images into colorful images using UNET CNN.",
        hosted_link: "",
        colaborators: "",
        code_link: "https://github.com/thenaivekid/B-W-horses-to-Colorful-horse",
        image: "projects/neural_coloring.png",
        video_demo_link: ""
    },
    {
        category: "Web app",
        name: "AatmaPrem",
        description: "A self-love website for personal improvement and journaling.",
        hosted_link: "",
        colaborators: "",
        code_link: "",
        image: "projects/aatma_prem.png",
        video_demo_link: ""
    },
    {
        category: "ML, Web app",
        name: "Olympic Sentiment Analysis",
        description: "Sentiment analysis from scratch using transformer for Tokyo Olympics 2021 tweets.",
        hosted_link: "",
        colaborators: "Sadhana Panthi",
        code_link: "https://github.com/thenaivekid/olympic-sentiment-analysis",
        image: "projects/olympic_sentiment_analysis.png",
        video_demo_link: "https://youtu.be/5lwiuEWD7ko"
    },
    {
        category: "ML, Web app",
        name: "House Price Prediction in Kathmandu Valley",
        description: "House price prediction using class ML models.",
        hosted_link: "",
        colaborators: "Anuj Gupta",
        code_link: "https://github.com/thenaivekid/House-Price-Prediction",
        image: "projects/house_price_prediction.png",
        video_demo_link: ""
    }
];

function createProjectCards() {
    const container = document.getElementById('projects-container');
    if (!container) {
        console.error('Projects container not found');
        return;
    }

    projectsData.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = "custom_card max-w-md mx-auto bg-[rgb(26,27,27)] rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-500 ease-in-out p-4 mb-4 cursor-pointer";
        card.style.width = "calc(33.333% - 1rem)";

        card.onclick = () => window.location.href = `project-detail.html?id=${index}`;

        card.innerHTML = `
            <div class="h-full flex flex-col">
                <div class="flex-shrink-0">
                    <img class="w-full h-48 object-cover" src="${project.image}" alt="${project.name}">
                </div>
                <div class="p-4 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 class="text-xl font-semibold text-white mb-2">${project.name}</h3>
                        <p class="text-sm text-gray-400">${project.category}</p>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// Make sure this line is present at the end of your scripts.js file
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
    createSocialLinks();
    createInterestsSection();
    createEducationCards();
    createProjectCards();
});