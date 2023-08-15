let textbox = document.getElementById("textbox");
textbox.addEventListener('input',function(){
    var text =this.value ;
    let char = text.length;
   var count = document.getElementById("char");
   count.innerHTML = char;

   // word count

   text = text.trim();
   let word = text.split(" ");
   // to count those word which is not null;
   let complete_word = word.filter(function(elm){
      return elm !="";
   })
   
   var sout = document.getElementById("word");
   // return the length of complete word to avoid count of null
   sout.innerHTML = complete_word.length;

});