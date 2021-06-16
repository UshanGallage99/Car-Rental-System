$("#btnCarAdd").click(function (){
    let carId = $("#txtcarcode").val();
    let brand = $("#txtbrand").val();
    let category = $("#txtcategory").val();
    let transmission = $("#txttransmission").val();
    let fuelType = $("#txtfueltype").val();
    let dailyRate = $("#txtdailyrate").val();
    let monthlyRate = $("#txtmonthlyrate").val();
    let freeKmforDay = $("#txtfreeday").val();
    let freeKmforMonth = $("#txtfreemoth").val();
    let priceforExtraKm = $("#txtextrafee").val();
    let registrationNumber = $("#txtregnumber").val();
    let color = $("#txtcolor").val();

   $.ajax({
       url:'http://localhost:8080/pos/api/v1/car',
       method:'post',
       async:true,
       contentType:'application/json',
       data:JSON.stringify({
           carId:carId,
           brand:brand,
           category:category,
           transmission:transmission,
           fuelType:fuelType,
           dailyRate:dailyRate,
           monthlyRate:monthlyRate,
           freeKmforDay:freeKmforDay,
           freeKmforMonth:freeKmforMonth,
           priceforExtraKm:priceforExtraKm,
           registrationNumber:registrationNumber,
           color:color
       }),

       success:function (data){
           console.log(data);
           // getAllCars();
       }
   });
});

// $("#btnCarUpdate").click(function (){
//     let carId = $("#txtCarId").val();
//     let brand = $("#txtBrand").val();
//     let type = $("#txtType").val();
//     let numOfPassenger = $("#txtPassengers").val();
//     let transmission = $("#txtTransmission").val();
//     let fuel = $("#txtFuel").val();
//     let perDay = $("#txtCarPrice").val();
//
//    $.ajax({
//        url:'http://localhost:8080/pos/api/v1/car',
//        method:'put',
//        async:true,
//        contentType:'application/json',
//        data:JSON.stringify({
//            carId:carId,
//            brand:brand,
//            fuel:fuel,
//            type:type,
//            numOfPassenger:numOfPassenger,
//            transmission:transmission,
//            perDay:perDay
//        }),
//
//        success:function (data){
//            console.log(data);
//            getAllCars();
//        }
//    });
// });
//
// $("#btnCarSearch").click(function (){
//     let id = $("#txtCarId").val();
//    $.ajax({
//        url:`http://localhost:8080/pos/api/v1/car/${id}`,
//        method:'get',
//        async:true,
//        contentType:'application/json',
//
//        success:function (data){
//            console.log(data);
//            $("#txtBrand").val(data.brand);
//            $("#txtType").val(data.type);
//            $("#txtPassengers").val(data.numOfPassenger);
//            $("#txtFuel").val(data.fuel);
//            $("#txtTransmission").val(data.transmission);
//            $("#txtCarPrice").val(data.perDay);
//        }
//    });
// });
//
// $("#btnCarLoad").click(function (){
//     getAllCars();
// });
//
// function getAllCars(){
//     $("#tblCar").empty();
//     $.ajax({
//         url:'http://localhost:8080/pos/api/v1/car',
//         method:'get',
//         async:true,
//
//         success:function (data){
//             for (let cars of data) {
//                 let row=`<tr><td>${cars.carId}</td><td>${cars.brand}</td><td>${cars.fuel}</td><td>${cars.type}</td><td>${cars.numOfPassenger}</td><td>${cars.transmission}</td><td>${cars.perDay}</td></tr>`;
//                 $("#tblCar").append(row);
//             }
//         }
//     });
//}