const images = ['', 'certificates/fuse.jpg', 'certificates/advanced_learning_algo.png', 'certificates/cnn.png', 'certificates/cs50ai.png', 'certificates/cs50w.png', 'certificates/dl.png', 'certificates/dl_badge.png', 'certificates/nn.png', 'certificates/rl.png', 'certificates/rl_and_recommendation.png', 'certificates/sequential.png', 'certificates/structuring_projects.png', 'certificates/supervised.png', 'certificates/tuning.png']

var current_index = 1;
var total_images = images.length;

document.addEventListener("DOMContentLoaded", function () {
    setInterval(update, 3000);

});

function show_image(index) {
    var image = document.createElement("img");
    image.src = images[index];
    image.className = "carousel-image";
    image.id = `certificate${index}`;
    document.getElementById("certificate_sec").appendChild(image);
}

function remove_image(index){
    if (document.getElementById(`certificate${index}`)){
        document.getElementById(`certificate${index}`).remove();
    }
}

function show_next_image() {
    remove_image(current_index);
    if (current_index == total_images - 1){
        current_index = 1;
    }else{
        current_index += 1;
    }
    show_image(current_index);
}

function show_previous_image() {
    remove_image(current_index);
    if (current_index == 1){
        current_index = total_images - 1;
    }else{
    current_index -= 1;
    }
    show_image(current_index);
}

function update(){
    console.log("running");
    if (current_index == 0){
        show_image(current_index + 1);
        current_index += 2;
        return;
    } else{
        remove_image(current_index);
        show_next_image();
    }
}

function show_all_images(){
    for (let i = 1; i < total_images; i++){
        var image = document.createElement("img");
        image.src = images[i];
        image.height = "200";
        image.width = "300";
        document.getElementById("all_certificates").appendChild(image);
    }
}