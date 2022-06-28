# How to properly use the Display Banner system
In this short guide, I'll explain the process of uploading ad taking proper care of the display banner's web visualization.

The platforms used will be:

- [Figma](https://www.figma.com) (to create the banners)
- [Bannerify](https://www.figma.com/community/plugin/796124491692147799/Bannerify-Banner-Studio) (plugin for Figma, to export the banners)
- [Netlify](https://www.netlify.com) (to host the site)
- [GitHub](https://github.com) (to host the banners themself)
- [GitHub Desktop](https://desktop.github.com) (to upload the banners on the server)
- [Excel link generator](https://intlfcstone.sharepoint.com/:x:/s/CityIndexRebrand/EbK-k6lUFdtKtb8AS6dX6_QBj3VcHnAyWxJ1VsX6U9236Q?e=sADceO) (a specific file to generate the links for the banners)
- [Brackets](https://brackets.io) (or any HTML editor to add the new links)

# Exporting from Bannerify
Export the .zip file from Figma using these settings:

<img src="https://github.com/root-stone-x/site-elements/blob/c3b0e97bf1d43d3e68897d1cf8e4044a3d02294f/readme-imgs/readme-img-001.png" width="600" title="Bannerify export settings">

> *Note: for the moment the .webp image format is not supported by the dev team and the file size may vary.*

# Naming the file
Once the .zip file has been exported from Bannerify, needs to be named. Here is important to keep a good consistency. For this reason, I've created [this file](https://intlfcstone.sharepoint.com/:x:/s/CityIndexRebrand/EbK-k6lUFdtKtb8AS6dX6_QBj3VcHnAyWxJ1VsX6U9236Q?e=sADceO) for keeping track of all the work created, for keeping a better consistency of the file name and for generating automatically the link.
It's important to name the files with the region's suffix from the drop-down menu on the Excel file:
- CIAU (Australia)
- CISG (Singapore)
- CIUK (United Kingdom)

Like shown in thepicture below, choose the region from the drop-down menu, place the work name and copy the file name from the cell.

<img src="https://github.com/root-stone-x/site-elements/blob/5f748a3606a6b0de1cdc36b43b2389bb8c950931/readme-imgs/readme-img-002.png" width="600" title="Bannerify export settings">

# Placing the file in the GitHub repository
Once the file is properly named, must be unzeipped and the two subfolders *_backups* and *_zips* must be deleted. You will now have the .zip file and the folder with the same name; these two are now ready to be placed in the GitHub folder and pushed to the repository.

Copy and paste the two elements (.zip folder and unzipped folder) into the correct region region. In case you are updating an existing banner set, just replace the files.

Once the files are replaced, write a minimal description of the change and hit 










