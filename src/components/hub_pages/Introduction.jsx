import React from "react";

const Introduction = () => {
  return (
    <div className="bg-white border rounded-lg px-8 py-2 mx-auto my-2 max-w-2xl">
      <h2 className="text-2xl font-medium mb-4">Introduction</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="multi-spectral"
            className="block text-gray-700 font-medium mb-2"
          >
            Name some characteristics of a multi-spectral image
          </label>
          <textarea
            id="multi-spectral"
            name="message"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            rows="5"
          ></textarea>
        </div>
        <label className="block text-gray-700 font-medium mb-2">
          Is urbanization a global goal?
        </label>
        <div className="px-2 w-1/3">
          <label
            htmlFor="choice-yes"
            className="block text-gray-700 font-medium mb-2"
          >
            <input
              type="radio"
              id="choice-yes"
              name="yes-or-no"
              value="yes"
              className="mr-2"
            />
            Yes
          </label>
          <label
            htmlFor="choice-no"
            className="block text-gray-700 font-medium mb-2"
          >
            <input
              type="radio"
              id="choice-no"
              name="yes-or-no"
              value="no"
              className="mr-2"
            />
            No
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
            Use one word to describe urbanization
          </label>
          <input
            type="text"
            id="age"
            name="age"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="causes"
            className="block text-gray-700 font-medium mb-2"
          >
            Name some causes of urbanization
          </label>
          <textarea
            id="causes"
            name="message"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            rows="5"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="one-word"
            className="block text-gray-700 font-medium mb-2"
          >
            Use one word to describe a peri-urban area
          </label>
          <input
            type="text"
            id="one-word"
            name="one-word"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Which country or countries do you think are are faced with the
            peri-urban phenomena among Germany, South Africa and Kenya?
          </label>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/3">
              <label
                htmlFor="germany"
                className="block text-gray-700 font-medium mb-2"
              >
                <input
                  type="checkbox"
                  id="germany"
                  name="germany"
                  value="germany"
                  className="mr-2"
                />
                Germany
              </label>
            </div>
            <div className="px-2 w-1/3">
              <label
                htmlFor="south-africa"
                className="block text-gray-700 font-medium mb-2"
              >
                <input
                  type="checkbox"
                  id="south-africa"
                  name="south-africa"
                  value="south=africa"
                  className="mr-2"
                />
                South Africa
              </label>
            </div>
            <div className="px-2 w-1/3">
              <label
                htmlFor="kenya"
                className="block text-gray-700 font-medium mb-2"
              >
                <input
                  type="checkbox"
                  id="kenya"
                  name="kenya"
                  value="kenya"
                  className="mr-2"
                />
                Kenya
              </label>
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Introduction;
