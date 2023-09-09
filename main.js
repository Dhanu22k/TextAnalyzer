textArea.addEventListener("input", inputValidate);

function inputValidate() {
  words.innerText = textArea.value.split(" ").length;
  characters.innerText = textArea.value.length;
  if (textArea.value.length == "0") {
    words.innerText = textArea.value.length;
  }
}

upperCase.addEventListener("click", () => {
  textArea.value = textArea.value.toUpperCase();
});

lowerCase.addEventListener("click", () => {
  textArea.value = textArea.value.toLowerCase();
});

removeExtraSpace.addEventListener("click", () => {
  textArea.value = textArea.value.replace(/\s+/g, " ");
  inputValidate();
});

clearBtn.addEventListener("click",()=>{
    textArea.value='';
    inputValidate();
})


saveBtn.addEventListener("click", () => {
    const link = document.createElement("a");

// Create a blog object with the file content which you want to add to the file
const file = new Blob([textArea.value], { type: 'text/plain' });

// Add file content in the object URL
link.href = URL.createObjectURL(file);

// Add file name
link.download = "SavedAnalyzerText.txt";

// Add click event to <a> tag to save file.
link.click();
URL.revokeObjectURL(link.href);
});
