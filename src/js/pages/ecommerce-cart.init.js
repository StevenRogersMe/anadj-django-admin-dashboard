/*
Template Name: AnaDj -  Admin & Dashboard Template
Author: Ana
Contact: skrobanastasiia@gmail.com
File: ecommerce cart Js File
*/

var defaultOptions = {
};

$('[data-bs-toggle="touchspin"]').each(function (idx, obj) {
    var objOptions = $.extend({}, defaultOptions, $(obj).data());
    $(obj).TouchSpin(objOptions);
});