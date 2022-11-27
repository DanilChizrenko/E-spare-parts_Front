const jquery = require("jquery");

$(document).ready(function(){
    $(".brandupdate").submit(function(event){
        event.preventDefault();
        var formData = {
            id: $("#idBrandUpdate").val(),
            name: $("#nameBrandUpdate").val(),
        };
        if(jquery.isFunction(formData)){
            callback = formData;
            formData = {};
        }
        return jquery.ajax({
            type: 'PUT',
            url: 'http://127.0.0.1:8000/api/updateBrand/' + formData.id,
            data: formData,
            success: true
        });
    });
});

$(document).ready(function(){
    $(".modelupdate").submit(function(event){
        event.preventDefault();
        var formData = {
            id: $("#idModelUpdate").val(),
            name: $("#nameModelUpdate").val(),
            typefuel: $("#typefuelUpdate").val(),
            year: $("#yearUpdate").val(),
            brand_id: $("#brand_idUpdate").val(),
        };
        if(jquery.isFunction(formData)){
            callback = formData;
            formData = {};
        }
        return jquery.ajax({
            type: 'PUT',
            url: 'http://127.0.0.1:8000/api/updateModel/' + formData.id,
            data: formData,
            success: true
        });
    });
});

$(document).ready(function(){
    $(".categoryupdate").submit(function(event){
        event.preventDefault();
        var formData = {
            id: $("#idCategoryUpdate").val(),
            name: $("#nameCategoryUpdate").val(),
        };
        if(jquery.isFunction(formData)){
            callback = formData;
            formData = {};
        }
        return jquery.ajax({
            type: 'PUT',
            url: 'http://127.0.0.1:8000/api/updateCategory/' + formData.id,
            data: formData,
            success: true
        });
    });
});

$(document).ready(function(){
    $(".manufacturerupdate").submit(function(event){
        event.preventDefault();
        var formData = {
            id: $("#idManufacturerUpdate").val(),
            name: $("#nameManufacturerUpdate").val(),
        };
        if(jquery.isFunction(formData)){
            callback = formData;
            formData = {};
        }
        return jquery.ajax({
            type: 'PUT',
            url: 'http://127.0.0.1:8000/api/updateManufacturer/' + formData.id,
            data: formData,
            success: true
        });
    });
});

$(document).ready(function(){
    $(".sparepartupdate").submit(function(event){
        event.preventDefault();
        var formData = {
            id: $("#idSparepartUpdate").val(),
            name: $("#nameSparepartUpdate").val(),
            category_id: $("#category_idUpdate").val(),
            manufacturer_id: $("#manufacturer_idUpdate").val(),
        };
        if(jquery.isFunction(formData)){
            callback = formData;
            formData = {};
        }
        return jquery.ajax({
            type: 'PUT',
            url: 'http://127.0.0.1:8000/api/updateSparePart/' + formData.id,
            data: formData,
            success: true
        });
    });
});