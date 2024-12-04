2) 1. Background. UIDAI has multiple portals on the Internet for resident engagement and back office operations. These portals are protected with CAPTCHA for denial of service- related attacks. UIDAI believes that CAPTCHA is a barrier to smooth resident engagement with the aadhaar portals and therefore intends to remove it soon. Instead of active CAPTCHA, UIDAI is looking for a passive solution that can differentiate between a bot and a human operator. 2. Problem Description. As part of the challenge, participating teams to develop a solution, mostly following a passive approach through collection of environmental parameters and using AI/ML to analyze it in the backend to differentiate between bot and human-being. The passive solution may capture environmental details through the browser context and analyze the same with the help of ML models deployed in the backend. This solution, once accepted would be used by the UIDAI to protect all backend APIs from DoS/DDoS based vulnerabilities. The solution must meet the following requirements:- 3. The proposed solution must meet the following objectives. 3.1 Feature Requirements. The solution must define the list of environmental parameters that need to be captured to differentiate between a bot and a human being. If passive parameter analysis is unable to differentiate, then the user may be asked to do a few minimal interactions with the portal. User experience is important to UIDAI and hence human interaction is to be limited. 3.2 Frontend code to capture environmental or human interaction data must be compliant with the javascript framework. Participating teams may choose to use any framework like React/TypeScript/Flutter to demonstrate the solution. 3.3 As part of the solution, the required backend ML model to analyze the front- end capture of environment parameters or human interaction data must be developed to demonstrate the solution. 5. Expected Solution. The solution must be complete with both frontend and backend design, corresponding code and ML model to demonstrate the solution.
To differentiate between human users and bots, the system should capture and analyze the following environmental parameters:
Device Characteristics:
Operating System and Version
Browser Type and Version
Screen Resolution
Installed Fonts
Time Zone
Behavioral Biometrics:
Mouse Movements and Click Patterns
Keyboard Typing Dynamics
Scroll Behavior
Touch Gestures (for touch-enabled devices)
Network Attributes:
IP Address and Geolocation
Network Latency
HTTP Headers
TLS Fingerprinting
Browser Capabilities:
Enabled Plugins and Extensions
JavaScript and Cookie Support
Canvas and WebGL Rendering
Collecting and analyzing these parameters can help in creating a comprehensive profile to distinguish between human users and bots.
 Frontend Implementation
The frontend is responsible for capturing the necessary environmental parameters and transmitting them securely to the backend for analysis.
Frameworks:
React.js: A popular JavaScript library for building user interfaces, offering a component-based architecture.
Vue.js: A progressive JavaScript framework known for its simplicity and flexibility.
Angular: A robust framework for building dynamic web applications.
Tools and APIs:
Browser APIs: Utilize native browser APIs to gather device and browser information.
Navigator API for device and browser details.
Screen API for screen resolution.
Performance API for timing metrics.
FingerprintJS: An open-source library for browser fingerprinting to identify unique users.
Mouseflow or Hotjar: Tools to capture and analyze user interaction patterns.
Data Transmission:
Use Axios or the native Fetch API to send collected data to the backend securely over HTTPS.
Backend Implementation
The backend processes the data received from the frontend, applies machine learning models to detect bots, and responds accordingly.
Frameworks:
Node.js with Express: For building scalable server-side applications.
Python with Flask or Django: For rapid development and flexibility.
Machine Learning Models:
Random Forest Classifier: An ensemble learning method suitable for handling diverse features and capturing complex interactions.
Gradient Boosting Machines (e.g., XGBoost): Effective for classification tasks with high accuracy.
Deep Neural Networks (DNNs): Capable of modeling intricate patterns in user behavior.
Model Training:
Data Collection: Gather labeled datasets of known human and bot interactions.
Feature Engineering: Extract meaningful features from raw data, such as average mouse movement speed or keystroke intervals.
Model Evaluation: Use cross-validation and metrics like accuracy, precision, recall, and F1-score to assess model performance.
Tools:
Scikit-Learn: For implementing traditional machine learning algorithms.
TensorFlow or PyTorch: For developing and training deep learning models.
Pandas and NumPy: For data manipulation and preprocessing.
Dataset:- https://huggingface.co/datasets/akhil033/BotsDetect
 Recommended Technology Stack:
Frontend:
Framework: Utilize React.js for building responsive user interfaces.
Data Collection: Implement JavaScript to capture user interactions (e.g., mouse movements, keystrokes) and environmental data (e.g., browser type, screen resolution).
Backend:
Server: Use Node.js for handling asynchronous data processing.
Database: Employ MongoDB for storing user interaction data due to its scalability and flexibility.
ML Framework: Develop and deploy models using TensorFlow or PyTorch, which offer extensive support for deep learning architectures.
APIs and Tools:
Data Transmission: Use RESTful APIs to send collected data from the frontend to the backend securely.
Model Serving: Implement TensorFlow Serving or TorchServe for deploying ML models in production.