class Renderer {
  constructor(scriptCountID, containerID, apiManager) {
    this.scriptCountID = scriptCountID;
    this.containerID = containerID;
    this.apiManager = apiManager;
  }
  render = () => {
    let source = $(`#handlebars-demo${this.scriptCountID}`).html();
    let templateScript = Handlebars.compile(source);
    var html = templateScript(this.apiManager.data);
    $(`.${this.containerID}`).append(html);
  };

  renderPokiName = () => {
    let source = $(`#handlebars-demo${this.scriptCountID}`).html();
    let templateScript = Handlebars.compile(source);
    let oldPokiName = this.apiManager.data.pokiName;
    let newPokiName = oldPokiName[0].toUpperCase() + oldPokiName.substring(1);
    var html = templateScript({
      pokiName: newPokiName,
    });
    $(`.${this.containerID}`).append(html);
  };
}
