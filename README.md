# Free-Food
October 2021
##The code contained in folder labeled "code" is an autohotkey script that scrapes emails of the day, and the python code named "filescript" is a script that loads email screenshot images of flyers to Google Cloud Storage.

##Currently this code is setup to just run on someone's perpetually running computer and run the individual scripts once per day.

##The code in text_detect is a javascript program that can take in images and create text objects for that image. It can then analyze wether or not that event contains free food.

##This is a work in progress,things left to do for us:
1. Get a functioning twitter bot that can tweet things from our Google cloud database.
2. Be able to process all images from Google cloud storage, currently text_detect can only analyze one image one at a time inputed manually.
3. Create a better email script that can scroll through emails, can currently only take images of part of email you can immediatley see.
4. Create a better email script that can actually pick the individual poster out of the email, or be able to get enough information from flyer text to tell time, date, and location.
