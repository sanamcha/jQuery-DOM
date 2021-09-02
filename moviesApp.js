let newList = [];
let currId = 0;

$(function() {
  // form submit to add list 

  $("#form").on("submit", function(e) {
    e.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();
    
    currId++
    newList.push({ title, rating, currId });

    $("#td").append(newData({ title, rating, currId }));
    $("#form").trigger("reset");
    
  });

  // remove list when click on delete button

  $("#td").on("click", ".btn.btn-warning", function(e) {
    $(e.target).closest("tr").remove();
    });

  });

function newData(data) {
  return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td><button class="btn btn-warning" data-delete-id=${data.currId}>Delete</button>
      </td>
    <tr>`;
}

