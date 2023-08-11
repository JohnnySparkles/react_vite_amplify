
# React + Vite + Amplify starter
This is a starter package for doing React + Vite + Amplify. It is setup with all the things you need to develop, test, and deploy a React + Vite + Amplify project.

# Usage:

Clone the project:
git clone git@github.com:JohnnySparkles/react_vite_amplify.git
cd react_vite_amplify

Install all dependencies:
yarn install

Setup amplify:
amplify init
amplify add auth
amplify add hosting

Publish amplify:
amplify publish

Run unit tests:
yarn run test

Run integration tests:
yarn run integrationn

# Notes
This is based upon the react + vite starter project. It includes all of the setup that I currently use and allows me to get an amplify project setup very quickly.

The tests will fail when amplify hasn't been initialised. Amplify files should never be checked in to this repo and are ignored by .gitignore.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
