import Swal from "sweetalert2";

export default Swal.mixin({
  toast: true,
  showClass: {
    popup: "swal2-show-custom",
  },
  hideClass: {
    popup: "",
  },
  position: "bottom",
  timer: 1500,
  showConfirmButton: false,
});