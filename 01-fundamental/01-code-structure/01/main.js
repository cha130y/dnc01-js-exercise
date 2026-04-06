//คำสั่ง alert จะแสดงกล่องข้อความใน browser
// alert('My name is Chanon');

$(function () {
  $('li').on('click', function () {
    alert('You clicked on: ' + $(this).text());
    // $(this).hide();
    $(this).fadeOut(1000);
  });
});
