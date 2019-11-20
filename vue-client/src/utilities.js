import Swal from "sweetalert2";
export default function IndicatorPopup(text, type) {
  if (type === "warning") {
    Swal.fire({
      title: text,

      position: "top",
      customClass: "swal-warning",

      showConfirmButton: false,

      showClass: {
        popup: "animated fadeInDown faster"
      },
      hideClass: {
        popup: "animated fadeOutUp faster"
      },
      timer: 1200
    });
  } else if (type === "copylink") {
    Swal.fire({
      title: text,

      position: "top",
      customClass: "swal-copyclipboard",

      showConfirmButton: false,

      showClass: {
        popup: "animated fadeInDown faster"
      },
      hideClass: {
        popup: "animated fadeOutUp faster"
      },
      timer: 1200
    });
  }
}
