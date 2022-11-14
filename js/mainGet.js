function GetBrands(name){
    $(document).ready(function(){
        $.ajax({
            url: "http://127.0.0.1:8000/api/showBrands?name=" + name,
            dataType: "json"
        }).done(function(response){
            let brandsDiv =  $("#brands");
            console.log(response);
            $.each(response ,function(i,brand){
                brandsDiv.append('<p>' + brand.name + '<p>');
            });
        });
    });
}

function GetModels(brand_id){
    $(document).ready(function(){
        $.ajax({
            url: "http://127.0.0.1:8000/api/showModels?brand_id=" + brand_id,
            dataType: "json"
        }).done(function(response){
            let modelsDiv =  $("#models");
            console.log(response);
            $.each(response ,function(i,model){
                modelsDiv.append('<p>' + model.name + '<p>');
            });
        });
    });
}

function GetCategory(name){
    $(document).ready(function(){
        $.ajax({
            url: "http://127.0.0.1:8000/api/showCategories?name=" + name,
            dataType: "json"
        }).done(function(response){
            let categoryDiv =  $("#categories");
            console.log(response);
            $.each(response ,function(i,category){
                categoryDiv.append('<p>' + category.name + '<p>');
            });
        });
    });
}

function GetManufacturer(name){
    $(document).ready(function(){
        $.ajax({
            url: "http://127.0.0.1:8000/api/showManufacturers?name=" + name,
            dataType: "json"
        }).done(function(response){
            let manufacturerDiv =  $("#manufacturers");
            console.log(response);
            $.each(response ,function(i,manufacturer){
                manufacturerDiv.append('<p>' + manufacturer.name + '<p>');
            });
        });
    });
}

function GetSparepart(manufacturer_id){
    $(document).ready(function(){
        $.ajax({
            url: "http://127.0.0.1:8000/api/showSpareParts?manufacturer_id=" + manufacturer_id,
            dataType: "json"
        }).done(function(response){
            let sparepartDiv =  $("#spareparts");
            console.log(response);
            $.each(response ,function(i,spare_part){
                sparepartDiv.append('<p>' + spare_part.name + '<p>');
            });
        });
    });
}