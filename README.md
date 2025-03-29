#GIT & GITHUB

- git status
- git init (For initialization)
- git add (To put files in staging area)
  - METHOD 1: git add <filename.ext> <filename.ext> ... and so on(based on numbers of files) (RECOMMENDED if no. of files are less)
  - METHOD 2: git add . (For all files)
- git status (For viewing all the files added in the staging area)
- git commit -m "<msg>"
- git log (To see all changes committed)
  - git log --oneline ("oneline" is a flag. It shows each commit in one line)
- git branch (shows us the current branch)
  - git branch <branch-name> (creates a new branch)
  - git switch <branch-name> (to switch to the next branch)
  - git switch -c <branch-name> (to create a new branch and switching to that branch)
  - git checkout <branch-name> (to move to the existing branch. if the branch does not exist it will move to that branch) (RECOMMENDED)



# This README File is for Netflix GPT

# Netflix GPT
- Install parcel (steps present in notes)
- Configured Tailwind CSS in our project


# Features in this project
- Login/Signup Page
    - Sign In/ Sign Up form
    - redirect to browse page

- Browse(home) page (after logged in)
    - Header
    - Main movie
        - Trailer In Background
        - Title and Description
        - Movie Lists * N

- Netflix GPT
    - Search Bar
    - Movie Suggestions