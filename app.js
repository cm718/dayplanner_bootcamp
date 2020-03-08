$("document").ready(() => {
  const day = [
    { events: "" },
    { events: "" },
    { events: "" },
    { events: "" },
    { events: "" },
    { events: "" },
    { events: "" },
    { events: "" },
    { events: "" },
    { events: "" },
    { events: "" },
    { events: "" }
  ];


  const render = () => {
      let html
    for(let i = 7; i < 19; i++){
        html = `
            <div class='hour' id='${i-7}'>
                <h2 class='mb-3' style='display:inline-block;'>${ i < 13 ? i : i - 12 }</h2>
                <p>${day[i].events}</p>
            </div>
            <hr/>
        `
        $('.dayContainer').append(html)
    }
  }

  $('.dayContainer').on('click', (e)=>{
      e.preventDefault()
      let id = e.target.id
      
      let eventDesc = prompt("Please enter events for today")
      day[id].events = eventDesc
      localStorage.setItem('day', JSON.stringify(day))
  })

  render()

  const crud = () => {}
});
