// js for displaying notes in the view notes page //

const fetchNotes = async () => {
  const response = await axios({
    url: "http://127.0.0.1:8000",
    method: "GET",
  });
  const notesList = response.data;

  const notesListTag = document.getElementById("view-notes-list");

  for (let i = 0; i < notesList.length; i++) {
    // notesList[i] = {notes, author}

    const tag = `
    <li class="view-notes-list-items">
    <div class="notes-content">${notesList[i].notes}</div>
    <div class="notes-author">${notesList[i].author}</div>
    </li>
    `;

    notesListTag.innerHTML += tag;
  }
};

fetchNotes();
