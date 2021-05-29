import SimpleSelect from "./SimpleSelect";
import LogoutButton from "./LogOutButton";
import randomLang from "../helperfunctions/randomLang";
import stringTranslator from "../helperfunctions/stringTranslator";
import { useEffect, useState } from "react";

function Navbar() {
  // could include image check here
  const [translation, setTranslation] = useState("");
  const [RL, setRL] = useState("");

  useEffect(()=>{
    setRL(randomLang());
    console.log(RL);
    stringTranslator("paraphrase", 'en', RL )
    .then((response)=>{
      setTranslation(response.data[0].translations[1].text);
      console.log(response.data[0].translations[1].text);
    });
  }, []);

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
          <p style={{ marginLeft: "8px" }}>{RL} {'>'} {translation}</p>
          </div>
      </div>
      <div style={{ display: "flex", justifyContent: "row" }}>
        <SimpleSelect />
        <LogoutButton />
      </div>
    </div>
  );
}
export default Navbar;
