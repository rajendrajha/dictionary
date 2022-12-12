function run(){
    let input= document.getElementById('dict_input');
    let output= document.getElementById('output')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '71ed1df2dbmsh4582fe8b7b08bf0p1e1e2ajsne1b178b88477',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+input.value+'', options)
        .then(response => response.json())
        .then(response => {output.innerHTML= '<b>Definition: '+response.definition+'</b>';})
        .catch(err => console.error(err));
}