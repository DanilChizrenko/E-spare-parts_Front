$(document).ready(function(){
    $(".brandcreate").submit(function (event){
        var formData = {
            name: $("#name").val(),
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
            name: $("#name").val(),
            typefuel: $("typefuel").val(),
            year: $("year").val(),
            brand_id: $("brand_id").val(),
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
            name: $("#name").val(),
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
    $(".manufacturercreate").submit(function (event){
        var formData = {
            name: $("#name").val(),
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
    $(".sparepartcreate").submit(function (event){
        var formData = {
            name: $("#name").val(),
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