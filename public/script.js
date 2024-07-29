






//final work properly
document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

   

    try {
        const response = await fetch(`https://traveltiming.onrender.com/search?from=${from}&to=${to}`);
        const results = await response.json();

        localStorage.setItem('searchResults', JSON.stringify(results));
        window.location.href = 'results.html';

       
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
});

window.onload = function() {
    if (window.location.pathname === '/results.html') {
        const results = JSON.parse(localStorage.getItem('searchResults'));
        const resultsContainer = document.getElementById('results');

        if (results && results.length > 0) {
            results.forEach(bus => {
                const busCard = document.createElement('div');
                busCard.className = 'bus-card';
                busCard.innerHTML = `
                    
                    
                    <h2>From: ${bus.from} - To: ${bus.to}</h2>
                    <p>Departure Time: ${bus.departureTime}</p>
                    <p>Arrival Time: ${bus.arrivalTime}</p>
                    <p>Price: $${bus.price}</p>
                `;
                resultsContainer.appendChild(busCard);
            });
        } else {
            resultsContainer.innerHTML = '<p>No buses found for the selected route.</p>';
        }
    }
}





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
    document.body.style.overflow = 'hidden';
    // toggleButton.innerHTML='<span class="bx bx-menu-alt-left" ></span>';
}
function closeSidebar(){
    sidebar.style.width='0';
    document.body.style.overflow = 'auto';
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







