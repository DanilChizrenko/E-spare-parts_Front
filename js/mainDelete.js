$(document).ready(function (response) {
    $(".brandDelete").submit(function (event){
        event.preventDefault();
        var formData = {
            id: $("#idBrandDelete").val(),
        };
        $.ajax({
            type: 'DELETE',
            processData: false,
            contentType: 'application\json',
            url: 'http://127.0.0.1:8000/api/deleteBrand/' + formData.id,
            data: formData
        });
    });
});

$(document).ready(function (response) {
    $(".modelDelete").submit(function (event){
        event.preventDefault();
        var formData = {
            id: $("#idModelDelete").val(),
        };
        $.ajax({
            type: 'DELETE',
            processData: false,
            contentType: 'application\json',
            url: 'http://127.0.0.1:8000/api/deleteModel/' + formData.id,
            data: formData
        });
    });
});

$(document).ready(function (response) {
    $(".categoryDelete").submit(function (event){
        event.preventDefault();
        var formData = {
            id: $("#idCategoryDelete").val(),
        };
        $.ajax({
            type: 'DELETE',
            processData: false,
            contentType: 'application\json',
            url: 'http://127.0.0.1:8000/api/deleteCategory/' + formData.id,
            data: formData
        });
    });
});

$(document).ready(function (response) {
    $(".manufacturerDelete").submit(function (event){
        event.preventDefault();
        var formData = {
            id: $("#idManufacturerDelete").val(),
        };
        $.ajax({
            type: 'DELETE',
            processData: false,
            contentType: 'application\json',
            url: 'http://127.0.0.1:8000/api/deleteManufacturer/' + formData.id,
            data: formData
        });
    });
});

$(document).ready(function (response) {
    $(".sparepartDelete").submit(function (event){
        event.preventDefault();
        var formData = {
            id: $("#idSparePartDelete").val(),
        };
        $.ajax({
            type: 'DELETE',
            processData: false,
            contentType: 'application\json',
            url: 'http://127.0.0.1:8000/api/deleteSparePart/' + formData.id,
            data: formData
        });
    });
});