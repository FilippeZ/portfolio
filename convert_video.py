import cv2
import os
import re
import numpy as np

def sort_key(s):
    # Extract the trailing number from the filename (e.g., _079.jpg -> 79)
    match = re.search(r'_(\d+)\.jpg$', s)
    return int(match.group(1)) if match else s

def imread_unicode(path):
    # Read image from non-ASCII path
    with open(path, "rb") as f:
        bytes = bytearray(f.read())
        numpyarray = np.asarray(bytes, dtype=np.uint8)
        return cv2.imdecode(numpyarray, cv2.IMREAD_UNCHANGED)

def convert_images_to_video(image_folder, video_name, fps=30):
    images = [img for img in os.listdir(image_folder) if img.endswith(".jpg")]
    images.sort(key=sort_key)

    if not images:
        print("No images found in the folder.")
        return

    frame = imread_unicode(os.path.join(image_folder, images[0]))
    if frame is None:
        print(f"Failed to read the first image: {images[0]}")
        return
        
    height, width, layers = frame.shape

    # Use 'mp4v' for MP4
    fourcc = cv2.VideoWriter_fourcc(*'mp4v') 
    video = cv2.VideoWriter(video_name, fourcc, fps, (width, height))

    for image in images:
        img_path = os.path.join(image_folder, image)
        img = imread_unicode(img_path)
        if img is not None:
            video.write(img)
        else:
            print(f"Skipping unreadable image: {image}")

    cv2.destroyAllWindows()
    video.release()
    print(f"Video saved as {video_name}")

if __name__ == "__main__":
    image_folder = r"c:\Users\wwefi\OneDrive\Υπολογιστής\portfolio\login_background"
    video_name = r"c:\Users\wwefi\OneDrive\Υπολογιστής\portfolio\frontend\public\resources\login_bg.mp4"
    if not os.path.exists(os.path.dirname(video_name)):
        os.makedirs(os.path.dirname(video_name))
    convert_images_to_video(image_folder, video_name)
