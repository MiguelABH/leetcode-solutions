/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {

  let currentDestination = paths[0][1];
  
  while (true) {
    const newDestination = returnNewDestination(paths, currentDestination);
    if (!newDestination) break;
    currentDestination = newDestination;
  }
  
  return currentDestination;
  
};

var returnNewDestination = function(paths, destination) {
  for (let i = 0; i < paths.length; i++) {
    if (paths[i][0] === destination) {
      return paths[i][1];
    }
  }
  return '';
}