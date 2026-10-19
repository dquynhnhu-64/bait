// Khởi tạo hiệu ứng sóng (Waves) của Material Design
$(document).ready(function () {
    Waves.attach('.btn', ['waves-light']);
    Waves.init();
});

// Xử lý gửi Form đăng ký
function handleRegister(event) {
    event.preventDefault();
    
    // Hiển thị thông báo thành công
    var alertBox = document.getElementById('successAlert');
    alertBox.classList.remove('d-none');
    
    // Reset form
    document.getElementById('leadForm').reset();

    // Ẩn thông báo sau 4 giây
    setTimeout(function() {
        alertBox.classList.add('d-none');
    }, 4000);

    return false;
}