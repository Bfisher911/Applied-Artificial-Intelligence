/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Content for Chapter 0 (Introduction)
const chapter0TextContent = `Chapter 0: Introduction: The Applied AI Revolution
Welcome to the dynamic and transformative world of Applied Artificial Intelligence! You are embarking on a journey into a field that is rapidly moving beyond futuristic concepts to deliver tangible, impactful solutions that are being built and deployed today. This textbook, "Applied Artificial Intelligence: From Business Case to Cloud Deployment," is designed to be your comprehensive guide through this exciting landscape. Our core mission is to equip you with both the practical, hands-on skills and the foundational conceptual understanding necessary to turn innovative AI ideas into functional, real-world applications. This book will not only show you what is possible but will empower you to do it.

A. What is Applied Artificial Intelligence?
Artificial Intelligence (AI), in its broadest sense, has been a field of study and development for decades, encompassing a wide spectrum of activities from fundamental academic research into the nature of intelligence to the creation of highly complex algorithms. Applied Artificial Intelligence, the focus of our exploration, narrows this vast domain to the practical implementation of these diverse AI techniques to solve specific, real-world problems. It represents the crucial intersection where theoretical knowledge meets practical execution, where algorithms translate into actual outcomes, and where intelligent systems begin to deliver measurable and meaningful value.

[KEY TAKEAWAY]: Applied AI is the practical application of AI techniques to solve real-world problems, focusing on the entire lifecycle from data to deployed solution and measurable value. It emphasizes tangible outcomes and the effective use of tools and platforms.

1. Problem Definition & Business Case
This initial phase is arguably the most critical. It begins with thoroughly understanding the need: What precise problem are we attempting to solve? Who are the primary stakeholders, and what are their expectations? Key activities include conducting stakeholder interviews, analyzing existing processes to identify pain points, and rigorously defining objectives. Success must be quantifiable, which involves establishing clear, measurable Key Performance Indicators (KPIs).

Key features of Vertex AI that you will become familiar with include:
- A Unified Interface and API that simplifies the management of datasets, training jobs, model versions, deployed endpoints, and monitoring tasks from a central location.
- Access to powerful Pre-trained APIs for common AI tasks, such as vision analysis (e.g., image recognition, object detection), natural language processing (e.g., sentiment analysis, entity extraction), and translation, allowing you to incorporate sophisticated AI capabilities into applications with minimal custom model development.
- Robust support for Custom Training, giving you full control to train your own models using popular machine learning frameworks like TensorFlow, PyTorch, and scikit-learn, leveraging GCP's scalable training infrastructure.
`;

// Updated Chapter Content
const chapterTextContent = `Chapter 1: Orientation & AI Project Framing
Welcome to the starting line of your applied AI journey! This initial chapter is dedicated to laying a robust and essential foundation for all the exciting work that lies ahead. Before we immerse ourselves in the intricacies of specific algorithms or harness the immense power of cloud computing, it is crucial to understand how to approach an Artificial Intelligence project from its very inception. To that end, we will embark on an exploration of the complete AI project life cycle, providing you with a clear roadmap from an initial idea to a deployed solution. A significant focus will be on developing the critical skill of translating often vague business needs or challenges into concrete, measurable AI problems with well-defined objectives. Furthermore, this chapter will serve as your introduction to the essential tools that will be your companions throughout this course: Google Cloud Platform (GCP) and its powerful AI platform, Vertex AI. Most importantly, this chapter officially kicks off your semester-long capstone project, guiding you through the pivotal first step: clearly defining your project's scope and crafting a compelling, well-structured proposal. By the end of this chapter, you will not only grasp the foundational concepts but also take concrete steps towards realizing your own AI solution.

Learning Objectives for this Chapter:
Upon successful completion of this chapter and its associated Module 1 activities, you will be well-equipped to:

- Translate a given business pain-point or opportunity into a clearly defined and measurable AI problem.
- Identify and conceptually diagram the end-to-end architecture of an AI solution, particularly leveraging Vertex AI.
- Outline the key milestones for your semester-long AI capstone project, establishing a clear roadmap for development.
- Initiate the setup of your Google Cloud Platform environment, preparing your workspace for hands-on activities.
- Understand the core components and iterative nature of the AI project life-cycle.
- Draft an initial project proposal canvas, articulating the vision and plan for your capstone project.

A. The AI Project Life Cycle: A Bird's-Eye View
As we briefly touched upon in the Introduction, successful and impactful Artificial Intelligence projects rarely emerge from haphazard efforts; instead, they follow a structured and systematic process commonly known as the AI project life cycle. A thorough understanding of this cycle is paramount for any aspiring AI practitioner, as it provides a comprehensive roadmap, ensuring that all critical aspects of development are addressed—from the initial conceptualization of an idea through to the deployment of a working solution and its ongoing maintenance in a dynamic real-world environment. While we introduced the general phases earlier, let's now revisit them with a more practical lens, considering the tangible steps you will be taking throughout this course and your capstone project.

The AI project life cycle can be broadly categorized into several key phases, each with its own distinct objectives and activities:

Problem Definition & Business Case: This foundational phase addresses the crucial question: What specific problem are we genuinely trying to solve, and what is the tangible value or benefit of solving it? Activities here are investigative and strategic, often involving stakeholder interviews to understand needs and expectations, a thorough analysis of existing processes to identify pain points and inefficiencies, the precise definition of success metrics (Key Performance Indicators, or KPIs, which we will discuss in detail), and a realistic assessment of AI feasibility for the given problem. Your primary focus in Module 1 will be on this phase, as you select a compelling use case for your capstone project and clearly define its business value and measurable outcomes.

Data Acquisition & Preparation: With a well-defined problem, the spotlight turns to data—the essential fuel for any AI model. The core question guiding this phase is: What data do we need to address this problem, where can we obtain it, and, critically, how do we transform this raw data into a format that is clean, structured, and usable for an AI model? This phase encompasses a wide range of activities, including data sourcing from various origins, systematic data collection, meticulous data cleaning to handle imperfections, data transformation and innovative feature engineering to create more informative inputs, data labeling for supervised learning tasks, and the strategic splitting of data into training, validation, and test sets. Your work in Modules 2 and 3 will immerse you in these tasks, as you learn to upload your data to Google Cloud Storage, register it formally with Vertex AI, and prepare it thoroughly for the subsequent training phase.

Model Development & Training: This is where the "learning" in machine learning truly happens. The central question is: Which AI approach and specific algorithm are best suited to our problem and data, and how do we effectively train a model to learn the underlying patterns? Key activities include selecting appropriate model types (such as classification for categorical predictions or regression for numerical forecasts), choosing suitable algorithms, carefully configuring training parameters, and then training the model by feeding it the prepared data. Powerful tools like Vertex AI AutoML will significantly accelerate your work in this phase by automating many of these complex choices. Your engagement with Modules 4, 5, and 6 will guide you through training models using Vertex AI AutoML and exploring different learning paradigms.

Model Evaluation: A trained model is a significant achievement, but its true worth is determined by its performance. This phase answers the critical question: How well does our trained model perform on data it has never seen before, and is it sufficiently accurate, reliable, and fair for deployment? Activities involve assessing the model's performance against your predefined KPIs using a variety of statistical metrics (such as accuracy, precision, and recall for classification, or RMSE and MAE for regression), comparing different models or versions if multiple have been trained, and employing techniques to understand feature importance and model explainability. Your focus in Module 5 will be on interpreting these evaluation metrics and analyzing your model's behavior.

Deployment: Once a model has been rigorously trained and evaluated, the next crucial step is to make it accessible for real-world use. The challenge here is: How do we effectively make our trained model available so that applications or end-users can send it new data and receive timely and accurate predictions? This involves packaging the model appropriately, deploying it to a scalable and reliable cloud environment (for instance, as a Vertex AI Endpoint, which functions as an API), and ensuring it can be seamlessly integrated into target applications or business processes. Modules 6 and 8 will specifically cover the practical aspects of deploying your model to a Vertex AI endpoint.

Monitoring & Maintenance (MLOps): The AI lifecycle does not conclude with the initial deployment. Deployed models operate in dynamic environments, and their performance can degrade over time due to various factors. This ongoing phase addresses the question: How do we ensure our deployed model continues to perform effectively and reliably over time, and how do we adapt it to changing conditions? This involves a set of practices often grouped under the umbrella of MLOps (Machine Learning Operations), such as continuously monitoring for data drift or concept drift, setting up alerts for performance degradation, establishing automated retraining pipelines to update models with fresh data, versioning models for traceability and governance, and conducting ongoing ethical audits to ensure fairness and responsible use. The activities in Modules 7, 9, 10, 11, and 12 will introduce you to MLOps concepts, guiding you through setting up model monitoring, conducting an ethical audit, and managing different versions of your model.

It is vital to understand that this course, "Applied Artificial Intelligence," is meticulously designed to walk you, step by step, through every single one of these stages. Your capstone project will be the vehicle through which you execute this full life cycle, transforming your initial idea into a functional, cloud-hosted AI solution.

[KEY TAKEAWAY]: The AI Project Life Cycle is an iterative roadmap that guides the development of AI solutions from problem definition through to ongoing maintenance. Understanding each phase, its objectives, and its typical activities is crucial for project success and for developing a holistic view of applied AI.

B. Translating Business Pain-Points into Measurable AI Problems
One of the most critical, and often challenging, initial skills in the field of applied AI is the ability to look at a real-world situation—be it a pressing business challenge, an organizational inefficiency, or an unmet market opportunity—and discern how artificial intelligence can provide a meaningful and effective solution. This translation process isn't always straightforward. A stakeholder might articulate a problem in general terms, such as, "Our customer service response times are too slow," or "We seem to be losing too many potential sales at the checkout stage." These are valid pain points, but they are not yet well-defined AI problems ready for technical development.

Your task as an applied AI practitioner is to delve deeper, to ask probing questions, and to reframe these generalized pain points into specific, measurable, achievable, relevant, and time-bound (SMART) AI objectives. This transformation typically involves several key steps:

Identifying the Core Issue: The first step is to move beyond the surface-level complaint and uncover the root cause or the precise nature of the problem. A useful technique here is to repeatedly ask "why." For instance, why is customer service slow? Is it because agents are overwhelmed by a high volume of simple, repetitive queries? Or is it perhaps because they struggle to quickly find the necessary information to resolve more complex issues? Through such inquiry, a vague statement like "Customer service is slow" might be refined into a more concrete observation, such as, "Our customer service agents currently spend approximately 60% of their time addressing the same top 20 frequently asked questions, diverting resources from more complex customer needs."

Determining if AI is a Suitable Solution: Not every problem requires or benefits from an AI solution. It's important to assess whether the identified core issue aligns with the capabilities of AI. Does the problem fundamentally involve tasks like prediction (forecasting future outcomes), classification (assigning items to categories), pattern recognition in complex data, the automation of repetitive decision-making processes, or the generation of novel insights from existing datasets? Furthermore, a critical consideration is data availability: AI models, particularly machine learning models, are data-hungry. Is the necessary data currently available, or can it be realistically collected and prepared? For the refined customer service example, an AI-powered chatbot designed to handle common FAQs, or an intelligent search tool to help agents find information faster, could indeed be suitable AI-driven solutions.

Defining the Specific AI Task: Once AI is deemed appropriate, you need to define the specific type of AI task that will address the problem. Common supervised learning tasks include:

- Classification: This involves assigning an item to one of a predefined set of discrete categories. Examples include classifying an email as "spam" or "not spam," or determining if a package in a logistics system is "damaged" or "undamaged."
- Regression: This task aims to predict a continuous numerical value. Examples include forecasting future sales figures, predicting housing prices based on various features, or estimating the energy demand for a city.

Other tasks, which we will explore later, include Clustering (grouping similar items together without predefined labels), Anomaly Detection (identifying unusual data points that deviate from normal patterns, such as in fraud detection), and Object Detection (identifying and locating specific objects within an image).
For our ongoing FAQ scenario, the AI task could be framed as "classify incoming user queries to accurately direct them to the relevant pre-existing FAQ answer," or perhaps more ambitiously, "generate a concise and relevant answer based on the content of the user's query."

Establishing Measurable Key Performance Indicators (KPIs): This step is crucial for objectively evaluating the success of your AI solution. How will you know if your AI is performing well and delivering the desired business value? KPIs must be quantifiable and directly relevant to the problem you are trying to solve. It's important that these AI-related KPIs also align with the broader business objectives. If the overarching business goal is to reduce customer service handling time, then your AI's KPI should reflect a contribution towards that goal.
Some examples of AI-related KPIs include:

- For classification tasks: Accuracy (the percentage of correct predictions), Precision (the proportion of positive predictions that were actually correct, important when false positives are costly), and Recall (the proportion of actual positive instances that were correctly identified, crucial when false negatives are costly).
- For regression tasks: Mean Absolute Error (MAE) or Root Mean Squared Error (RMSE), which measure the average magnitude of prediction errors.
- For automation tasks: A reduction in manual effort or processing time, such as, "Reduce the average time spent by agents on FAQ responses by 50%."
An example KPI for our refined FAQ problem might be: "The AI chatbot will correctly answer 80% of queries related to the top 20 FAQs (as measured by accuracy on a test set), leading to an observable 30% reduction in average agent handling time for these specific types of queries within three months of deployment."

To illustrate further, let's consider an example directly from the "10 Inspiration Ideas" table provided in your "Software Lab Template" course document:

Theme: Retail
Example Use-Case & KPI: Predict which online customers will abandon their shopping carts, with the goal to reduce overall cart abandonment by 10%.
In this retail scenario, the clearly identified pain-point is high cart abandonment rates. The specific AI task is a classification problem: the model needs to predict whether a given customer session will result in an abandoned cart (a "yes/no" or "abandon/not abandon" prediction). The KPI is both specific and measurable: "reduce cart abandonment by 10%." This represents a well-framed AI problem, ready for the subsequent stages of data collection and model development.

[PRO TIP]: When defining your Key Performance Indicators (KPIs), always consider the direct business impact. A model that boasts 99% technical accuracy might sound impressive, but if it doesn't tangibly solve the underlying business problem or measurably improve the target business metric, it hasn't truly succeeded in an applied context.

C. Getting Started with Google Cloud Platform (GCP) & Vertex AI
To bring your AI projects from concept to reality, a robust and scalable platform is essential. As introduced earlier, our primary environment for this course will be the Google Cloud Platform (GCP), a comprehensive suite of cloud services, and specifically, its unified AI platform, Vertex AI. This section will guide you through the initial steps of setting up your GCP account and enabling the necessary services, ensuring your workspace is ready for the hands-on activities that form the core of your learning experience.

1. Setting Up Your GCP Account and Redeeming Credits
Your first practical step is to create a Google Cloud Platform account or ensure your existing one is properly configured. New Google Cloud users are typically eligible for free credits (often around $300), which are designed to allow exploration and learning without initial financial commitment. These credits are generally more than sufficient for all the exercises and the capstone project in this course, provided they are managed wisely.
To begin working with the Google Cloud Platform, you will first need to set up your account and project. The following steps, detailed in your "Software Lab Template" document under "Step-by-Step Guide: 0 Get Ready & 1 Create a Google Cloud Project," will guide you through this initial process:

- Ensure you have a Google Account: This can be any standard Gmail account or a Google Workspace account provided by your university or organization.
- Access the GCP Console: Navigate your web browser to the Google Cloud Console at https://console.cloud.google.com/. You will be prompted to sign in with your Google account.
- Activate Free Trial/Credits: If you are a new GCP user, the console will typically present prominent prompts to activate your free trial and associated credits. It is crucial to follow these on-screen instructions carefully. This step often requires providing payment information for verification purposes, but you should not be charged beyond your free credits unless you explicitly upgrade your account to a paid tier.
- Create a New Project: Once logged in and your billing/free trial is active, you will need to create a new project to house all the resources for this course.
  - Look for the project selector dropdown at the top of the console page (it might say "Select a project" or display an existing project name). Click on it.
  - In the dialog that appears, click the NEW PROJECT button.
  - You will be asked to provide a Project name. For consistency and easy identification, please use the convention AI-Capstone-YourLastName (e.g., AI-Capstone-Fisher).
  - GCP will automatically generate a unique Project ID based on your project name (e.g., ai-capstone-fisher-123456). This ID is globally unique and cannot be changed later. While you can customize it at this stage, the auto-generated ID is usually acceptable. It's a good idea to note down your Project ID, as you will often need it for configurations or when using command-line tools.
  - Ensure your project is linked to your active billing account (which should be utilizing your free trial credits).
  - Click the Create button. Project creation might take a minute or two. After it's created, make sure this new project is selected in the project dropdown at the top of the console; this ensures that any resources you create are associated with this project.
Successfully completing these steps means you have a dedicated workspace within GCP for your AI endeavors.

2. Enabling the Vertex AI API
With your GCP project created, the next step is to enable the Vertex AI API. APIs (Application Programming Interfaces) in Google Cloud allow your project to access and use specific services. Before you can utilize the powerful features of Vertex AI, its API must be explicitly enabled for your project.
The "Software Lab Template" under "Step-by-Step Guide: 2 Enable Vertex AI APIs" outlines this procedure. Here’s a summary of how to enable the Vertex AI API:

- Verify Project Selection: In the GCP console, double-check that your newly created project (e.g., AI-Capstone-YourLastName) is currently selected.
- Navigate to the API Library: The easiest way to find APIs is often via the main search bar at the top of the GCP console. Type "Vertex AI API" into the search bar. Alternatively, you can use the navigation menu (often a "hamburger" icon ☰ in the top-left corner) and navigate to APIs & Services > Library.
- Locate and Select Vertex AI API: In the API Library, search for "Vertex AI API." Click on it from the search results to open its details page.
- Enable the API: On the Vertex AI API page, you should see an ENABLE button. Click this button. The enabling process might take a few moments.
- Confirmation: Once the API is successfully enabled, the button will typically change to "MANAGE," and you should see information indicating that the API is active. A good way to confirm is to search for "Vertex AI" in the main console search bar and navigate to its dashboard. If you are presented with the Vertex AI dashboard, showing sections like "Datasets," "Models," "Endpoints," etc., then the API is active and ready for use.
With these steps completed, your Google Cloud environment is primed, and Vertex AI is at your disposal.

3. Understanding the GCP Console and Vertex AI Interface
Now that your project is set up and the Vertex AI API is enabled, it's beneficial to take a few minutes to familiarize yourself with the Google Cloud Console and the specific Vertex AI interface. The GCP console is a comprehensive web-based UI for managing all your Google Cloud resources. It can seem overwhelming at first due to the sheer number of services available, but you'll primarily focus on a few key areas for this course.
Key areas of the GCP Console to be aware of include:

- The Navigation Menu (usually a "hamburger" icon ☰ on the left side) provides access to all GCP services, categorized for easier browsing (e.g., Compute Engine, Storage, BigQuery, and under AI, you'll find Vertex AI).
- The Project Selector at the top of the page is crucial for ensuring you are working within the correct project, especially if you manage multiple projects.
- The Search Bar at the top is an extremely useful tool. You can type the name of any service, feature, or even documentation page to quickly navigate to it.
- The Billing section is important for monitoring your credit usage and understanding any costs incurred (though for this course, you should aim to stay well within the free trial credits by following resource guidelines).
Once you navigate to Vertex AI (either through the navigation menu or by searching), you will enter its dedicated dashboard and interface. This is where you will perform most of your AI-specific tasks. Key sections within the Vertex AI interface include:

- Dashboard: Provides an overview of your recent activity, quick access to common tasks, and links to resources.
- Datasets: This is where you will register, manage, and inspect the datasets you use for training your AI models.
- Training: Here, you can create and monitor custom training jobs or AutoML training jobs.
- Models: This section serves as a registry for all your trained models, allowing you to view their details, versions, and evaluation metrics.
- Endpoints: Once a model is trained, you will deploy it to an endpoint from this section to make it available for serving predictions.
- Monitoring: After deploying a model, you can set up monitoring services here to track its performance and detect issues like data drift.
Spending some time clicking through these sections and getting a feel for the layout will be beneficial as we proceed with hands-on labs.

[GCP/VERTEX AI IN FOCUS]: Vertex AI is a managed machine learning platform designed to accelerate the entire lifecycle of ML projects. Its AutoML capabilities, a key feature we will leverage, allow you to train high-quality models on various data types (tabular, image, text, video) with minimal manual coding by automating complex tasks like model selection and hyperparameter tuning. This empowers you to focus on the applied aspects of your AI solution.

D. The Capstone Project: Laying the Groundwork (Your First Milestone!)
The theoretical knowledge and practical skills you acquire in this course will culminate in a semester-long capstone project. This is your opportunity to design, build, and deploy a live, cloud-hosted AI solution that addresses a real-world (or a well-defined fictional) business case of your choosing. Module 1 is dedicated to laying the critical foundation for this significant undertaking by guiding you through the process of defining your project and formalizing your initial ideas.

1. Brainstorming and Selecting Your Business Case
The first step in your capstone journey is to select a compelling business case. You have considerable freedom in this choice, allowing you to align your project with your interests. To spark your creativity, the "Software Lab Template" document provided with your course materials includes a section titled "10 Inspiration Ideas." These diverse examples range from retail applications like predicting cart abandonment to environmental monitoring by spotting deforestation from satellite images, and even fictional healthcare scenarios such as classifying X-ray images. Other ideas include forecasting hotel demand in hospitality, analyzing fan sentiment in sports, predicting student deadline misses in education, flagging fraudulent transactions in finance, recommending entertainment content, or detecting potholes for a smart city initiative.
You are welcome to choose one of these suggestions, adapt it to your specific interests, or invent an entirely new business case. The most important criteria are that the project genuinely engages you, that you can define a clear problem to be solved with AI, and that you can realistically obtain or generate the necessary data to train your model.
To structure your brainstorming, the "Software Lab Template" (under "Step-by-Step Project Guide: 1 Brainstorm & Pick Your Business-Case") suggests a practical approach. For each potential idea, consider and jot down (perhaps using sticky notes or a digital document) the following:

- Who: Who is the primary stakeholder or intended user of this AI solution? Who stands to benefit from its implementation?
- What: What is the core problem you are aiming to solve, or the key opportunity you are trying to address?
- Why: What is the value proposition? What is the tangible benefit or business impact of successfully solving this problem or realizing this opportunity?
After exploring several ideas, select the one that resonates most strongly with you. Then, for your chosen project, define one measurable Key Performance Indicator (KPI). This KPI will be your yardstick for success. Examples could include achieving an accuracy of at least 90% for a classification task, reducing processing time for a specific task by 15%, or ensuring a Mean Absolute Error (MAE) of no more than 5 units for a regression forecast.

2. Data Availability Check: The Fuel for Your AI
A crucial rule of thumb for the AutoML projects you will undertake in this course context is the need for a minimum amount of labeled data. Specifically, you must have, or be able to realistically scrape or generate, at least 100 labeled data instances (be they rows in a table, images, or text snippets). It's important to note that for many real-world AutoML tasks, especially those involving complex patterns or a large number of distinct classes, significantly more data is often better. For instance, Vertex AI documentation frequently suggests aiming for 1000+ rows for production-grade tabular models, or 50-100 images per class for robust image classification models. However, for the scope and timeframe of this capstone project, a minimum of 100 labeled examples will serve as a practical starting point to demonstrate the end-to-end process.
Therefore, as part of selecting your business case, you must confirm the availability of suitable data:

- Can you find an appropriate public dataset from sources like Kaggle, Google Dataset Search, or academic repositories?
- Is it feasible to scrape images or text from publicly available websites (always ensuring ethical and legal compliance, such as respecting robots.txt and terms of service)? Browser extensions or Python libraries can assist with this.
- Could you create synthetic data? For example, you might use generative AI tools like ChatGPT to create labeled text pairs for an NLP task, but if you do so, it's imperative to clearly note the use of synthetic data in your project's ethics section.
- Are you able to label data manually? For instance, you could take a set of customer reviews and manually label their sentiment (positive, negative, neutral) in a spreadsheet.
Most importantly, ensure that your chosen or created dataset has a clear "label" or "target" column (or equivalent for image/text data). This is the specific attribute that your AI model will learn to predict. Without this ground truth, supervised learning is not possible.

3. Milestone 1: The Project Proposal Canvas
With a business case selected and data availability confirmed, your first graded deliverable for this course is the Project Proposal Canvas. This document serves to formalize your project idea, providing a clear and concise overview of your intended capstone work. While the exact format might be a simple one-page document or a single presentation slide (as suggested by the "Software Lab Template" which mentions a "1-slide PDF" as the main artifact for this M1 milestone), it should typically include the following key elements:

- Business Case: A clear and succinct description of the problem you aim to solve or the opportunity you intend to address. Identify the primary stakeholders and articulate the value proposition of your proposed AI solution.
- Key Performance Indicator (KPI): State the specific, measurable, achievable, relevant, and time-bound (SMART) target that will define the success of your AI model.
- Data Sources: Describe where you will obtain your data. Characterize its nature (e.g., tabular, image, text), estimated size, and the key features it contains, especially the target label.
- High-Level AI Approach: Briefly state what type of AI problem you are tackling (e.g., classification, regression, object detection) and that you intend to use Vertex AI AutoML.
- Initial 12-Week Roadmap: Provide a brief outline of how you plan to progress through the course milestones over the semester. The weekly schedule provided in your course syllabus serves as an excellent template for this roadmap.
To prepare this proposal, you should use the template provided by your instructor or create a document that comprehensively covers these points. Completing this proposal thoughtfully ensures that you have a viable and well-considered project plan from the outset. As a valuable checkpoint, your course materials also suggest posting a one-sentence pitch of your project idea in the Module 1 discussion board. This is an excellent opportunity to receive early feedback from your peers and instructor, which can help you refine your concept before finalizing your proposal.

E. Diagramming Your End-to-End AI Architecture
Even at this initial stage of project framing, creating a visual representation of your proposed AI solution's flow can be immensely helpful. This doesn't need to be a deeply technical, exhaustive engineering diagram yet. Instead, aim for a high-level conceptual sketch that illustrates the main components of your system and how data is expected to move between them. For a typical Vertex AI AutoML project, such as the one you will be building for your capstone, the architecture will generally involve several key stages.
Consider the following components as you sketch your diagram:

- Data Source(s): Where does your raw data originate? This could be existing CSV files, folders containing images, a database, or an API feed.
- Google Cloud Storage (GCS): Your raw data will typically be uploaded to a GCS bucket. GCS will act as your central data lake or staging area for this data.
- Vertex AI Datasets: From GCS, you will formally register your data as a Vertex AI Dataset. This step involves defining the data type (tabular, image, text, etc.) and schema, and it might also connect to Vertex AI's labeling tools if your data requires annotation.
- Vertex AI AutoML Training: This is the core engine where Vertex AI automatically trains and tunes a machine learning model based on your registered dataset and your specified objective (e.g., classification, regression). For now, you can represent this as a "black box" that takes your dataset and produces a trained model.
- Vertex AI Model Registry: Your trained model, along with its various versions and associated metadata, will be stored and managed in the Vertex AI Model Registry.
- Vertex AI Endpoint: To make your model usable, it will be deployed to a Vertex AI Endpoint. This endpoint provides an API that applications can call to get predictions.
- Demo Application: Your lightweight front-end application (e.g., built with Streamlit or AppSheet) will interact with the Vertex AI Endpoint, sending new data for prediction and displaying the results to the user.
- (Optional but Recommended) Monitoring/Logging: Conceptually, you should also consider that Vertex AI can monitor your deployed endpoint for issues like data drift and log prediction activity, which feeds back into the MLOps cycle.
To create this diagram, you can use a simple drawing tool—even a clear sketch on pen and paper that you then photograph is acceptable. Alternatively, digital tools like Google Drawings, diagrams.net (formerly draw.io), or presentation software like PowerPoint or Google Slides can be used to create a more polished visual. The key is to clearly show the main components and the directional flow of data between them. This exercise will help solidify your understanding of the end-to-end process you are about to embark on and will be a useful artifact for your project proposal and final presentation.

F. Outlining Milestones for Your Semester-Long AI Project
This course is intentionally designed with a scaffolded approach to your capstone project. This means that the complex task of building an end-to-end AI solution is broken down into manageable, sequential pieces. Each of the first eleven modules of the course has a corresponding "Milestone Lab Assignment." Each of these milestones represents a concrete, deliverable step that progressively builds towards your final, complete capstone package.
The weekly schedule detailed in your course syllabus effectively is your high-level milestone plan. It clearly lays out the topic for each module and the associated lab deliverable. Your Project Proposal Canvas (Milestone 1) should include a brief roadmap section that reflects this progression of tasks. This demonstrates that you understand the overall structure of the project and the sequence of deliverables required at each stage of your development journey.
Let's reiterate the typical sequence of these crucial milestones:

- Module 1: Project Proposal Canvas (Defining your project)
- Module 2: Data Upload & Dataset Registration (Getting your data into the cloud and recognized by Vertex AI)
- Module 3: Data Labeling & Split (Preparing your data for training)
- Module 4: AutoML Training Job (Training your first model)
- Module 5: Model Evaluation & Explainability (Understanding your model's performance)
- Module 6: Endpoint Deployment (Making your model accessible via an API)
- Module 7: Prediction Testing (SDK/cURL) (Verifying your deployed endpoint)
- Module 8: App Integration Demo (Building a user interface for your model)
- Module 9: Monitoring & Drift Alerts (Setting up model monitoring)
- Module 10: Responsible-AI Audit & Mitigation (Ensuring ethical considerations)
- Module 11: Launch Checklist & Roll-Back Plan (Preparing for "production")
- Module 12 (Finals Week): Submission of the Final Capstone Package (This includes your live endpoint, demo application, a comprehensive slide deck, a narrated demo video, and a reflective memo).
When preparing your Project Proposal, you should incorporate this list, or a summary of it, into your roadmap section. This will not only fulfill the proposal requirements but also serve as a personal checklist and timeline for your work throughout the semester.

G. Establishing Collaborative Norms and Peer Learning
While a significant portion of your capstone project work will be an individual endeavor, the field of Artificial Intelligence, much like many other technical disciplines, thrives on collaboration and peer interaction. Learning in AI is often significantly accelerated through the sharing of knowledge, insights, and challenges within a supportive community. This course actively encourages such an environment.
Several avenues for collaboration and peer learning will be available:

- Discussion Boards: Your course platform will host discussion boards. These are excellent forums for asking questions when you encounter hurdles, sharing insights or "aha!" moments you experience, and providing constructive feedback to your peers on their ideas and progress. For instance, the Module 1 discussion board activity, where you post a one-sentence pitch of your project, is designed to foster this kind of early peer interaction and refinement.
- Peer Feedback: Some assignments or activities throughout the course may involve formally giving or receiving feedback from your classmates. Engaging thoughtfully in these peer review processes is not only helpful for improving your own work and that of others but also develops a valuable professional skill.
- Zoom Workshops or Live Sessions: Your instructor may schedule live sessions or workshops. Active participation in these is highly encouraged. They provide invaluable opportunities to learn directly from your instructor's expertise, ask clarifying questions in real-time, and engage in dynamic discussions with your classmates.
Remember that everyone comes to this course with a unique background, varying levels of prior experience, and different perspectives. This diversity is a strength. Approach your interactions with peers with respect, maintain an open and curious mindset, and be willing to both teach what you know and learn from the experiences and insights of others. A collaborative spirit will enrich your learning experience and that of the entire class.

H. Chapter Summary & Next Steps
This inaugural chapter has served to set the stage for your comprehensive journey into Applied Artificial Intelligence. We have laid a critical foundation by introducing several key concepts and initiating important practical steps. You've been introduced to the overarching AI project life cycle, providing a roadmap that will guide you from initial problem definition all the way through to the deployment and ongoing maintenance of MLOps-driven solutions. We've delved into the crucial skill of translating ambiguous business pain points into specific, measurable AI problems with clearly defined Key Performance Indicators (KPIs), a cornerstone of any successful applied AI endeavor.
Furthermore, you've taken your first practical steps into the Google Cloud Platform (GCP), learning how to set up your project environment and enable the Vertex AI API, the powerful suite of tools that will be central to your model development work. We've also formally kicked off your semester-long capstone project, guiding you through the initial brainstorming process, considerations for data availability, and the requirements for your first milestone: the Project Proposal Canvas. Finally, we underscored the importance of visualizing your AI system's architecture at a high level and understanding the structured progression of milestones that will guide your project development throughout this course.
By now, you should have a much clearer picture of what an end-to-end cloud AI solution entails and a well-defined roadmap for building one yourself. You are equipped with the initial framework and the foundational knowledge to confidently proceed to the next stages of your project.

Looking Ahead:
With your project proposal taking shape and your cloud environment initiated, our focus in Chapter 2 (Module 2), titled "Data Acquisition & Pipeline Design," will shift to the practicalities of sourcing and ingesting the data that will fuel your AI model. In the upcoming chapter, you will learn how to securely upload your datasets to Google Cloud Storage, organize your data effectively within the cloud, and formally register these datasets with Vertex AI. This will make your data ready for the subsequent, critical stages of cleaning, labeling, feature engineering, and ultimately, model training. The journey into the data-centric aspects of your AI project begins now!
`;

// Data structures for managing chapters
interface Chapter {
    id: string;
    title: string; // Short title for navigation
    content: string; // Full text content including "Chapter X: Full Title"
}

const chapters: Chapter[] = [
    {
        id: 'ch0',
        title: 'Ch 0: Introduction',
        content: chapter0TextContent
    },
    {
        id: 'ch1',
        title: 'Ch 1: Orientation',
        content: chapterTextContent // This was the original chapterTextContent variable
    }
];

let currentChapterId = 'ch1'; // Default to Chapter 1

const MAIN_CHAPTER_NAV_ID = 'main-chapter-nav-container';

// Renders the main chapter navigation links
function renderMainChapterNavigation(chaptersData: Chapter[], currentChapId: string, sidebarNavElement: HTMLElement) {
    let mainChapterNavContainer = document.getElementById(MAIN_CHAPTER_NAV_ID);

    // Create container and heading if they don't exist
    if (!mainChapterNavContainer) {
        mainChapterNavContainer = document.createElement('div');
        mainChapterNavContainer.id = MAIN_CHAPTER_NAV_ID;
        // Styling for the container: padding, margin, border
        mainChapterNavContainer.className = 'pt-2 pb-4 mb-4 border-b border-slate-200';

        const heading = document.createElement('h3');
        // Styling for the "Chapters" heading
        heading.className = 'px-6 mb-2 text-xs font-semibold tracking-wider text-slate-500 uppercase';
        heading.textContent = 'Chapters';
        mainChapterNavContainer.appendChild(heading);

        const tocList = document.getElementById('table-of-contents-list');
        if (tocList) {
            // Insert the main chapter navigation before the sub-chapter table of contents
            sidebarNavElement.insertBefore(mainChapterNavContainer, tocList);
        } else {
            // Fallback if tocList isn't there (e.g., if sidebar structure changes)
            sidebarNavElement.appendChild(mainChapterNavContainer);
        }
    }

    // Clear only previous chapter links, keep the container and "Chapters" heading
    const existingLinks = mainChapterNavContainer.querySelectorAll('a.main-chapter-link');
    existingLinks.forEach(link => link.remove());

    // Create and append links for each chapter
    chaptersData.forEach(chapter => {
        const link = document.createElement('a');
        link.href = '#'; // Prevent page jump, actual navigation handled by JS
        link.textContent = chapter.title;
        link.setAttribute('data-chapter-id', chapter.id);
        // Base classes for all main chapter links
        link.className = 'main-chapter-link block py-2 px-6 text-slate-600 hover:bg-slate-100 hover:text-blue-600 text-sm font-medium';

        if (chapter.id === currentChapId) {
            link.classList.add('active-main-chapter-link'); // Apply active style
        }

        link.addEventListener('click', (e) => {
            e.preventDefault();
            const newChapterId = link.getAttribute('data-chapter-id');
            if (newChapterId && newChapterId !== currentChapterId) {
                currentChapterId = newChapterId; // Update global state
                displayChapter(currentChapterId); // Re-render content for the new chapter
            }
        });
        mainChapterNavContainer.appendChild(link); // Append to the main chapter navigation container
    });
}
`;

interface ContentItem {
    // type: 'h1' | 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'callout' | 'knowledge-check-q' | 'knowledge-check-a' | 'pre';
    // text: string;
    // For H3, ensure the search block correctly captures the content.
    // The actual ContentItem interface is much longer. I'm only showing a snippet for brevity.
    // Make sure the SEARCH block is precise.
    type: 'h1' | 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'callout' | 'knowledge-check-q' | 'knowledge-check-a' | 'pre';
    text: string;
    level?: number; // For headings
    calloutType?: 'KEY TAKEAWAY' | 'PRO TIP' | 'ETHICAL CONSIDERATION' | 'GCP/VERTEX AI IN FOCUS';
    items?: string[]; // For lists
    lang?: string; // for code blocks
    keyword?: string; // For special paragraphs like "Action:"
}

interface NavSection {
    id: string;
    title: string;
    level: number;
    element: HTMLElement;
}

const GColors = {
    blue: '#4285F4',
    green: '#34A853',
    yellow: '#FBBC05',
    red: '#EA4335',
};

function slugify(text: string): string {
    return String(text)
        .normalize('NFKD') 
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') 
        .replace(/[^\w-]+/g, '') 
        .replace(/--+/g, '-'); 
}

function parseChapterText(rawText: string): ContentItem[] {
    const lines = rawText.split('\n');
    const contentItems: ContentItem[] = [];
    let currentListItems: string[] = [];
    let currentListType: 'ul' | 'ol' | null = null;
    let inKnowledgeCheck = false; // Though not present in new content, kept for future use

    function flushList() {
        if (currentListItems.length > 0 && currentListType) {
            contentItems.push({ type: currentListType, text: '', items: [...currentListItems] });
            currentListItems = [];
            currentListType = null;
        }
    }

    const keywordParagraphRegex = /^(Action|Core Question|Activities|Your Focus \(Module \d+(?: & \d+)?\)|Google Account|Access GCP Console|Redeem Credits|Create a Project|Project ID|Billing|Navigation Menu \(☰\)|Project Selector|Search Bar|Vertex AI Dashboard|Dashboard|Datasets|Training|Models|Endpoints|Monitoring|\(Optional\) Monitoring\/Logging|Theme|Example Use-Case & KPI|Who|What|Why|Business Case|Key Performance Indicator \(KPI\)|Data Sources|High-Level AI Approach|Initial 12-Week Roadmap|Data Source\(s\)|Google Cloud Storage \(GCS\)|Vertex AI Datasets|Vertex AI AutoML Training|Vertex AI Model Registry|Vertex AI Endpoint|Demo Application|Checkpoint|Discussion Boards|Peer Feedback|Zoom Workshops|Module \d+|Problem Definition & Business Case|Data Acquisition & Preparation|Model Development & Training|Model Evaluation|Deployment|Monitoring & Maintenance \(MLOps\)|Identifying the Core Issue|Determining if AI is a Suitable Solution|Defining the AI Task|Establishing Measurable Key Performance Indicators \(KPIs\)|For classification tasks|For regression tasks|For automation tasks|To illustrate further|Ensure you have a Google Account|Access the GCP Console|Activate Free Trial\/Credits|Create a New Project|Verify Project Selection|Navigate to the API Library|Locate and Select Vertex AI API|Enable the API|Confirmation|The Navigation Menu|The Project Selector|The Search Bar|The Billing section|Dashboard|Datasets|Training|Models|Endpoints|Monitoring|Can you find an appropriate public dataset|Is it feasible to scrape images or text|Could you create synthetic data|Are you able to label data manually|Business Case|Key Performance Indicator \(KPI\)|Data Sources|High-Level AI Approach|Initial 12-Week Roadmap|Data Source\(s\)|Google Cloud Storage \(GCS\)|Vertex AI Datasets|Vertex AI AutoML Training|Vertex AI Model Registry|Vertex AI Endpoint|Demo Application|\(Optional but Recommended\) Monitoring\/Logging|Module \d+|Discussion Boards|Peer Feedback|Zoom Workshops or Live Sessions):\s*(.*)/i;


    for (const line of lines) {
        const trimmedLine = line.trim();

        // Skip empty lines if they are not part of flushing a list
        if (!trimmedLine && !currentListType) {
            continue;
        }
        
        const chapterTitleMatch = trimmedLine.match(/^Chapter \d+.*?: (.*)/);
        if (chapterTitleMatch) {
            flushList();
            contentItems.push({ type: 'h1', text: chapterTitleMatch[1].trim(), level: 1 });
            inKnowledgeCheck = false;
            continue;
        }

        const majorSectionMatch = trimmedLine.match(/^([A-H])\.\s+([A-Za-z0-9\s&:'’()-]+)$/);
        if (majorSectionMatch) {
            flushList();
            contentItems.push({ type: 'h2', text: majorSectionMatch[2].trim(), level: 2 });
            inKnowledgeCheck = false;
            continue;
        }

        const specificH2Titles = ["Learning Objectives for this Chapter:", "Chapter Summary & Next Steps", "Looking Ahead:"];
        if (specificH2Titles.includes(trimmedLine.replace(/:$/, ''))) { // Remove trailing colon for match
            flushList();
            contentItems.push({ type: 'h2', text: trimmedLine.replace(':','').trim(), level: 2 });
            inKnowledgeCheck = false;
            continue;
        }
        
        const subSectionMatch = trimmedLine.match(/^\d+\.\s+([A-Za-z0-9\s&:'’()-]+(?:[:])?)$/); // Allow optional colon at the end
        if (subSectionMatch) {
            const lastItem = contentItems[contentItems.length - 1];
            // Qualify as H3 only if it follows an H2 or H3, or specific H2 keywords
            let isSubSectionContext = false;
            if (lastItem) {
                if (lastItem.type === 'h2' || lastItem.type === 'h3') {
                    isSubSectionContext = true;
                } else if (lastItem.type === 'p' && lastItem.text.startsWith("To begin working with the Google Cloud Platform")) { // Context for GCP setup steps
                     isSubSectionContext = true;
                } else if (lastItem.type === 'p' && lastItem.text.startsWith("The \"Software Lab Template\" under \"Step-by-Step Guide: 2 Enable Vertex AI APIs\"")) { // Context for Vertex AI API steps
                     isSubSectionContext = true;
                } else if (lastItem.type === 'p' && lastItem.text.startsWith("Key areas of the GCP Console to be aware of include:")) { // Context for GCP console areas
                     isSubSectionContext = true;
                } else if (lastItem.type === 'p' && lastItem.text.startsWith("Key sections within the Vertex AI interface include:")) { // Context for Vertex AI interface
                     isSubSectionContext = true;
                } else if (lastItem.type === 'p' && lastItem.text.startsWith("To structure your brainstorming, the \"Software Lab Template\"")) { // Context for brainstorming
                     isSubSectionContext = true;
                } else if (lastItem.type === 'p' && lastItem.text.startsWith("Therefore, as part of selecting your business case, you must confirm the availability of suitable data:")) { // Context for data availability
                     isSubSectionContext = true;
                } else if (lastItem.type === 'p' && lastItem.text.startsWith("With a business case selected and data availability confirmed, your first graded deliverable")) { // Context for Milestone 1
                     isSubSectionContext = true;
                } else if (lastItem.type === 'p' && lastItem.text.startsWith("Consider the following components as you sketch your diagram:")) { // Context for Architecture Diagram
                     isSubSectionContext = true;
                } else if (lastItem.type === 'p' && lastItem.text.startsWith("Let's reiterate the typical sequence of these crucial milestones:")) { // Context for Milestones list
                     isSubSectionContext = true;
                } else if (lastItem.type === 'p' && lastItem.text.startsWith("Several avenues for collaboration and peer learning will be available:")) { // Context for collaboration norms
                     isSubSectionContext = true;
                }

            }
             if (isSubSectionContext) {
                 flushList();
                 contentItems.push({ type: 'h3', text: subSectionMatch[1].replace(':','').trim(), level: 3 });
                 inKnowledgeCheck = false;
                 continue;
            }
        }

        const calloutMatch = trimmedLine.match(/^\[(KEY TAKEAWAY|PRO TIP|ETHICAL CONSIDERATION|GCP\/VERTEX AI IN FOCUS)\]:\s*(.*)/);
        if (calloutMatch) {
            flushList();
            contentItems.push({
                type: 'callout',
                calloutType: calloutMatch[1] as ContentItem['calloutType'],
                text: calloutMatch[2].trim()
            });
            inKnowledgeCheck = false;
            continue;
        }

        if (trimmedLine === 'Knowledge Check') { 
            flushList();
            contentItems.push({ type: 'h2', text: 'Knowledge Check', level: 2 });
            inKnowledgeCheck = true;
            continue;
        }

        if (inKnowledgeCheck) { 
            if (/^Q\d*:\s*(.*)/.test(trimmedLine)) {
                flushList();
                contentItems.push({ type: 'knowledge-check-q', text: trimmedLine.match(/^Q\d*:\s*(.*)/)![1].trim() });
                continue;
            }
            if (/^A\d*:\s*(.*)/.test(trimmedLine)) {
                flushList();
                contentItems.push({ type: 'knowledge-check-a', text: trimmedLine.match(/^A\d*:\s*(.*)/)![1].trim() });
                continue;
            }
        }
        
        const keywordPMatch = trimmedLine.match(keywordParagraphRegex);
        if (keywordPMatch) {
            flushList();
            contentItems.push({ type: 'p', keyword: keywordPMatch[1].trim().replace(/:$/, ''), text: keywordPMatch[2].trim() });
            inKnowledgeCheck = false;
            continue;
        }

        if (/^-\s*(.*)/.test(trimmedLine) || /^\*\s*(.*)/.test(trimmedLine)) {
            if (currentListType !== 'ul') {
                flushList(); 
                currentListType = 'ul';
            }
            currentListItems.push(trimmedLine.substring(trimmedLine.indexOf(' ')+1).trim());
            continue;
        }
        
        const olItemMatch = trimmedLine.match(/^\d+\.\s*(.*)/);
        if (olItemMatch) {
             // Heuristic: If a line starts with "Number. Text" and is not captured as H3, 
             // and it's not a module list item, treat as OL item.
             const potentialH3Text = olItemMatch[1].trim();
             const isLikelyListItem = potentialH3Text.length < 100 && !potentialH3Text.endsWith('.'); // Simple heuristic
            
             // Check if it's a "Module X: Title" list item, which should be `p` or styled `li`
            const moduleListItemMatch = trimmedLine.match(/^Module \d+\s*:\s*(.*)/i);
            if (moduleListItemMatch) {
                 flushList();
                 contentItems.push({type: 'p', text: trimmedLine}); // Render as paragraph or could be styled list item
                 continue;
            }


            if (currentListType !== 'ol' && isLikelyListItem) {
                flushList();
                currentListType = 'ol';
            }
            if (isLikelyListItem) {
                 currentListItems.push(olItemMatch[1].trim());
                 continue;
            }
        }


        if (trimmedLine) {
            flushList(); 
            // Check if the line is "Other tasks, which we will explore later, include Clustering..."
            // This line contains a list within it, so we'll handle it as a paragraph for now, or split it.
            // For simplicity, let's treat as paragraph
             if (trimmedLine.startsWith("Other tasks, which we will explore later, include Clustering")) {
                 contentItems.push({ type: 'p', text: trimmedLine });
             } else if (trimmedLine.match(/^Module \d+\s*\(Finals Week\):\s*(.*)/i)) { // Special case for Finals Week
                contentItems.push({ type: 'p', text: trimmedLine });
             }
             else {
                 contentItems.push({ type: 'p', text: trimmedLine });
             }
        } else {
            flushList(); 
        }
    }
    flushList(); 
    return contentItems;
}

function renderChapter(parsedContent: ContentItem[], mainContentEl: HTMLElement, navEl: HTMLElement): NavSection[] {
    mainContentEl.innerHTML = '';
    navEl.innerHTML = '';
    const navSections: NavSection[] = [];
    let chapterTitle = "Chapter";

    parsedContent.forEach(item => {
        let el: HTMLElement;
        switch (item.type) {
            case 'h1':
                el = document.createElement('h1');
                el.textContent = item.text;
                chapterTitle = item.text; 
                el.className = 'text-3xl sm:text-4xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-300';
                mainContentEl.appendChild(el);
                break;
            case 'h2':
            case 'h3':
                el = document.createElement(item.type);
                el.textContent = item.text;
                el.id = slugify(item.text);
                if (item.type === 'h2') {
                    el.className = 'text-2xl sm:text-3xl font-bold text-slate-800 mt-10 mb-5 pb-2 border-b border-slate-200';
                } else { // h3
                    el.className = 'text-xl sm:text-2xl font-bold text-slate-700 mt-8 mb-4';
                }
                mainContentEl.appendChild(el);
                if (item.level) { 
                   navSections.push({ id: el.id, title: item.text, level: item.level, element: el });
                }
                break;
            case 'p':
                el = document.createElement('p');
                if (item.keyword) {
                    const strong = document.createElement('strong');
                    strong.textContent = `${item.keyword}: `;
                    el.appendChild(strong);
                    el.appendChild(document.createTextNode(item.text));
                } else {
                    el.textContent = item.text;
                }
                el.className = 'my-4 text-slate-700 leading-relaxed';
                mainContentEl.appendChild(el);
                break;
            case 'ul':
            case 'ol':
                el = document.createElement(item.type);
                el.className = 'list-inside my-4 pl-5 text-slate-700 leading-relaxed';
                if (item.type === 'ul') el.classList.add('list-disc');
                if (item.type === 'ol') el.classList.add('list-decimal');
                item.items?.forEach(liText => {
                    const li = document.createElement('li');
                    li.textContent = liText;
                    li.className = 'mb-1.5';
                    el.appendChild(li);
                });
                mainContentEl.appendChild(el);
                break;
            case 'callout':
                el = document.createElement('div');
                const iconSpan = document.createElement('span');
                iconSpan.setAttribute('aria-hidden', 'true');
                iconSpan.className = 'mr-3 text-2xl shrink-0'; 

                const textDiv = document.createElement('div');
                const titleH4 = document.createElement('h4');
                titleH4.className = 'font-bold mb-1 text-base'; 
                titleH4.textContent = item.calloutType!;
                
                const contentP = document.createElement('p');
                contentP.className = 'text-sm'; 
                contentP.textContent = item.text;

                textDiv.appendChild(titleH4);
                textDiv.appendChild(contentP);
                el.appendChild(iconSpan);
                el.appendChild(textDiv);
                
                el.className = 'p-4 my-6 rounded-lg shadow-lg border-l-4 flex items-start'; 
                switch (item.calloutType) {
                    case 'KEY TAKEAWAY':
                        el.classList.add('bg-blue-50', 'border-blue-500', 'text-blue-900');
                        iconSpan.textContent = '🔑'; 
                        iconSpan.style.color = GColors.blue;
                        break;
                    case 'PRO TIP':
                        el.classList.add('bg-yellow-50', 'border-yellow-500', 'text-yellow-900');
                        iconSpan.textContent = '💡';
                        iconSpan.style.color = GColors.yellow;
                        break;
                    case 'ETHICAL CONSIDERATION':
                        el.classList.add('bg-red-50', 'border-red-500', 'text-red-900');
                        iconSpan.textContent = '⚖️'; 
                        iconSpan.style.color = GColors.red;
                        break;
                    case 'GCP/VERTEX AI IN FOCUS':
                        el.classList.add('bg-green-50', 'border-green-500', 'text-green-900');
                        iconSpan.textContent = '☁️'; 
                        iconSpan.style.color = GColors.green;
                        break;
                }
                mainContentEl.appendChild(el);
                break;
            case 'knowledge-check-q':
                el = document.createElement('p');
                el.innerHTML = `<strong class="text-slate-700">Q:</strong> ${item.text}`;
                el.className = 'mt-6 mb-1 font-medium text-slate-800'; 
                mainContentEl.appendChild(el);
                break;
            case 'knowledge-check-a':
                el = document.createElement('p');
                el.innerHTML = `<span class="text-slate-600">A:</span> ${item.text}`;
                el.className = 'mb-2 ml-4 text-slate-700';
                mainContentEl.appendChild(el);
                break;
            case 'pre': 
                el = document.createElement('pre');
                const code = document.createElement('code');
                code.textContent = item.text;
                if (item.lang) code.className = `language-${item.lang}`;
                el.appendChild(code);
                mainContentEl.appendChild(el);
                break;
        }
    });
    
    const mobileTitleEl = document.getElementById('mobile-chapter-title');
    if (mobileTitleEl) mobileTitleEl.textContent = chapterTitle;
    const sidebarTitleEl = document.getElementById('sidebar-main-title');
    if (sidebarTitleEl) sidebarTitleEl.textContent = chapterTitle.length > 28 ? "Contents" : chapterTitle;


    navSections.forEach(section => {
        const link = document.createElement('a');
        link.href = `#${section.id}`;
        link.textContent = section.title;
        link.className = 'sidebar-link text-slate-600 hover:text-blue-600 block text-sm';
    
        if (section.level === 3) {
            link.classList.add('pl-10', 'py-1.5'); 
        } else { 
            link.classList.add('pl-6', 'py-2', 'font-medium'); 
        }
    
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = document.getElementById(section.id);
            if (targetElement) {
                const headerOffset = 0; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            const sidebar = document.getElementById('sidebar-nav');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            if (sidebar?.classList.contains('translate-x-0') && window.innerWidth < 768) { 
                 sidebar?.classList.replace('translate-x-0','-translate-x-full');
                 mobileMenuButton?.setAttribute('aria-expanded', 'false');
                 if (mobileMenuButton) mobileMenuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
            }
        });
        navEl.appendChild(link);
    });

    return navSections;
}

function setupInteractivity(navSections: NavSection[]) {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const sidebar = document.getElementById('sidebar-nav');
    mobileMenuButton?.addEventListener('click', () => {
        sidebar?.classList.toggle('-translate-x-full');
        sidebar?.classList.toggle('translate-x-0');
        const isExpanded = sidebar?.classList.contains('translate-x-0');
        mobileMenuButton.setAttribute('aria-expanded', String(isExpanded));
         if (isExpanded) {
            mobileMenuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`; // Close icon
        } else {
            mobileMenuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`; // Hamburger icon
        }
    });

    const navLinks = Array.from(document.querySelectorAll('#table-of-contents-list a')) as HTMLAnchorElement[];
    const observerOptions = {
      rootMargin: "-15% 0px -80% 0px", 
      threshold: 0
    };

    const observer = new IntersectionObserver(entries => {
        let currentActiveSectionId : string | null = null;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                 currentActiveSectionId = entry.target.id;
            }
        });
        
        if (!currentActiveSectionId) {
            let topmostVisibleEntry: IntersectionObserverEntry | null = null;
            for (const entry of entries) {
                if (entry.boundingClientRect.top >= 0 && entry.boundingClientRect.top < window.innerHeight) {
                    if (!topmostVisibleEntry || entry.boundingClientRect.top < topmostVisibleEntry.boundingClientRect.top) {
                        topmostVisibleEntry = entry;
                    }
                }
            }
            if (topmostVisibleEntry) {
                currentActiveSectionId = topmostVisibleEntry.target.id;
            }
        }


        if (window.scrollY === 0) { 
            navLinks.forEach(link => {
                link.classList.remove('active-nav-link', 'active-nav-link-sub');
            });
            return;
        }
        
        if ((window.innerHeight + Math.ceil(window.scrollY)) >= document.body.offsetHeight) { 
            const lastSection = navSections[navSections.length - 1];
            if (lastSection) currentActiveSectionId = lastSection.id;
        }

        navLinks.forEach(link => {
            link.classList.remove('active-nav-link', 'active-nav-link-sub');
            if (link.getAttribute('href') === `#${currentActiveSectionId}`) {
                const section = navSections.find(s => s.id === currentActiveSectionId);
                if (section && section.level === 3) {
                    link.classList.add('active-nav-link-sub');
                } else if (section) { 
                    link.classList.add('active-nav-link');
                }
            }
        });

    }, observerOptions);

    navSections.forEach(section => {
        if (section.element) observer.observe(section.element);
    });
    
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
}

// Main function to display a chapter
function displayChapter(chapterId: string) {
    currentChapterId = chapterId; // Ensure global state is updated
    const chapterToDisplay = chapters.find(c => c.id === chapterId);

    const sidebarNavElement = document.getElementById('sidebar-nav') as HTMLElement | null;
    if (!sidebarNavElement) {
        console.error("Sidebar navigation element (#sidebar-nav) not found.");
        return;
    }
    // Render/update main chapter navigation, passing the current chapterId for active state
    renderMainChapterNavigation(chapters, currentChapterId, sidebarNavElement);

    const mainContentEl = document.getElementById('chapter-content-container');
    const navEl = document.getElementById('table-of-contents-list'); // For sub-chapter navigation

    if (!chapterToDisplay) {
        console.error(`Chapter with id ${chapterId} not found.`);
        if (mainContentEl) mainContentEl.innerHTML = '<p class="text-red-500 p-4">Chapter content not found.</p>';
        if (navEl) navEl.innerHTML = ''; // Clear sub-chapter navigation
        // Update titles to reflect error or default state
        const mobileTitleEl = document.getElementById('mobile-chapter-title');
        if (mobileTitleEl) mobileTitleEl.textContent = "Error";
        const sidebarMainTitleEl = document.getElementById('sidebar-main-title');
        if (sidebarMainTitleEl) sidebarMainTitleEl.textContent = "Error";
        return;
    }

    // Proceed if chapter content and DOM elements are found
    if (mainContentEl && navEl) {
        const parsedContent = parseChapterText(chapterToDisplay.content);
        // renderChapter populates mainContentEl (chapter text) and navEl (sub-chapter ToC)
        const navSections = renderChapter(parsedContent, mainContentEl, navEl);
        // setupInteractivity handles scroll-spying for the sub-chapter ToC
        setupInteractivity(navSections);
    } else {
        console.error('Required DOM elements for chapter content (#chapter-content-container) or sub-navigation (#table-of-contents-list) not found.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial display of the default chapter
    displayChapter(currentChapterId);
});