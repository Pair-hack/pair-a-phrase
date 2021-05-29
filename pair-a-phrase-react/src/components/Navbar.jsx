import SimpleSelect from "./SimpleSelect";
import pearImage from "./pear.png"

function Navbar() {
  // could include image check here
  return (
    <div
      style={{
        background: "#f9c94c",
        height: "70px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f9c94c",
        textAlign: "space",
        marginTop: "0px",
        width: "100%",
      }}
    >
      <h1 style={{
        color: "white",
        marginLeft: "3%",
        paddingTop: "13px"
      }}>Pair-A-Phrase</h1>
      <img style={{
        width: "40px",
        height: "40px",
        marginRight: "68%",
        marginTop: "0.8%"
  
   
      }} src={pearImage}/>
      <SimpleSelect/>
    </div>
  );
}
export default Navbar;
