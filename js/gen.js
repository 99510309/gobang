var role = require("./role.js");

var gen = function(board) {
  var points = [];
  for(var i=0;i<board.length;i++) {
    for(var j=0;j<board[i].length;j++) {
      if(board[i][j] == role.empty && hasNeighbor(board, [i, j])) {
        points.push([i, j]);
      }
    }
  }
  return points;
}

//简单的规则，如果周围有邻居就作为可选的位子
var hasNeighbor = function(board, point) {
  var len = board.length;
  for(var i=point[0]-2;i<=point[0]+2;i++) {
    if(i<0||i>=len) continue;
    for(var j=point[1]-2;j<=point[1]+2;j++) {
      if(j<0||j>=len) continue;
      if(i==point[0] && j==point[1]) continue;
      if(board[i][j] != role.empty) return true;
    }
  }
  return false;
}

module.exports = gen;