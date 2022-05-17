function fetchdata(){
    let url="http://localhost:1337";
    fetch(url+"/api/demos/1")
    .then(response=>{
        if(response.ok){
            return response.json();
        }
    }).then(data=>{
        document.getElementById("demo").innerHTML=data.data.attributes.dem;
    })
    fetch(url+"/api/images?populate=xyz")
    .then(response=>{
        if(response.ok){
            return response.json();
        }
    }).then(data=>{
        document.getElementById("demoimg").src=url+data.data[0].attributes.xyz.data[0].attributes.formats.large.url;
        document.getElementById("demoimg").alt=data.data[1].attributes.alt_text;
    })
}

fetchdata();
