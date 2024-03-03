# FORM VALIDATION

---

## React + Vite

- Step 1: Create a new Vite project
  To create a new Vite project, open your terminal and run the following command:

- `npm create vite@latest  your-project-name `
- Replace your-project-name with the name you want for your project. Vite supports many frameworks, but in this case, we specify the react template with the `--template` option `React`.

- Step 2: Navigate to the project directory
  Once the Vite project is created, navigate to the project directory:

  `cd your-project-name`

- Don’t forget to replace your-project-name with the actual name you chose for your project (unless of course, you want to keep this name for your project).

- Step 3: Install dependencies and run the development server
  Next, install the necessary dependencies and start the development server:

- `npm run devi`

- `cd your-project-name`
- `npm i`
- `npm run dev`
- After running these commands, you should see a message in your terminal indicating that your React website is running on a specific port, it’s usually a ‘random’ port number like `http://localhost:5173.`

Now, open your browser and visit the provided URL to see your React website in action.

---

- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Form Validation

- Used third party libraries
  - `react-router-dom`
  - `formik`
  - `yup`
  - `axios`
  - Install in terminal like `npm i pakage-name`
- It is designed like admin dashboard.
- Library Management and Book details.
- In Home page you can list of books .
- Here you can `add` ,`edit` and `delete` book and author details.
- If you click `Read Details` button it will go to the **Read**page show the deytails of respected book and author details.
- In **Read** page you can **_Update_** and **_Delete_** the respective details using `Edit` and `Delete` button.
- Using `Back` and `Home` button you can go to home page.
- In the Navigation bar using `Add+` button you can add the new Book and Author details.
- Both `Edit` and `Add` Forms are validated using `UseFormik` hook and `Yup` validation.
- Any Empty input field or improper values are given it will show the error msg using `Yup` validation.

> Thanks for visiting.....😊
