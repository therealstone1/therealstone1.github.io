function setup() {
//setup canvas
  cnv = createCanvas(400, 400);
  newCanvasX = (windowWidth- 400)/2;
  newCanvasY = (windowHeight- 400)/2;
  cnv.position(newCanvasX,newCanvasY)
//button, text, and functions
  eString = createInput()
  eString.size(200,16)
  eString.position(newCanvasX + 50, newCanvasY + 100)
  scrambler = createButton("scramble")
  scrambler.position(newCanvasX + 300, newCanvasY + 100)
  scrambler.mousePressed(repaint)
  fString = createInput()
  fString.size(200,16)
  fString.position (newCanvasX + 50, newCanvasY + 200)
  unscramble = createButton("unscramble")
  unscramble.position(newCanvasX + 300,newCanvasY + 200)
  unscramble.mousePressed(unpaint)
}
output = "" 
character = ["a","b","c","d","e",
             "f","g","h","i","j","k","l","m",
             "n","o","p","q","r","s","t","u",
             "v","w","x","y","z"," ",".",","]
numb = [26,25,19,22,15,
        38,14,28,33,11,
        23,27,21,10,17,
        37,31,32,29,24,
        36,18,16,30,20,
        12,13,35,34]
function repaint(){
  initArray = []
  scrambleArray = []
  for (let i in eString.value()){
    initArray.push(eString.value().toLowerCase()[i])
    scrambleArray.push(i)
  }
  scrambleArray.reverse()
  for (var i in initArray, scrambleArray){
    for (var j in character, numb){
      if (initArray[i]===character[j]){
        initArray[i] = int(numb[j]) + int(scrambleArray[i])
      }
    }
  }
  eString.value("")
  output = join(initArray,"")
}
function unpaint(){
  initArray = []
  scrambleArray = []
  for (let i = 0; i < fString.value().length; i += 2) {
    initArray.push(str(fString.value()[i]) + str(fString.value()[i + 1]));
    scrambleArray.push(i/2)
  }
  scrambleArray.reverse()
  for (var i in initArray,scrambleArray){
    for (var j in character, numb){
      if (int(initArray[i])-int(scrambleArray[i]) === numb[j]){
        initArray[i] = character[j]
      }
    }
  }
  fString.value("")
  output = join(initArray,"")
}
function draw() {
  background("grey");
  textSize(16)
  textWrap(CHAR)
  text(output, 50, 300, 300)
}