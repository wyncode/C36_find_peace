import React, { useState } from "react";
import axios from "axios";
import Map from "./Map";

const INPUTS = [
  { value: "women", label: "Women" },
  { value: "shelter", label: "Shelter" },
  { value: "lgbtq", label: "LGBTQ" },
  { value: "youth", label: "Youth" }
];

const Chat = () => {
  const [outputs, setOutputs] = useState([]);

  const handleInputClick = input => {
    axios
      .get(`/organizations.json?description=${input.value}`)
      .then(({ data }) => {
        const newOutputs = data.map(org => ({
          name: `${org.name} - ${org.resource_description}`,
          address: org.address,
          someOtherDisplay: `${org.website}, ${org.regular_phone_number}`,
          ...org
        }));
        setOutputs(newOutputs);
      });
  };

  const handleLocationClick = ({ longitude, latitude }) => {
    Turbolinks.visit(`/yogamap?lng=${longitude}&lat=${latitude}`);
  };

  return (
    <div className="chat-box" style={{ padding: 20 }}>
      <div className="messages" style={{ display: "grid" }}>
        {outputs.map(output => {
          if (output.hasMap) return <Map output={output} />;
          return (
            <div
              className="output"
              style={{
                border: "1px solid lightblue",
                borderRadius: 3
              }}
            >
              <p>Name: {output.name}</p>
              <a onClick={() => handleLocationClick(output)}>
                Address: {output.address}
              </a>
              <p>Info: {output.someOtherDisplay}</p>
            </div>
          );
        })}
      </div>
      <div
        className="inputs"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        {INPUTS.map(input => (
          <div className="input">
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
