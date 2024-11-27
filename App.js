// const heading=  React.createElement("h1",{id:"heading"},"React frm js");
/**
 * <div id='parent>
 * <div id="child">
 * <h1>I'< h1 tag </h1>
 *  * <h2>I'm h2 tag< h1 tag </h2>
 * </div>
 * 
 */

const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"i'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")
])])










     
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)