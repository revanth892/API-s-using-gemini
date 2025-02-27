

const API_KEY='AIzaSyB3klbhd7yOfGi7wf-85NsO5QFDFW4m7UQ'

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

// ...
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"});
// The Gemini 1.5 models are versatile and work with most use cases
module.exports=model;