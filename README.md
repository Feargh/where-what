# where-what

#### Video Demo: <URL HERE>

#### Description:

## where-what

An app to store recommendations that can be used to give travelers to various
cities tips on what to do and see and where to eat. The Frontend data is
generated dynamicaly from the information in the backend database, so it can be
updated easily.

The project is seperated into a frontend and backend folders on a github repo.
For the frontend I used react, vite, javascript, bootstrap and openleaf maps.
For react I set up the project using vite and the code is seperated into
components and pages. For the backend it is made with C# and .NET. I used Entity
Framework (EF) Core to set up the database using seed data and migrations. I set
up the database with two tables, one for the cities and another for the
recommendations. The recommendations include a foreign key to link them to which
city they are in. I created an API in the style of mimial API in the program.cs
file. I added swagger to document the API in the backend and for testing but
also used postman to test this also.

I used C# and javascript as these are the languages I that I use in work. I used
two different Integrated Development Environments (IDE)s. Visual Studio 2022
community for the backend C# development and Visual Studio Code for frontend
react. I used git and github for version control, backup and restore, to track
chaning and to submit my final project.

## Learning outcomes

My main take aways from this project where how to structure the backend with
suitable data in the database. Using EF core was difficult to set up the
databases and adding another table was a learning curve I mastered. I also had
difficulty with the frameworks not being the same version in the backend but I
fixed this by changing the .csproj file to have the same version for EF (8.0.0
in this case). Adding the correct relationships to the modal for the datatype
was also a learning point for me. For the frontend using react to access the API
with useEffect() took some work and research to learn how to do correctly. I
also used bootstrap components on the frontend and I found this very user
friendly and useful too.

## Technologies used:

### Frontend

- React (installed using Vite)
- javascript
- openleaf maps
- Bootstrap

### Backend API

- .NET
- C#
- Database:
  - Entity Framework Core
  - Sqlite

### Repo Organisation

- Github
- Frontend folder
- Backend folder
- Configuration files

  - .gitignore
  - .prettier

  ### How to run

- Clone repo
- cd into frontend folder and run `npm install`
- cd into backend folder and run `dotnet restore`
- To set up the database run the migrations in the backend folder using the
  following:
  ```shell
  dotnet ef migrations add InitialCreate
  dotnet ef database update
  ```
- To run the frontend from the frontend folder `npm run dev`
- To run the backend from the backend folder `dotnet run`
