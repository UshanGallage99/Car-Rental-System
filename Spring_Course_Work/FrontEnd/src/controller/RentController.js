function curruntDate() {
    let today = new Date().toISOString().slice(0, 10);
    $("#rseDate").text(today);

}
curruntDate();
loadAllCars();

$("#cusID").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let id=$("#cusID").val();
        $.ajax({
            url:`http://localhost:8080/pos/api/v1/customer/${id}`,
            method:'get',
            async:true,
            contentType:'application/json',
            success:function (data){
                console.log(data);
                $("#cusEmail").text(data.email);
            }
        })
    }
});
$("#cmbCarCode").on("change",function (){
    let carId=$("#cmbCarCode").val();
    $.ajax({
        url:`http://localhost:8080/pos/api/v1/car/${carId}`,
        method:'get',
        async:true,
        contentType:'application/json',
        success:function (data){
            console.log(data);
            $("#lblvehBrand").text(data.brand);
            $("#lblvehTrans").text(data.transmission);
            //$("#lblvehAvailable").val(data.transmission);
            $("#lbldalyRate").text(data.dailyRate);
            $("#lbldalyFreeKm").text(data.freeKmforDay);
            $("#lblmonthlyRate").text(data.monthlyRate);
            $("#lblmonthlyFreeKm").text(data.freeKmforMonth);
            $("#lblextraprice").text(data.priceforExtraKm);
            // $("#txtextrafee").val(data.priceforExtraKm);
            // $("#txtregnumber").val(data.registrationNumber);
            // $("#txtcolor").val(data.color);
        },
        error:function (response){
            alert("Customer Not Found...");
        }
    });
});

function loadAllCars() {
    $("#cmbCarCode").children().remove();
    $.ajax({
        url: 'http://localhost:8080/pos/api/v1/car',
        method: 'get',
        async: true,

        success: function (data) {
            $('#cmbCarCode').append("<option>--Select--</option>");
            for (let all of data) {
                let row = `<option>${all.carId}</option>`;
                $("#cmbCarCode").append(row);
            }
        }
    });
}