$(document).ready(function () {


    var itemCount = 0;

    $("#add-to-list").on("click", function (event) {
        // prevent form from submitting
        event.preventDefault();

        // get user input, store it in variable
        var userInput = $("#to-do-input").val().trim();

        var listItem = $("<p>");
        listItem.attr("id", "item-" + itemCount);
        listItem.addClass("list-item");
        listItem.append(" " + userInput);

        var toDoButton = $("<button>");
        toDoButton.attr("data-to-do", itemCount);
        toDoButton.addClass("checkbox");
        toDoButton.append("x");

        listItem = listItem.prepend(toDoButton);

        $("#to-dos").append(listItem);

        $("#to-do-input").val("");

        itemCount++;
    });

    $(document.body).on("click", ".checkbox", function () {
        var itemCount = $(this).attr("data-to-do");
        $("#item-" + itemCount).remove();
    });

});