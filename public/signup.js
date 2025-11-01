const isAdmin = document.querySelector("#isAdmin");
const adminPasswordWrapper = document.querySelector(".admin-password");

isAdmin.addEventListener("click", () => {
  const isAdminStatus = isAdmin.checked;
  if (isAdminStatus) {
    adminPasswordWrapper.style.display = "block";
  } else {
    adminPasswordWrapper.style.display = "none";
  }
});
