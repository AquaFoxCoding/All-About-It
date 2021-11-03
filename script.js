"use strict";

const openNav = document.querySelector(".main-menu-icon");
const closeNav = document.querySelector(".menu-icon");
const menuModal = document.querySelector(".dropdown");
const overlay = document.querySelector(".overlay");

const openMenuModal = function () {
  overlay.classList.toggle("hidden");
  menuModal.classList.toggle("hidden");
};

openNav.addEventListener("click", openMenuModal);
closeNav.addEventListener("click", openMenuModal);
overlay.addEventListener("click", openMenuModal);
