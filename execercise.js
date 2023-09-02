function bai1(){
    // Nhập 3 phần tử vào mảng
    var array = [],
    Tong =0;

    // Đưa các phần tử vào trong mảng và Tính Tổng
    for (var i = 1; i < 4; i++) {
    array.push(document.getElementById("input" + i).value);
    Tong = document.getElementById("input" + i).value*1 + Tong;
    console.log(
        document.getElementById("input" + i).value*1
    )
    }

    // In ra mảng
    console.log(array);
    console.log(Tong);
    document.getElementById("ketqua1").innerHTML= `Tổng của 3 số trên là ${Tong.toLocaleString()}`; 
}

function bai2(){
     // Nhập 3 phần tử vào mảng
     var array1 = [],
     Num =0;
 
     // Đưa các phần tử vào trong mảng và Đếm số dương
    for (var i = 1; i < 4; i++) {
    array1.push(document.getElementById("Input" + i).value);
        if (
            document.getElementById("Input" + i).value*1 > 0
        ){
        Num++;
     }
    document.getElementById("ketqua2").innerHTML= `Tổng số dương ${Num.toLocaleString()}`; 
    }
}

function bai3(){
    var Input_array = document.getElementById("arrayBai3").value;
    // Tạo mảng các số riêng lẻ bằng dấu ,
    var Sort_array = Input_array.split(",");
    // Khởi tạo giá trị min 
    var minNumber = Sort_array[0];
    // Loop và chọn ra min của mảng
    for (i =0; i < Sort_array.length; i++) {
        if (minNumber > Sort_array[i]){
            minNumber = Sort_array[i];
        }
    }
    document.getElementById("ketqua3").innerHTML= `Số nhỏ nhất ${minNumber.toLocaleString()}`; 

}

function bai4(){
    var Input_array = document.getElementById("arrayBai4").value;
    // Tạo mảng các số riêng lẻ bằng dấu ,
    var Sort_array = Input_array.split(",");
    var smallestPositiveNumber = null;

    // Chọn các giá trị dương và tìm số dương nhỏ nhất
    for (var i = 0; i < Sort_array.length; i++) {
        if (Sort_array[i] >= 0) {
          if (smallestPositiveNumber == null || Sort_array[i] < smallestPositiveNumber) {
            smallestPositiveNumber = Sort_array[i];
          }
        }
      }
    document.getElementById("ketqua4").innerHTML= `Số dương nhỏ nhất ${smallestPositiveNumber.toLocaleString()}`; 

}

function bai5(){
    var Input_array = document.getElementById("arrayBai5").value;
    // Tạo mảng các số riêng lẻ bằng dấu ,
    var Sort_array = Input_array.split(","),
    evenNumber =-1;
    for (let i = Sort_array.length - 1; i >= 0; i--) {
        if (Sort_array[i] %2 ==0){
            evenNumber = Sort_array[i];
            break;
        }      
    }
    document.getElementById("ketqua5").innerHTML= `Số chẵn cuối cùng ${evenNumber.toLocaleString()}`; 
}

function bai6(){
    var Input_array = document.getElementById("arrayBai6").value;
    // Tạo mảng các số riêng lẻ bằng dấu 
    var Sort_array = Input_array.split(",");

    // Lấy vị trí cần đổi
    var vitri1 = document.getElementById("vitri1").value*1,
    vitri2 = document.getElementById("vitri2").value*1,
    swap_Num;

    // Đổi vị trí 2 phần tử
    swap_Num = Sort_array[vitri1];
    Sort_array[vitri1] = Sort_array[vitri2];
    Sort_array[vitri2] = swap_Num;

    
    document.getElementById("ketqua6").innerHTML= `Mảng sau khi đổi vị trí: [ ${Sort_array}]`; 

}

// quick sort
const array =[9,1,2,23,6,76];
function bai7(array, low=0, high=6) {
    if (low < high) {
        // Chọn một phần tử trong mảng làm điểm đánh dấu
        const pivot = array[Math.floor((low + high)/2)];
    
        // Tìm vị trí của điểm đánh dấu trong mảng
        let i = low;
        let j = high;
        while (i < j) {
          while (array[i] < pivot) {
            i++;
          }
    
          while (array[j] > pivot) {
            j--;
          }
    
          if (i < j) {
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        }
    
        // Sắp xếp mảng con bên trái
        bai7(array, low, i - 1);
    
        // Sắp xếp mảng con bên phải
        bai7(array, i + 1, high);
      }  

}

bai7(array, 0, array.length - 1);

console.log(array);



