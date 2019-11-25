# Welcome to Zoo Keeper!

# Libraries and tools
React, ReactDOM, Parcel, Yarn, Sass. 
State management is done initially by 'useState' hook.
Notice: I have used a template I made previusly that have Mobx, mobx-react and decorators plugin preinstalled. because I decided couple of weeks ago to use Mobx for my future projects and it was hard to do it with create-react-app. because it locks down Babel. So i decided to make a template with parcel. In this project I didn't use Mobx but I might in future.

# Techniques used and caveats:
For the sake of simplicity I only implemented what i was asked for explicitly. Ny further feature could be added in future, for example:
The only 'CRUD' ability right now is to update medical check. But Additional CRUD could be implemented if asked for. For example adding new Animals.
I could make a class to generate animals. but for now they are only predefined in jason object.
The JSON object isn't stored/retrieved using 'localStorage'.
I didn't pass any props and didn't use any state managment lib, I usually use Mobx.

# Install and run
with yarn "recomended":
>yarn

>yarn start

or npm:
>npm install

>npm start