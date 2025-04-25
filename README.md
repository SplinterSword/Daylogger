![github-submission-banner](https://github.com/user-attachments/assets/a1493b84-e4e2-456e-a791-ce35ee2bcf2f)

# 🚀 DayLogger

> DayLogger is a powerful productivity tool designed to help you reflect on your daily digital life with minimal effort. It provides an hour-by-hour summary of your screen activity, giving you a clear and concise log of how your time was spent throughout the day.

---

## 📌 Problem Statement

**Problem Statement 6 – Power Productivity with Screenpipe**

---

## 🎯 Objective

In today's hyper-digital world, it's easy to lose track of time. We spend hours jumping between apps, websites, and tasks—often without a clear sense of what we actually accomplished. Traditional productivity tools rely heavily on manual input, which makes them cumbersome and easy to ignore.

DayLogger aims to solve this by providing an effortless way to review your day. Instead of manually tracking your activities or relying on guesswork, DayLogger automatically reads your screen activity and summarizes what you did each hour. This creates a clear and structured view of your time—helping you identify productivity patterns, distractions, and areas for improvement.

The goal is simple: Make it easy for anyone to understand how their day was spent and use that knowledge to make better decisions moving forward.

With DayLogger, self-reflection and time management become passive yet powerful habits.

---

## 🧠 Team & Approach

### Team Name:  
`NA`

### Team Members:  
- [Sparsh Jain](https://github.com/SplinterSword)


### Your Approach:  
- I always have trouble with my time management so that is why I made DayLogger which allows me keep track of my activities.

---

## 🛠️ Tech Stack

### Core Technologies Used:
- Frontend: Next.js, React, TypeScript, Screenpipe
- Backend: TypeScript, Bun
- APIs: Groq, Screenpipe
- Hosting: Google Cloud Platform

### Sponsor Technologies Used (if any):
- [✅] **Groq:** _How you used Groq_  
- [ ] **Monad:** _Your blockchain implementation_  
- [ ] **Fluvio:** _Real-time data handling_  
- [ ] **Base:** _AgentKit / OnchainKit / Smart Wallet usage_  
- [✅] **Screenpipe:** _Screen-based analytics or workflows_  
- [ ] **Stellar:** _Payments, identity, or token usage_
*(Mark with ✅ if completed)*
---

## ✨ Key Features

Highlight the most important features of your project:

- ✅ Hour by Hour summarization of entire day's screen activity.
- ✅ Searching for keywords to narrow down search for specfic topics or parts about your day.
- ✅ Ability to ask questions about your day's screen activity.

Add images, GIFs, or screenshots if helpful!

---

## 📽️ Demo & Deliverables

- **Demo Video Link:** [https://youtu.be/66ZRqsGllZY]  

---

## ✅ Tasks & Bonus Checklist

- [✅] **All members of the team completed the mandatory task - Followed at least 2 of our social channels and filled the form** (Details in Participant Manual)  
- [✅] **All members of the team completed Bonus Task 1 - Sharing of Badges and filled the form (2 points)**  (Details in Participant Manual)
- [✅] **All members of the team completed Bonus Task 2 - Signing up for Sprint.dev and filled the form (3 points)**  (Details in Participant Manual)

*(Mark with ✅ if completed)*

---

## 🧪 How to Run the Project

### Requirements:
- Node.js version 16 or higher.
- Bun version 0.3.0 or higher.
- [**Groq API Key**](https://groq.com/)
- Make your own [**Groq API Key**](https://groq.com/) and set it in the `.env.local` in the backend folder

### Local Setup:
To get started with DayLogger on your local machine, follow the steps below:

### Install ScreenPipe

DayLogger works as a plugin for [**ScreenPipe**](https://docs.screenpi.pe/getting-started), a screen activity streaming and plugin platform. To use DayLogger, you’ll first need to download and install the ScreenPipe app.

👉 **Download ScreenPipe:** [https://docs.screenpi.pe/getting-started](https://docs.screenpi.pe/getting-started)

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

---

## 🧬 Future Scope

List improvements, extensions, or follow-up features:

- 📈 Listening and storing audio and video transcripts as well.
- 🛡️ Security enhancements switching to a local llm
- 🌐 Rather than a plugin making it a own standalone excutable.

---

## 📎 Resources / Credits

- [**Groq**](https://groq.com/)
- [**ScreenPipe**](https://docs.screenpi.pe/getting-started)

---

## 🏁 Final Words

- One huge challenged i faced is just to get familiar with screenpipe like how it worked and how to use it effectively.
- Now the second challenge was to decide how are we going to format and clean the OCR data so that it can be fed to groq effectively. Because if there is too much data then groq will hit it's rate limit and not to mention the long processing time it will take to summarize the ocr data. But on the other hand if we have too little data then groq won't have enough data to summarize, leading to incomplete or incorrect summarize of the hour.
- Presenting the data was also a challenge. I had to design a ui which is easy on the eyes and give all the important information in first glance.
- Deploying the project is also proving to be difficult as the linux compatibility was not the greatest but this was resolved by the helpful people in screenpipe's discord server.
- Adding new features, especially the search feature was difficult to implement on the frontend, I had to watch many youtube videos.

---
