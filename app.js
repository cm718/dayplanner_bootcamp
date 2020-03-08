$("document").ready((event) => {
  const day = [
    { events: "Wake up" },
    { events: "Go to work" },
    { events: "Code" },
    { events: "Meeting with the boss" },
    { events: "Eat some lunch" },
    { events: "Walk the dog" },
    { events: "Take a nap" },
    { events: "Eat a snack" },
    { events: "Drive home" },
    { events: "Cook dinner" },
    { events: "Put the kids to bed" },
    { events: "Code some more" }
  ];

  const render = () => {
    let htmlBlock

    for(let i = 0; i < 12; i++){
        htmlBlock = `
            <div class='hour py-1' id='${i}' style='display:flex; justify-content: space-between; align-items:center;'>
                <h3 style='display:inline-block;'>${ i < 7 ? i+6 : i }</h3>
                <h5 style="margin: 0px">${ day[i].events }</h5>
                <button id='${i}'>Edit</button>
            </div>
            <hr/>
        `
        $('.dayContainer').append(htmlBlock)
    }
  }

  $('body').on('click', event =>{
    if(event.target.tagName == 'BUTTON'){
        let id = event.target.id
        let eventDesc = prompt("Please enter events for this hour")
        day[id].events = eventDesc
        $(`#${id} h5`).text(eventDesc)
    } else {
        return
    }
})
  

  render()

})

