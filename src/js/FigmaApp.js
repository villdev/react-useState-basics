import React, { useState } from "react";

export default function FigmaApp() {
  const [fontPairs, setFontPair] = useState([
    {
      id: 1,
      Heading: "Montserrat",
      Paragraph: "Fira Sans",
    },
    {
      id: 2,
      Heading: "Raleway",
      Paragraph: "Roboto",
    },
    {
      id: 3,
      Heading: "Playfair Display",
      Paragraph: "Open Sans",
    },
  ]);
  const [currentFontPair, setCurrentFontPair] = useState({
    Heading: "Montserrat",
    Paragraph: "Fira Sans",
  });
  const [fontSizePair, setFontSizePair] = useState({
    Heading: 30,
    Paragraph: 16,
  });
  const [selectedText, setSelectedText] = useState("Paragraph");

  const setHeaderAsSelected = () => {
    setSelectedText("Heading");
  };
  const setParaAsSelected = () => {
    setSelectedText("Paragraph");
  };

  const decreaseFontSize = () => {
    if (fontSizePair[selectedText] >= 24) {
      setFontSizePair((prevFontSizePair) => ({
        ...prevFontSizePair,
        [selectedText]: prevFontSizePair[selectedText] - 8,
      }));
    }
  };
  const increaseFontSize = () => {
    if (fontSizePair[selectedText] <= 56) {
      setFontSizePair((prevFontSizePair) => ({
        ...prevFontSizePair,
        [selectedText]: prevFontSizePair[selectedText] + 8,
      }));
    }
  };

  const changeCurrentFontPair = (id) => {
    const selectedFp = fontPairs.filter((fp) => fp.id === id);
    setCurrentFontPair({
      Heading: selectedFp[0].Heading,
      Paragraph: selectedFp[0].Paragraph,
    });
  };

  return (
    <div className="exercise">
      <div className="figma-app">
        <div className="figma-app-controls">
          <div className="selected-text">{selectedText}</div>
          <div className="figma-size-control">
            <button onClick={decreaseFontSize}>-</button>
            <span className="font-size">{fontSizePair[selectedText]}px</span>
            <button onClick={increaseFontSize}>+</button>
          </div>
          <div className="figma-font-pairs pointing-cursor">
            {fontPairs.map(({ Heading, Paragraph, id }) => (
              <div
                onClick={() => changeCurrentFontPair(id)}
                key={id}
                className={
                  currentFontPair.Heading === Heading
                    ? "font-pair active-font-pair"
                    : "font-pair"
                }
              >
                {Heading} - {Paragraph}
              </div>
            ))}
          </div>
        </div>
        <div className="figma-sample">
          <div
            onClick={setHeaderAsSelected}
            className="sample-title pointing-cursor"
            style={{
              fontFamily: `${currentFontPair.Heading}`,
              fontSize: `${fontSizePair.Heading}px`,
            }}
          >
            HEADING
          </div>

          <p
            onClick={setParaAsSelected}
            className="sample-para pointing-cursor"
            style={{
              fontFamily: `${currentFontPair.Paragraph}`,
              fontSize: `${fontSizePair.Paragraph}px`,
            }}
          >
            Click and select either para or the heading to change the font size.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ab
            voluptates tenetur quia eaque impedit neque optio libero
            exercitationem cupiditate, voluptatibus commodi quasi dolor enim.
          </p>
        </div>
      </div>
    </div>
  );
}
