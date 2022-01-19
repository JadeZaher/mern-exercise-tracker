# Creating a Fullstack Session Tracker Application
The goal is to use the MERN stack to build a personal exercise and health tracker.
Passport w google oAuth for authentication, web-push for notifications, cron for task scheduling,
send mail for email management, aws s3 for media storage, D3 for data visualization

## MongoDB as a locally or cloud hosted database
Schemas - 
Users: UsernameID, Display Name, Profile Picture
Exercises: UsernameID, Duration, Intensity, Description
Diet: UsernameID, Meal Description, Calories, Carbs, Fat, Protein, Meal Photo
Mind Hacking Session: UsernameID, Duration, Mantra, Reflection

## Express to handle routes, http function endpoints and port listeners, axios to make http requests from the front end
Functions:
Create User
Edit User

Add Exercise
Edit Exercise
Delete Exercise

Add Meal
Edit Meal
Delete Meal

Add Mind Hacking Session
Edit Mind Hacking Session
Delete Mind Hacking Session

## React to create a robust and dynamic front end that equips the user with hints and advice as they track 

Profile Component: 
Display Name,
Profile Picture,
Exercises completed today,
Exercises completed in total, 
Minutes Exercised,
Meals today,
Total calories today,
Macro breakdown pie chart,
Mindhacking Sessions today,
Mindhacking Sessions in total

Exercise Tracker, Meal Tracker, and Mind Hacking Component:
Sub Components: TrackerList, TrackerCard, EntryView, EntryEdit, EntryDelete
Display all submitted entries on cards in a list. Each with an option to view, edit, and delete in a modal. 

## Node.js as a js runtime environment to grant us the ability to execute js code outside the browser and user 3rd party libraries

