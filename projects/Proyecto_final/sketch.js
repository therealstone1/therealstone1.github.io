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
  dString = createInput()
  dString.size(200,16)
  dString.position(newCanvasX+50, newCanvasY+150)
  unscramble = createButton("unscramble")
  unscramble.position(newCanvasX + 300,newCanvasY + 200)
  unscramble.mousePressed(unpaint)
}
output = "" 
//supported characters and their translations
character = ["a","b","c","d","e",
             "f","g","h","i","j","k","l","m",
             "n","o","p","q","r","s","t","u",
             "v","w","x","y","z"," ",".",","]
numb = [226,425,619,322,515,
        338,314,328,433,711,
        223,227,421,610,317,
        137,431,132,629,324,
        136,418,616,330,720,
        212,413,135,434]
function repaint(){
  //setup all array stuff
  initArray = []
  scrambleArray = []
  //parses each character as a value in an array
  for (let i in eString.value()){
    initArray.push(eString.value().toLowerCase()[i])
    //added security
    scrambleArray.push(i)
  }
  //reverses array to add the biggest number to the first character and smallest to last
  scrambleArray.reverse()
  //the part that encrypts
  for (var i in initArray, scrambleArray){
    for (var j in character, numb){
      if (initArray[i]===character[j]){
        //checks if invalid or added value is greater than 99
        if (dString.value() === "" || dString.value() > 99){
          initArray[i] = int(numb[j]) + int(scrambleArray[i])
        }
        //runs normally if the case works
        else{
          initArray[i] = int(numb[j]) + int(scrambleArray[i])+ int(dString.value())
        }
      }
    }
  }
  //adds all values to a string plus the encryption value at the end
  //check again if the added value is legal
  if(dString.value() === "" || dString.value() > 99){
    output = join(initArray,"")
  }
  else{
    output = join(initArray,"")
  }
  //clear values for added security
  eString.value("")
  dString.value("")
}
function unpaint(){
  initArray = []
  scrambleArray = []
  //this for loop does functionally the same thing, except it removes the added value from the check
  for (let i = 0; i < fString.value().length; i += 3) {
    initArray.push(str(fString.value()[i]) + str(fString.value()[i + 1]) + str(fString.value()[i+2]));
    scrambleArray.push(i/3)
  }
  scrambleArray.reverse()
  //the same thing over again
  for (var i in initArray, scrambleArray){
    for (var j in character, numb){
      //check happens again, subtraction ensues 
      if(dString.value() === "" || dString.value() > 99){
        if (int(initArray[i])-int(scrambleArray[i]) === numb[j]){
          initArray[i] = character[j]
        }
      }
      else{
        if (int(initArray[i])-int(scrambleArray[i])-int(dString.value()) === numb[j]){
          initArray[i] = character[j]
      }
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