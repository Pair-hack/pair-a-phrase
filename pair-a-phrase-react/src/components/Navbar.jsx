import SimpleSelect from "./SimpleSelect";
import LogoutButton from "./LogOutButton";

function Navbar() {
  // could include image check here
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
              marginBottom: "-8px",
            }}
          >
            Pair-a-Phrase
          </h1>
          <p style={{ marginLeft: "8px" }}>en > paraphrase</p>
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
