$(document).ready(function(){
    $(".brandcreate").submit(function (event){
        var formData = {
            name: $("#nameBrand").val(),
        };
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:8000/api/createBrand",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data){
            console.log(data);
        });
        event.preventDefault();
    });
});

$(document).ready(function(){
    $(".modelcreate").submit(function (event){
        var formData = {
            name: $("#nameModel").val(),
            typefuel: $("#typefuel").val(),
            year: $("#year").val(),
            brand_id: $("#brand_id").val(),
        };
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:8000/api/createModel",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data){
            console.log(data);
        });
        event.preventDefault();
    });
});

$(document).ready(function(){
    $(".categorycreate").submit(function (event){
        var formData = {
            name: $("#nameCategory").val(),
        };
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:8000/api/createCategory",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data){
            console.log(data);
        });
        event.preventDefault();
    });
});

$(document).ready(function(){
    $(".manufacturercreate").submit(function (event){
        var formData = {
            name: $("#nameManufacturer").val(),
        };
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:8000/api/createManufacturer",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data){
            console.log(data);
        });
        event.preventDefault();
    });
});

$(document).ready(function(){
    $(".sparepartcreate").submit(function (event){
        var formData = {
            name: $("#nameSparepart").val(),
            category_id: $("#category_id").val(),
            manufacturer_id: $("#manufacturer_id").val(),
        };
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:8000/api/createSparePart",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data){
            console.log(data);
        });
        event.preventDefault();
    });
});