const NUMBER_USERS = 7;

const POKEMON_ID = Math.floor(Math.random() * 100);

let firstApi = `https://randomuser.me/api/?results=${NUMBER_USERS}`;

let seconedApi = `https://api.kanye.rest/`;

let thirdApi = `https://pokeapi.co/api/v2/pokemon/${POKEMON_ID}`;

let fourthApi = `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`;

let request1 = new APIManager(firstApi);
let request2 = new APIManager(seconedApi);
let request3 = new APIManager(thirdApi);
let request4 = new APIManager(fourthApi);

let renderer1 = new Renderer(1, "user-container", request1);
let renderer5 = new Renderer(5, "friends-container", request1);
let renderer2 = new Renderer(2, "quote-container", request2);
let renderer3 = new Renderer(3, "pokemon-container", request3);
let renderer4 = new Renderer(4, "meat-container", request4);
let renderer6 = new Renderer(6, "pokemon-text", request3);

$("#save").on("click", function () {
  request1.AjaxRequestMethod(request1.getInformationAboutFirstUserAndFrinds);
  request2.AjaxRequestMethod(request2.getQuote);
  request3.AjaxRequestMethod(request3.getPokiInformation);
  request4.AjaxRequestMethod(request4.getText);
});
$("#display").on("click", function () {
  clearTheContent();
  renderer1.render();
  renderer2.render();
  renderer3.render();
  renderer4.render();
  renderer5.render();
  renderer6.renderPokiName();
});
$("#saveInLocalStorage").on("click", function () {
  let renderers = {
    renderers: [
      renderer1,
      renderer2,
      renderer3,
      renderer4,
      renderer5,
      renderer6,
    ],
  };
  localStorage.setItem("renderers", JSON.stringify(renderers));
});
$("#displayfromLocalStorage").on("click", function () {
  clearTheContent();
  let renderersArray =
    JSON.parse(localStorage.getItem("renderers")).renderers || [];

  for (let index = 0; index < renderersArray.length; index++) {
    const element = renderersArray[index];
    let renderer = new Renderer(
      element.scriptCountID,
      element.containerID,
      element.apiManager
    );
    if (index == renderersArray.length - 1) renderer.renderPokiName();
    else renderer.render();
  }
});

function clearTheContent() {
  $(".user-container").empty();
  $(".quote-container").empty();
  $(".pokemon-container").empty();
  $(".meat-container").empty();
  $(".friends-container").empty();
}
