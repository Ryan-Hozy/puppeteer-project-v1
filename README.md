This project demonstrates how to use Puppeteer in conjunction with Node.js to automate web interactions and extract data from a sample website. The script performs various tasks such as navigating to a webpage, extracting text and image data, interacting with page elements, and saving data to local files. Additionally, it uses node-cron to schedule the script to run at regular intervals.

**Features**

- Web Navigation:
Launches a headless Chromium browser using Puppeteer.
Navigates to a sample practice website.

- Data Extraction:
Extracts text content from specific DOM elements.
Saves extracted names to a names.txt file.
Retrieves image URLs from the page.
Downloads images and saves them locally.

- Web Interaction:
Clicks on buttons and waits for content to load.
Inputs text into form fields and submits forms.
Handles page navigation and waits for responses.
Logs messages and data to the console.

- Automation Scheduling:
Utilizes node-cron to schedule the script to run every 5 seconds.

**Technologies Used**
1. Node.js: JavaScript runtime environment.
2. Puppeteer: Node library for controlling headless Chrome or Chromium.
3. node-cron: Cron-like job scheduling for Node.js.
4. fs/promises: File system module with promise-based API for handling file operations.


**Prerequisites**
Node.js installed on your machine.
npm (Node Package Manager) for installing dependencies.
