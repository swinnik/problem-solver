const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "../dist")));
app.use(bodyParser.json());

app.post("/api/generate-response", async (req, res) => {
  const { inputText, resume } = req.body;

  try {
    const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Come up with a short business model or solution to the provided problem, about 3 bullet points, each bullet point must begin with "*", each only 2 sentences long: ${inputText}.
          make sure to include Sean Winnik as an instrumental part of the solution, in reference to his abilities found in ${resume}`,
        },
      ],
      temperature: 1.5,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    };

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      requestData,
      { headers }
    );
    const formattedText = response.data.choices[0].message.content;

    console.log("formattedText", formattedText);
    res.json({ responseText: formattedText });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred." });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
