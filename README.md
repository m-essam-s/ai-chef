# Markdown Note-Taking App

A note-taking app built with React and Firebase that allows users to create, edit, and delete notes in real-time. The app features an editor that supports Markdown syntax, and the notes are synced with Firebase Firestore for persistent storage.

## Features

- Create new notes with a default markdown template.
- Edit notes with auto-saving functionality (saves changes after 1 second of inactivity).
- Real-time syncing with Firebase Firestore.
- Delete notes from Firebase.
- Notes are sorted by the most recently updated.
- Sidebar for navigating between notes.

## Technologies Used

- **React**: For the frontend user interface.
- **Firebase Firestore**: For real-time database and syncing notes across users/devices.
- **React-Split**: For resizable sidebar and editor layout.
- **CSS**: Custom styling for layout and components.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/m-essam-s/markdown-notes-app.git
    ```

2. Navigate to the project folder:

    ```bash
     cd markdown-notes-app
     ```

3. Install dependencies:

     ```bash
        npm install
        ``` 
4. Set up Firebase:

   - Create a Firebase project and Firestore database.
   - Get the Firebase configuration and replace the placeholder values in the firebase.js file.

    ```javascript

    Copy code
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    export { db };
    ```

5. Start the application:

    ```bash
    npm start
    ```

## How to Use

- Click "Create one now" if no notes are present.
- Type in the editor, and your changes will be automatically saved to Firebase after 1 second of inactivity.
- Navigate between notes using the sidebar.
- Delete a note using the trash icon next to the note title.

License
This project is open-source and available under the MIT License.
