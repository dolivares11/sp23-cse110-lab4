for(const property in statistics) {
    if(statistics[property] % 2 == 0 || property[0] == 'r') {
        console.log(statistics[property]);
      }
}