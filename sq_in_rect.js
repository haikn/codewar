function sqInRect(lng, wdth) {
  if (lng === wdth) return null;
  result = [];
  return sqInRectCal(lng, wdth);
  
}

function sqInRectCal(lng, wdth) {
  var _min = Math.min(lng,wdth);
  var _abs = Math.abs(lng-wdth);
  if(_min >= 1) {
    result.push(_min);
    sqInRectCal(_min,_abs);
  } 
  return result;
}
