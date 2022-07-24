//This is the class that will manage all your APIs
class APIManager {
  constructor(route) {
    this.route = route;
    this.data = {};
  }
  AjaxRequestMethod = (callBackFunction) => {
    $.ajax({
      dataType: "json",
      url: this.route,
      success: (result) => {
        callBackFunction(result);
      },
    });
  };

  getInformationAboutFirstUserAndFrinds = (result) => {
    let firstElement = result.results[0];
    this.data.firstName = firstElement.name.first;
    this.data.lastName = firstElement.name.last;
    this.data.city = firstElement.location.city;
    this.data.picture = firstElement.picture.medium;
    this.data.state = firstElement.location.state;

    let usersArray = [];
    for (const user of result.results) {
      usersArray.push({
        firstName: user.name.first,
        lastName: user.name.last,
      });
    }
    usersArray.splice(0, 1);
    let friends = usersArray;
    this.data.friends = friends;
  };

  getQuote = (result) => {
    this.data.quote = result.quote;
  };

  getPokiInformation = (result) => {
    this.data.pokiName = result.name;
    this.data.sprites = result.sprites.front_default;
  };

  getText = (data) => {
    this.data.text = data[0];
  };
}
