import os

image_paths = []

for root, dirs, files in os.walk("certificates"):
    for file in files:
        if file.endswith(".png"):
            image_paths.append(os.path.join(root, file))
print(image_paths)