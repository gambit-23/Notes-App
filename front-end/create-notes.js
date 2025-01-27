const createNotes = async () => {
  const textArea = document.getElementById("notes-area").value;
  const notesAuthor = document.getElementById("notes-author").value;

  // console.log(textArea);
  // console.log(notesAuthor);

  const response = await axios({
    url: "http://127.0.0.1:8000",
    method: "POST",
    data: {
      notes: textArea,
      author: notesAuthor,
    },
  });

  if (response.data === true) {
    alert("Successfully note saved");
  } else {
    alert("Something went wrong");
  }
};
