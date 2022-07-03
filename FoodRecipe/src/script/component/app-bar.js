class AppBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }
        :host {
            width: 100%;
            margin:auto;
            display: flex;
            justify-content: center;
            background-color: #d46007;
        }
        
        h1{
            color:white;
            height:100px;
            font-size:70px;
        }
        
        </style>
        <h1>FOODPedia</h1>`;
    }
 }
  
 customElements.define("app-bar", AppBar);

