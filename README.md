# react-assignment

A project to calculate some statistical measures of the Wine Data Set... Make sure you have Node.js and npm/yarn installed before getting started.

## Installation

To install the project dependencies, run the following command:

yarn

## Usage

To start the project, use the following command:

yarn start

The application will be accessible at http://localhost:8000 in your web browser.

## This repo contains assigment based task.

Repo Link: https://github.com/abheyygupta396/Wine-Data-Set-Visualization-Task.git

## Check whole code on Branch

Branch: master

Important Points about application:

    Entry Point: index.tsx is the entry point for the application. It is followed by App.tsx, which is its child component. Both files are located in the src folder at the root of the application.

    Folder Structure:
    src (root folder)

    assets: Contains CSS files.

    common: Holds commonly used components.

    components: Contains both Flavanoids and Gamma components.
        These components receives data (array of alcohol data) and property (the property name for which statistics are calculated) as props.

    helpers: Includes a utils file with helper functions.
        1. measureDataSet Function:
        This function takes an array of alcohol data objects and a property name as input. It calculates the mean, median, and mode for each class of alcohol based on the provided property. The results are returned as an array of objects, where each object represents statistics for a specific class of alcohol.
        wineData: Stores a JSON file related to wine data.

    Webpack and tsConfig:
        The application uses Webpack for bundling and tsConfig for TypeScript configuration.

To use this code with your own data and properties, follow these steps:

    Replace the json file name wineData.json with your desired data. Each object in the array should represent an instance of alcohol data, and the properties of the object should match your dataset.

Screenshots attached for application:

![image](https://drive.google.com/uc?export=download&id=1m0WHlaVPJXoPZX-SWPjEr5YR6sYVikw1)
