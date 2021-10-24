import os
path = '/Users/will/OneDrive - AXICOM Inc/Pictures/Screenshots'
files = os.listdir(path)
for f in files:
    input = "gsutil cp " +'/Users/will/"OneDrive - AXICOM Inc"/Pictures/Screenshots/"' + f + '" gs://potential-flyers/images'
    print(input)
    os.system(input)
