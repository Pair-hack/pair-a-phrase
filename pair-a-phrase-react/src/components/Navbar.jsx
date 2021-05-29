import SimpleSelect from "./SimpleSelect";
import LogoutButton from "./LogOutButton";
import randomLang from "../helperfunctions/randomLang";
import stringTranslator from "../helperfunctions/stringTranslator";
import { useState } from "react";

function Navbar() {
  // could include image check here
  const [translation, setTranslation] = useState("paraphrase");

  const RL = randomLang();
  stringTranslator("paraphrase", 'en', RL )
  .then((response)=>{
    console.log("that little bit of text?", response.data[0].translations[1].text);
    setTranslation(response.data[0].translations[1].text);
  });

  return (
    <div
      style={{
        position: "fixed",
        zIndex: "1",
        background: "#f9c94c",
        Height: "50px",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f9c94c",
        textAlign: "space",
        marginTop: "0px",
        width: "100%",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          style={{
            width: "40px",
            height: "40px",
            marginLeft: "10px",
            marginRight: "5px",
            marginTop: "0.8%",
          }}
          alt="pear logo"
          src="pear.png"
        />

        <div>
          <h1
            style={{
              whiteSpace: "nowrap",
              color: "white",
              marginLeft: "5px",
              marginBottom: "-6px",
            }}
          >
            Pair-a-Phrase
          </h1>
          <p style={{ marginLeft: "8px" }}>{RL} > {translation}</p>
          </div>
      </div>
      <div style={{
            display: "flex",
            justifyContent: "row"
          }}>
        <SimpleSelect />
        <LogoutButton />
      </div>
    </div>
  );
}
export default Navbar;
