> *Note: because these instructions have public access, no log-in detail will be disclosed. For that, please get in touch with: jacob.wyatt@stonex.com*

# How to properly use the Display Banner system

In this short guide, I'll explain the process of uploading the display banner's web visualization.

The platforms used are:

- [Figma](https://www.figma.com) (to create the banners)
- [Bannerify](https://www.figma.com/community/plugin/796124491692147799/Bannerify-Banner-Studio) (plugin for Figma, to export the banners)
- [Netlify](https://www.netlify.com) (to host the site)
- [GitHub](https://github.com) (to host the banners themself)
- [GitHub Desktop](https://desktop.github.com) (to upload the banners on the server)
- [Excel link generator](https://intlfcstone.sharepoint.com/:x:/s/CityIndexRebrand/EbK-k6lUFdtKtb8AS6dX6_QBj3VcHnAyWxJ1VsX6U9236Q?e=sADceO) (a specific file to generate the links for the banners)
- [Brackets](https://brackets.io) (or any HTML editor to add the new links)
<br/><br/>
<img src="https://github.com/root-stone-x/site-elements/blob/6d01bfb85853bdb872e10ff61aacb0acb32b8c9a/readme-imgs/site-pipeline-v4.png" width="2000" title="Bannerify export settings">

> Here above, a diagram of the pipeline.

# Exporting from Bannerify

Export the .zip file from Figma using these settings:

<img src="https://github.com/root-stone-x/site-elements/blob/c3b0e97bf1d43d3e68897d1cf8e4044a3d02294f/readme-imgs/readme-img-001.png" width="600" title="Bannerify export settings">

> *Note: the .webp image format is not supported, and you can play around with the target file-size limit according to the final result.*

# Naming the file

Once exported, the .zip file from Bannerify needs to be named. I've created [this file](https://intlfcstone.sharepoint.com/:x:/s/CityIndexRebrand/EbK-k6lUFdtKtb8AS6dX6_QBj3VcHnAyWxJ1VsX6U9236Q?e=sADceO) for:
- keeping track of all the work produced
- keeping a better consistency of the file's name
- generating the HTML links 

It's fundamental to name the files with the region's suffix from the drop-down menu on the Excel file.

As shown in the picture below, choose the region from the drop-down menu, place the working name and copy the file name from the cell "file name".

<img src="https://github.com/root-stone-x/site-elements/blob/5f748a3606a6b0de1cdc36b43b2389bb8c950931/readme-imgs/readme-img-002.png" width="600" title="Bannerify export settings">

> *Note: if no region is selected, 'UK' will be attributed by default.* 

Once the file is named, unzip it, and delete the two subfolders *_backups* and *_zips*. You will now have the .zip file and the folder with the same name; these two are ready to be placed in the GitHub folder and pushed to the repository.

# Pushing the file in the GitHub repository

Copy and paste the two elements (.zip folder and unzipped folder) into the correct region. Replace the files if updating an existing set of banners.

Once replaced the files, write a minimal description of the change and hit --> *Commit to* ***main*** as shown in the following picture:

<img src="https://github.com/root-stone-x/site-elements/blob/fd866e978a3aa350060e6d9570df3bf0233c76a8/readme-imgs/readme-img-003.png" width="600" title="Bannerify export settings">

Upload the changes by pressing --> *Push origin*, as in the picture below.

<img src="https://github.com/root-stone-x/site-elements/blob/fd866e978a3aa350060e6d9570df3bf0233c76a8/readme-imgs/readme-img-004.jpg" width="600" title="Bannerify export settings">

If no errors have occurred, all the files are uploaded. 

> *Note: the GitHub servers take five minutes on average to update.*

# Updating the web page
Assuming you don't have the offline static website, let's get it from Netlify. 

Log in Netlify, select the site named --> *web-banners-home* and follow the instruction of [this video](https://www.youtube.com/watch?v=G51nwe0vWNQ).

Once you have the static website, use [Brackets](https://brackets.io) (or any HTML editor) to copy the Ginormous link/s automatically generated in the [Excel link generator](https://intlfcstone.sharepoint.com/:x:/s/CityIndexRebrand/EbK-k6lUFdtKtb8AS6dX6_QBj3VcHnAyWxJ1VsX6U9236Q?e=sADceO), paste it/them in the region's HTML page.

Save the HTML file. The 'general-site' folder is now ready to be deployed on [Netlify](https://www.netlify.com). 

Drag & drop the 'general-site' folder into the --> *Deploy* tab in Netlify.

<img src="https://github.com/root-stone-x/site-elements/blob/d96a620fa1c782e7bfef5301057f722b66bacad2/readme-imgs/readme-img-006.png" width="600" title="Bannerify export settings">

# Testing
The banners and the site should be up and running. As mentioned before, wait about five minutes for the servers to update; sometimes may take more. If it takes too long, the most common issues are:
- The Deltas of GitHub didn't resolve; this problem often occurs when the delivery load is too big. The problem is related to the single file sizes being either too large or too many files are being uploaded at once.
- Clear the browser cache and reload the banners.
- Will sound mundane but still worth mentioning that you likely uploaded the wrong files. Easy fix.
