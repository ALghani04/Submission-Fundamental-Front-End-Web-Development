class ClubItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

   set club(club) {
       this._club = club;
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
    :host{
        margin-bottom: 18px;
        box-shadow: 0px 0px 5px #000000;
        border-radius: 10px;
        overflow: hidden;
        padding: 10px;
        margin: 20px;
        height: 400px;
        width: 100%;
        max-width: 400px;
        transition: all 500ms ease-out;
    }

    :host(club-item:hover){
        box-shadow: 0px 0px 25px #FFD365;
        height: 650px;
        max-width: 510px;
    }
    
    .fan-art-club {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: center;
    }
    
    .club-info {
        padding: 24px;
    }
    
    .club-info > h2 {
        font-weight: bolder;
    }
    
    .club-info > p {
        margin-top: 55px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
    }
    </style>
           <img class="fan-art-club" src="${this._club.strMealThumb}" alt="Fan Art">
           <div class="club-info">
               <center><h2>${this._club.strMeal}</h2></center>
               <p>${this._club.strInstructions}</p>
           </div>`;
   }
}
 
customElements.define("club-item", ClubItem);