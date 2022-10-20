function elementScript(data) {
    `
    <div id="HStack">
        <img src="`+ data.image`" alt="Test"/>
        <div>
            <p class="p-heading-sans-thin" id="padding-5px"><b>` + data.name + `<b></p>
            <p class="p-heading-sans-thin" id="padding-5px">` + data.description + `</p>
        </div>
        <div>
            <a href="` + data.download + `" id="padding-5px"><i class="fa fa-download"></i></a>
        </div>
    </div>
    `
}
const apps = JSON.parse(require('appsData.json'));
var container = document.getElementById('')
for (app in apps) {
    console.log(app);
    container.innerHTML += elementScript(app)
}
