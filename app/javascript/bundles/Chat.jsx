import React, { useState } from "react";
import axios from "axios";
import Map from "./Map";

const INPUTS = [
  { value: "women", label: "Women" },
  { value: "shelter", label: "Shelter" },
  { value: "lgbtq", label: "LGBTQ" },
  { value: "youth", label: "youth" }
];

const Chat = () => {
  const [responses, setResponses] = useState([]);
  const [inputs, setInputs] = useState([]);

  const handleInputClick = input => {
    setInputs([...inputs, { content: input.label, created_at: Date.now() }]);
    axios
      .get(`/organizations.json?description=${input.value}`)
      .then(({ data }) => {
        setResponses([
          ...responses,
          ...data.map(org => ({
            content: `${org.name} - ${org.resource_description}`,
            someOtherDisplay: "foo",
            created_at: org.created_at
          }))
        ]);
      });
  };

  //create more sorting...//

  const messages = [...responses, ...inputs].sort((a, b) =>
    a.created_at > b.created_at ? 1 : -1
  );

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map(message => {
          if (message.hasMap) return <Map message={message} />;
          return (
            <div className="message" id={message.id}>
              <p>{message.content}</p>
            </div>
          );
        })}
      </div>
      <div className="inputs">
        {INPUTS.map(input => (
          <div
            style={{ display: "flex", flexDirection: "row" }}
            className="input"
          >
            <button onClick={() => handleInputClick(input)}>
              {input.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default () => <Chat />;
