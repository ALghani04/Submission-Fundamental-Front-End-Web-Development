class SearchBar extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            max-width: 800px;
            border: solid #d46007;
            border-radius: 20px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
            
        }
        
        .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            font-weight:lighter;
            border-radius: 20px;
            color: #d46007;
        }
        
        .search-container > input:focus {
            outline: 0;
            
        }
        
        
        .search-container >  input::placeholder {
            color: #d46007;
            font-weight: lighter;
            font-size: 15px;
            
        }
        
        .search-container > button {
            width: 30%;
            cursor: pointer;
            margin-left: auto;
            background-color: #d46007;
            color: rgb(255, 255, 255);
            border: none;
            font-weight: bolder;
            text-transform: uppercase;
            border-radius: 20px;
            font-size: 15px;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search food here" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;
  
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
  
customElements.define("search-bar", SearchBar);