import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";
import { useImmer } from "use-immer";

export default function Form() {
  /*********************************
   ******* METHOD I | Native *******
   *********************************/

  // const [mountain, setMountain] = useState({
  //   name: "Mount Everest",
  //   values: {
  //     altitude: 8848,
  //     mountainRange: "Himalayas",
  //   },
  // });

  // function handleNameChange(event) {
  //   setMountain({
  //     ...mountain,
  //     name: event.target.value,
  //   });
  // }

  // function handleAltitudeChange(event) {
  //   setMountain({
  //     ...mountain,
  //     values: {
  //       ...mountain.values,
  //       altitude: event.target.value,
  //     },
  //   });
  // }

  // function handleMountainRangeChange(event) {
  //   setMountain({
  //     ...mountain,
  //     values: {
  //       ...mountain.values,
  //       mountainRange: event.target.value,
  //     },
  //   });
  // }

  /**********************************
   ****** METHOD II | useImmer ******
   **********************************/

  const [mountain, updateMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    let nameMountain = event.target.value;
    updateMountain((draft) => {
      draft.name = nameMountain;
    });
  }

  function handleAltitudeChange(event) {
    let altitudeMountain = event.target.value;
    updateMountain((draft) => {
      draft.values.altitude = altitudeMountain;
    });
  }

  function handleMountainRangeChange(event) {
    let mountainRanges = event.target.value;
    updateMountain((draft) => {
      draft.values.mountainRange = mountainRanges;
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
