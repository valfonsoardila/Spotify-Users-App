import React from "react";
import Emoji from "react-emoji";

const InputSelect = ({ prefix }) => {
  const style = {
    width: "30%",
    height: "40px",
    padding: "0 10px",
    margin: "10px 0",
    marginRight: "10px",
    borderRadius: "5px",
    border: "0.5px solid #333",
    fontSize: "16px",
    color: "var(--textPrimary)",
    background: "transparent",
  };

  return (
    <select style={style}>
      <option
        value="0"
        style={{
          color: "var(--textPrimary)",
          background: "var(--blurMain)",
        }}
      >
        Country
      </option>
      {prefix.map((item, index) => {
        const flagEmoji = Emoji.emojify(item.flag);

        return (
          <option
            key={index}
            value={item.prefix}
            style={{
              color: "var(--textPrimary)",
              background: "var(--blurMain)",
              opacity: "0.8",
            }}
          >
            <span>{flagEmoji}</span>({item.prefix})
          </option>
        );
      })}
    </select>
  );
};

export default InputSelect;
