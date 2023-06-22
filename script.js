// Your code here.
html {
  box-sizing: border-box;
  background: url('https://source.unsplash.com/NFs6dRTBgaM/2000x2000') fixed;
  background-size: cover;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 0;
}

.items {
  height: 800px;
  padding: 100px;
  width: 100%;
  border: 1px solid white;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;
  position: relative;
  background: rgba(255,255,255,0.1);
  font-size: 0;
  perspective: 500px;
}

.items.active {
  background: rgba(255,255,255,0.3);
  cursor: grabbing;
  cursor: -webkit-grabbing;
  transform: scale(1);
}

.item {
  width: 200px;
  height: calc(100% - 40px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 100;
  color: rgba(0,0,0,0.15);
  box-shadow: inset 0 0 0 10px rgba(0,0,0,0.15);
}

.item:nth-child(9n+1) { background: dodgerblue;}
.item:nth-child(9n+2) { background: goldenrod;}
.item:nth-child(9n+3) { background: paleturquoise;}
.item:nth-child(9n+4) { background: gold;}
.item:nth-child(9n+5) { background: cadetblue;}
.item:nth-child(9n+6) { background: tomato;}
.item:nth-child(9n+7) { background: lightcoral;}
.item:nth-child(9n+8) { background: darkslateblue;}
.item:nth-child(9n+9) { background: rebeccapurple;}

.item:nth-child(even) { transform: scaleX(1.31) rotateY(40deg); }
.item:nth-child(odd) { transform: scaleX(1.31) rotateY(-40deg); }
