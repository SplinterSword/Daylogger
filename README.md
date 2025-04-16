# DayLogger

## Introduction

DayLogger is a powerful productivity tool designed to help you reflect on your daily digital life with minimal effort. It provides an hour-by-hour summary of your screen activity, giving you a clear and concise log of how your time was spent throughout the day.

By analyzing your screen usage, DayLogger automatically generates brief, context-aware summaries for each hour—highlighting the apps you used, websites you visited, and tasks you were likely working on. Whether you're a remote worker, student, or digital creative, DayLogger gives you the insight you need to stay on track, optimize your habits, and improve time management.

No more guessing where your time went. With DayLogger, you get a structured, summarized timeline of your day—automatically generated and easy to review.

## The Problem I'm Trying to Solve

In today's hyper-digital world, it's easy to lose track of time. We spend hours jumping between apps, websites, and tasks—often without a clear sense of what we actually accomplished. Traditional productivity tools rely heavily on manual input, which makes them cumbersome and easy to ignore.

DayLogger aims to solve this by providing an effortless way to review your day. Instead of manually tracking your activities or relying on guesswork, DayLogger automatically reads your screen activity and summarizes what you did each hour. This creates a clear and structured view of your time—helping you identify productivity patterns, distractions, and areas for improvement.

The goal is simple:
Make it easy for anyone to understand how their day was spent and use that knowledge to make better decisions moving forward.

With DayLogger, self-reflection and time management become passive yet powerful habits.

## How to Use DayLogger

Getting started with **DayLogger** is simple and takes just a few minutes. Follow these steps to start logging and summarizing your day automatically:

### 1. Install ScreenPipe

DayLogger works as a plugin for [**ScreenPipe**](https://screenpi.pe/), a screen activity streaming and plugin platform. To use DayLogger, you’ll first need to download and install the ScreenPipe app.

👉 **Download ScreenPipe:** [https://screenpi.pe/](https://screenpi.pe/)

### 2. Install the DayLogger Plugin

Once ScreenPipe is installed and running:

- Open the **ScreenPipe** app.
- Navigate to the **Plugin Store** from the sidebar.
- Search for **"DayLogger"** in the store.
- Click **Install** to add the plugin to your workspace.

### 3. Start Logging Your Day

After installing the plugin:

- Make sure ScreenPipe is running in the background while you work.
- DayLogger will automatically capture screen context and generate hourly summaries of your day.
- You can view your summarized log directly from within the plugin interface.

No manual input, no distractions—just a clean timeline of your day, ready for reflection.

## Frequently Asked Questions

### ❓ Does DayLogger violate the privacy of the user?

**No, it does not.**  
DayLogger is built with privacy in mind. All the screen activity data used to generate your hourly summaries is captured and stored **locally** on your machine by [**ScreenPipe**](https://screenpi.pe/). This means no raw data is uploaded to any external server or stored in the cloud by default.

However, it's important to note that DayLogger uses a third-party large language model (LLM) — **Groq** — to process and summarize your screen data. While your data is never stored by DayLogger itself, it **is passed temporarily to Groq's API** during the summarization process. Users who are especially concerned about data privacy should be aware of this and consider reviewing Groq’s privacy policies for additional peace of mind.

Your data stays yours. DayLogger is just a tool to help you understand it better.


## Technologies Used

### Frontend

- **Next.js**  
  **Next.js** is a powerful React framework that enables server-side rendering, static site generation, and easy API integration. For **DayLogger**, Next.js offers several advantages:
  - **Optimized Performance**: With its ability to generate static and dynamic content, Next.js ensures fast loading times and smooth user experiences.
  - **Server-Side Rendering (SSR)**: This feature ensures that the app’s content is pre-rendered on the server, providing better SEO and faster initial page load.
  - **Extensive ScreenPipe Support**: ScreenPipe has **extensive support for Next.js** in its deployment process, allowing seamless integration of the **DayLogger** plugin within the ScreenPipe ecosystem.

- **TypeScript**  
  TypeScript provides static typing and robust error checking, which improves the development process by catching potential bugs early. It enhances the maintainability of the code and improves collaboration across the team, making it an ideal choice for a project like DayLogger.

- **React.js**  
  **React.js** is a popular JavaScript library for building user interfaces, and it integrates effortlessly with Next.js. React enables a **declarative approach** to building UI components, which makes it easy to manage and update the state of the application as user interactions occur. For DayLogger, React’s efficiency in updating the DOM is crucial for real-time updates and ensuring that the log summaries are displayed promptly.

- **ScreenPipe**  
  **ScreenPipe** is a crucial part of the **DayLogger** app, as it is used for querying the user’s screen activity. ScreenPipe seamlessly captures the user's screen activity in real-time and provides access to detailed data that is analyzed and summarized by the Groq API.  
  ScreenPipe’s integration with Next.js simplifies the development process as it provides extensive support for **Next.js-based applications**, ensuring easy deployment and smooth interaction with the **DayLogger** plugin.

### Backend

- **TypeScript Server**  
  Using **TypeScript** on the backend offers the same advantages as on the frontend—static typing and improved development efficiency. By leveraging TypeScript, we ensure that our backend code is more reliable, maintainable, and scalable, reducing the chances of runtime errors that can occur with JavaScript.

- **Groq API for Summarization**  
  The **Groq API** is a powerful large language model that analyzes and summarizes screen activity. It allows us to leverage advanced AI capabilities for **summarizing user activity** with high accuracy. Integrating Groq enables DayLogger to provide meaningful, human-readable summaries of the user's day without requiring complex in-house models.

- **Containerized with Docker**  
  **Docker** enables us to create a consistent and portable development environment. By containerizing the backend service, we ensure that the app will run seamlessly across different environments, whether it's on a local machine or in production. This makes the deployment process more efficient, reduces compatibility issues, and simplifies scaling.

- **Deployed on Google Cloud Platform (GCP)**  
  Deploying the application using **Google Cloud Platform (GCP)** provides a highly reliable, scalable, and secure infrastructure for hosting the backend services. GCP's managed services like Cloud Run, and Artifact Regestry offer flexibility and scalability, allowing DayLogger to handle increased usage with ease while maintaining high performance.

## How to Run It Locally

To get started with DayLogger on your local machine, follow the steps below:

### 📦 Step 1: Clone the Repository

First, clone the GitHub repository and navigate into the project folder:

```bash
git clone https://github.com/SplinterSword/Daylogger
cd DayLogger
```
### 📦 Step 2: Install Bun Runtime

DayLogger uses Bun — a fast JavaScript runtime like Node.js.
You need to install it before running the project:

👉 Install instructions: https://bun.sh

### Frontend

1. Navigate to the "DayLogger" directory: `cd DayLogger`
2. Install dependencies: `bun install`
3. Start the development server: `bun dev`

### Backend

1. Navigate to the "backend" directory: `cd backend`
2. Install dependencies: `bun install`
3. Make your own [**Groq API Key**](https://groq.com/) and set it in the `.env.local` file with name "GROQ_API_KEY"
4. Start the development server: `bun dev`

## 🤝 Contribution

We welcome contributions from the community to help improve DayLogger!

Whether it’s fixing bugs, adding new features, improving documentation, or sharing ideas — your support is appreciated.

- Create a new branch for your feature or bugfix

```bash
git checkout -b your-feature-name
```

 - Make your changes and Implement your fix or feature, and commit the changes.

- Push your branch

```bash
git push origin your-feature-name
```

- Open a [**Pull Request**](https://github.com/SplinterSword/Daylogger/pulls) . Provide a clear description of your changes.

## Contribution Guidelines

- Keep your code clean and readable.

- Follow the existing coding style used in the project.

- Try to keep pull requests focused and minimal.

- Test your changes before submitting.

- Be kind and respectful in all interactions. ❤️