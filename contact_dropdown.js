// Sample location dataset mapping Regions -> Provinces -> Cities
const locationData = {
    "NCR": {
        hasProvince: false,
        cities: ["Caloocan", "Las Piñas", "Makati", "Malabon", "Mandaluyong", "Manila", "Marikina", "Muntinlupa", "Navotas", "Parañaque", "Pasay", "Pasig", "Pateros", "Quezon City", "San Juan", "Taguig", "Valenzuela"]
    },
    "Region4A": {
        hasProvince: true,
        provinces: {
            "Batangas": ["Agoncillo", "Alitagtag", "Balayan", "Balete", "Batangas City", "Bauan", "Calaca", "Calatagan", "Cuenca", "Ibaan", "Laurel", "Lemery", "Lian", "Lipa", "Lobo", "Mabini", "Malvar", "Mataasnakahoy", "Nagsubu", "Padre Garcia", "Rosario", "San Jose", "San Juan", "San Luis", "San Nicolas", "San Pascual", "Santa Teresita", "Santo Tomas", "Taal", "Talisay", "Tanauan", "Tingloy", "Tuy"],
            "Cavite": ["Alfonso", "Amadeo", "Bacoor", "Carmona", "Cavite City", "Dasmariñas", "General Emilio Aguinaldo", "General Mariano Alvarez", "General Trias", "Imus", "Indang", "Kawit", "Magallanes", "Maragondon", "Mendez", "Naic", "Noveleta", "Rosario", "Silang", "Tagaytay", "Tanza", "Ternate", "Trece Martires"],
            "Laguna": ["Alaminos", "Bay", "Biñan", "Cabuyao", "Calamba", "Calauan", "Cavinti", "Famy", "Kalayaan", "Liliw", "Los Baños", "Luisiana", "Lumban", "Mabitac", "Magdalena", "Majayjay", "Nagcarlan", "Paete", "Pagsanjan", "Pakil", "Pila", "Rizal", "San Pablo", "San Pedro", "Santa Cruz", "Santa Maria", "Santa Rosa", "Siniloan", "Victoria"],
            "Quezon Province": ["Agdangan", "Alabat", "Atimonan", "Buenavista", "Burdeos", "Calauag", "Candelaria", "Catanauan", "Dolores", "General Luna", "General Nakar", "Guinayangan", "Gumaca", "Infanta", "Jomalig", "Lopez", "Lucban", "Lucena", "Macalelon", "Mauban", "Mulanay", "Padre Burgos", "Pagbilao", "Panukulan", "Patnanungan", "Perez", "Pitogo", "Plaridel", "Polillo", "Quezon", "Real", "Sampaloc", "San Andres", "San Antonio", "San Francisco", "San Narciso", "Sariaya", "Tagkawayan", "Tayabas", "Tiaong", "Unisan"],
            "Rizal": ["Angono", "Antipolo", "Baras", "Binangonan", "Cainta", "Cardona", "Jalajala", "Montalban (Formerly Rodriguez)", "Morong", "Pililla", "San Mateo", "Tanay", "Taytay", "Teresa"],
            
            
            
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const regionSelect = document.getElementById("regionSelect");
    const provinceSelect = document.getElementById("provinceSelect");
    const citySelect = document.getElementById("citySelect");
    
    const provinceWrapper = document.getElementById("provinceWrapper");
    const cityWrapper = document.getElementById("cityWrapper");

    // 1. Handle Region Dropdown Adjustments
    regionSelect.addEventListener("change", function() {
        const selectedRegion = this.value;
        
        // Wipe and reset downstream fields
        resetSelect(provinceSelect, "-- Choose Province --");
        resetSelect(citySelect, "-- Choose City/Municipality --");
        
        provinceWrapper.style.display = "none";
        provinceSelect.required = false;
        cityWrapper.style.display = "none";
        citySelect.required = false;

        if (selectedRegion && locationData[selectedRegion]) {
            const data = locationData[selectedRegion];
            
            if (data.hasProvince) {
                // If the region requires a province tier, unhide it
                provinceWrapper.style.display = "block";
                provinceSelect.required = true;
                
                Object.keys(data.provinces).forEach(province => {
                    const opt = document.createElement("option");
                    opt.value = province;
                    opt.textContent = province;
                    provinceSelect.appendChild(opt);
                });
            } else {
                // No Province needed (e.g., NCR) -> Jump straight to Cities list
                cityWrapper.style.display = "block";
                citySelect.required = true;
                
                data.cities.forEach(city => {
                    const opt = document.createElement("option");
                    opt.value = city;
                    opt.textContent = city;
                    citySelect.appendChild(opt);
                });
            }
        }
    });

    // 2. Handle Province Dropdown Adjustments
    provinceSelect.addEventListener("change", function() {
        const selectedRegion = regionSelect.value;
        const selectedProvince = this.value;
        
        resetSelect(citySelect, "-- Choose City/Municipality --");
        cityWrapper.style.display = "none";
        citySelect.required = false;

        if (selectedRegion && selectedProvince && locationData[selectedRegion]?.provinces?.[selectedProvince]) {
            cityWrapper.style.display = "block";
            citySelect.required = true;
            
            const cities = locationData[selectedRegion].provinces[selectedProvince];
            cities.forEach(city => {
                const opt = document.createElement("option");
                opt.value = city;
                opt.textContent = city;
                citySelect.appendChild(opt);
            });
        }
    });

    // Clean out choices helper function
    function resetSelect(selectElement, defaultText) {
        selectElement.innerHTML = `<option value="" disabled selected>${defaultText}</option>`;
    }

    // --- Keep your existing code (like the 'Other Services' checkbox toggler) here ---
    const otherServices = document.getElementById("otherServices");
    const otherText = document.getElementById("otherText");
    if (otherServices && otherText) {
        otherServices.addEventListener("change", function() {
            otherText.style.display = this.checked ? "block" : "none";
        });
    }
});