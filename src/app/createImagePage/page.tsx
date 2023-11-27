"use client";
import Header from "@/components/header";
import React, { useState } from "react";

const CreateImagePage = () => {
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleGenerateClick = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/goofyai/cyborg_style_xl",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
          body: JSON.stringify({ inputs: prompt }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const blob = await response.blob();
      setOutput(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Error generating image:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-72">
        <h1 className="text-3xl font-bold mb-4">Create Image</h1>
        <form className="w-64">
          <div className="mb-4">
            <label htmlFor="title" className="text-sm text-gray-400">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter title"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="prompt" className="text-sm text-gray-400">
              Prompt:
            </label>
            <input
              type="text"
              id="prompt"
              value={prompt}
              onChange={handlePromptChange}
              placeholder="Enter prompt"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <button
            type="button"
            onClick={handleGenerateClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Generate
          </button>
        </form>
        <div className="mt-4">
          {loading && <div className="loading">Loading...</div>}
          {!loading && output && (
            <div className="result-image flex flex-col items-center">
              <img
                src={output}
                alt="art"
                className="mt-4"
                width={400}
                height={300}
              />
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Upload
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateImagePage;
