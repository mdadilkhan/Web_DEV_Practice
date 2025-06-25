Q. you can run any ts file using this cmd
   npx ts-node filename.ts

Q. for easling the command is
   npm init @eslint/config@latest






Q. When using Prisma with TypeScript in a Node.js project with MySQL?,
   you should install Prisma as follows:
   1. Install the Prisma CLI as a devDependencies
      Use this for development tools like prisma init, prisma migrate, and prisma generate.
      -> npm install prisma --save-dev
   2. Install the Prisma Client as a regular dependencies
      This is what your actual app uses at runtime to talk to the database.
      -> npm install @prisma/client


  -> After installation of prisma for devDependencies and dependencies
     do ->  npx prisma init
     it will do two things 
     1. it will create .env file with varibale DATABASE_URL="fake db string" or you can crete by own
     2. it created a prisma folder at root leevel and schema.prisma file having 
     generator client {
           provider = "prisma-client-js"
           output   = "../src/generated/prisma"
     }


     // here provider can be postgress mongodb sql
     datasource db {
           provider = "mysql"
           url      = env("DATABASE_URL")
    }



  -> then use cmd -> npx prisma generate 
  -> enter any one cmd prefer push one-> npx prisma db push  or  npx prisma migrate dev --name init 
  -> now you can create any scema do npx prisma db push 
  -> now you create data pull data or any crud using prisma
  -> now you are ready to use prisma 


  Q. which approach is better for connecting mqsql postgress using docker or using direct local db string
           | Feature/Concern             | Local MySQL                            | Docker MySQL ✅ Recommended      |
      | --------------------------- | -------------------------------------- | ------------------------------- |
      | 🧱 Environment isolation    | ❌ Shares host environment              | ✅ Full isolation                |
      | 🔁 Easy to reset DB         | ❌ Manual                               | ✅ Just restart/remove image     |
      | ⚙️ Consistency across teams | ❌ Hard to reproduce locally            | ✅ Exact same DB everywhere      |
      | 🚢 Easy CI/CD integration   | ❌ Manual step                          | ✅ Works seamlessly in pipelines |
      | 🐳 Multi-container support  | ❌ Difficult to simulate full app stack | ✅ Can use with `docker-compose` |
      | 💥 Risk to host machine     | ❌ Can corrupt local MySQL              | ✅ Safe, self-contained          |


Q. How to connect nodejs with mysql sever which running inside docker container
   for local running multiple databse instance docker compoese in enough
   but for production use docker swarm and Kubernetes is often used 
   for right now we will use docker image of sql for cinnectng nodejs server
   then we use docker compose for connecting with multiple mysql database instance (master slave architecture)

Q  using dcoker for single mysql instance

      Start a mysql server instance
      Starting a MySQL instance is simple:


    first pull the docker image of mysql 

    ->docker pull mysql:latest
    -> docker run --name mysql-master -p 3306:3306 -e MYSQL_ROOT_PASSWORD=****** -d mysql:latest 
       mysql-master is the name of container you can name any first 3306 is host port and 2nd 3306 is container port and then you have to rght the password and 'latest' is the tag of image you pulled from docker hub of mysql


Q.  now i am using docker for mysql then how to connect with nodejs running locally

    there can be two mysql one is locally and one is on docker running on same port 3306 then you have to use any one at a time if using docker one then stop local machine one if usiong local machine one then stop using docker one both have the same url for connecting with nodejs(locally)

    for accessing the docker mysql from terminal use this command 

    ->mysql -h 127.0.0.1 -P 3306 -u root -p 
    but ip should be matching and port you are runnig the docker you can use any one command for geting ip adress of container port can be see from docker ps -a in which upur mysql is running
    -> docker inspect mysql-master | grep IPAddress
    -> docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mysql-master


// remaining feature
Q. Run multiple docker container of mysql instance suing dcoker-compose.yml
Q. Connect nodejs running inside docker with multple mysql instacne



