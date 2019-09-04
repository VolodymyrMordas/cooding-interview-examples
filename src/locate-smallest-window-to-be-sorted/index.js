module.exports = getSmallestWindowToBeSorted = data => {
  let max = data[0];
  let min = data[data.length - 1];
  
  let lIdx = 0;
  let rIdx = data.length - 1;
  
  for (let i = 1; i < data.length; i++) {
    max = Math.max(max, data[i]);
    if(data[i] < max) {
      rIdx = i;
    }
    
    min = Math.min(min, data[data.length - 1 - i]);
    if(data[data.length - 1 - i] > min){
      lIdx = data.length - 1 - i;
    }
  }
  
  return [lIdx, rIdx];
};
