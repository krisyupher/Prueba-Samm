import React from "react";

const Familias = () => {
  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%"
  };
  return (
    <React.Fragment>
      <select name="Familias" style={groupStyles}>
        <option value="1">Familias</option>
        <option value="2">Windows 7</option>
        <option value="3">Windows XP</option>
        <option value="10">Fedora</option>
        <option value="11">Debian</option>
        <option value="12">Suse</option>
      </select>
    </React.Fragment>
  );
};

export default Familias;
