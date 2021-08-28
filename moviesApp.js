let newList = [];
let currentId = 0;

$(function() {
  // form submit to add list 

  $("#form").on("submit", function(evt) {
    evt.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();
    
    currentId++
    newList.push({ title, rating, currentId });

    $("#td").append(createNewDataHTML({ title, rating, currentId }));
    $("#form").trigger("reset");
    
  });

  // remove list when click on delete button

  $("#td").on("click", ".btn.btn-danger", function(evt) {
    $(evt.target).closest("tr").remove();
    });

  });

function createNewDataHTML(data) {
  return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td><button class="btn btn-danger" data-delete-id=${data.currentId}>Delete</button>
      </td>
    <tr>`;
}

