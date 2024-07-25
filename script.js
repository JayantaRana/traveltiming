document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/buses')
        .then(response => response.json())
        .then(data => {
            const sourceSelect = document.getElementById('source');
            const destinationSelect = document.getElementById('destination');
            const uniqueSources = [...new Set(data.map(bus => bus.source))];
            const uniqueDestinations = [...new Set(data.map(bus => bus.destination))];

            uniqueSources.forEach(source => {
                const option = document.createElement('option');
                option.value = source;
                option.textContent = source;
                sourceSelect.appendChild(option);
            });

            uniqueDestinations.forEach(destination => {
                const option = document.createElement('option');
                option.value = destination;
                option.textContent = destination;
                destinationSelect.appendChild(option);
            });
        })
        .catch(err => console.error(err));
});












const sidebar=document.getElementById('sidebar');
const toggleButton=document.getElementById('toggle-button');

//sidebar function
toggleButton.addEventListener('click', ()=>{
    if(sidebar.style.width==='250px'){
       closeSidebar();

    }else{
        openSidebar();

    }
});

function openSidebar(){
    sidebar.style.width='250px';
    // toggleButton.innerHTML='<span class="bx bx-menu-alt-left" ></span>';
}
function closeSidebar(){
    sidebar.style.width='0';
    // toggleButton.innerHTML='<span class="bx bx-menu-alt-left" ></span>';
}
document.addEventListener('click',(event)=>{
    if(!sidebar.contains(event.target) && event.target !==toggleButton){
       closeSidebar();
    }
});



//exchang script
document.getElementById('exchangeButton').addEventListener('click', function() {
    const sourceInput = document.getElementById('from');
    const destinationInput = document.getElementById('to');
    const temp = sourceInput.value;
    sourceInput.value = destinationInput.value;
    destinationInput.value = temp;
});




