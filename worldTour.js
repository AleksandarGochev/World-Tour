function worldTour(string){
    let destinations = string.shift();
  
    
    while(string[0] != 'Travel'){
        let line = string.shift().split(':');
        
        

        if(line[0] === 'Add Stop'){

            if(Number(line[1]) >= 0 && Number(line[1]) < destinations.length){
                let left = destinations.substring(0, Number(line[1]));
                let right = destinations.substring(Number(line[1]));
                destinations = left + line[2] + right;
                console.log(destinations)

            }else{
                console.log(destinations)
            }



        }else if(line[0] === 'Remove Stop'){
            if(Number(line[1]) >= 0 && Number(line[1]) < destinations.length && Number(line[2]) >= 0 && Number(line[2]) < destinations.length){
              let rigth =  destinations.substring(Number(line[2]) + 1, destinations.length);
              let left = destinations.substring(0, Number(line[1]));
              destinations = left + rigth;
              console.log(destinations)
             
            }else{
            console.log(destinations)
            }


        }else if(line[0] === 'Switch'){
            let pattern = new RegExp(line[1], 'g')
            let string2 = line[2];
            destinations = destinations.replace(pattern, string2);
            console.log(destinations)
           
        }



    }
    
    console.log(`Ready for world tour! Planned stops: ${destinations}`)

}
worldTour(['Hawai::Cyprys-Greece:Hawai',
    'Add Stop:7:Rome',
    'Remove Stop:11:40',
    'Switch:Hawai:Bulgaria',
    'Travel'
])