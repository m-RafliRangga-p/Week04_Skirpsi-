document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan referensi ke elemen input yang diperlukan
  const usernameInput = document.getElementById("input-username-sign-up");
  const emailInput = document.getElementById("input-email-sign-up");
  const passwordInput = document.getElementById("input-password");
  const confirmPasswordInput = document.getElementById(
    "input-confirm-password"
  );
  const acceptTermsInput = document.getElementById("accept-terms");
  const signUpButton = document.getElementById("btn-sign-up");

  // Fungsi untuk memvalidasi input individu
  function validateInput(input) {
    clearErrors(input); // Menghapus pesan kesalahan sebelumnya untuk input ini

    let isValid = true; // Menyimpan status validasi input
    let errorMessage = ""; // Menyimpan pesan kesalahan jika ada

    // Memvalidasi setiap input berdasarkan jenisnya
    if (input === usernameInput) {
      if (input.value.trim() === "") {
        errorMessage = "Username is required"; // Pesan kesalahan untuk username
        isValid = false; // Menandai input tidak valid
      }
    } else if (input === emailInput) {
      if (input.value.trim() === "" || !validateEmail(input.value)) {
        errorMessage = "Valid email is required"; // Pesan kesalahan untuk email
        isValid = false;
      }
    } else if (input === passwordInput) {
      if (input.value.trim() === "") {
        errorMessage = "Password is required"; // Pesan kesalahan untuk password
        isValid = false;
      }
    } else if (input === confirmPasswordInput) {
      if (input.value.trim() === "" || input.value !== passwordInput.value) {
        errorMessage = "Passwords must match"; // Pesan kesalahan jika password tidak cocok
        isValid = false;
      }
    } else if (input === acceptTermsInput) {
      if (!input.checked) {
        errorMessage = "You must accept the terms and conditions"; // Pesan kesalahan untuk checkbox
        isValid = false;
      }
    }

    // Jika input tidak valid, tampilkan pesan kesalahan
    if (!isValid) {
      showError(input, errorMessage);
    }

    // Memeriksa apakah semua input valid untuk mengaktifkan tombol
    checkFormValidity();
  }

  // Fungsi untuk memeriksa apakah seluruh form valid
  function checkFormValidity() {
    const isFormValid =
      usernameInput.value.trim() !== "" && // Memeriksa apakah username terisi
      emailInput.value.trim() !== "" && // Memeriksa apakah email terisi
      validateEmail(emailInput.value) && // Memeriksa apakah email valid
      passwordInput.value.trim() !== "" && // Memeriksa apakah password terisi
      confirmPasswordInput.value.trim() !== "" && // Memeriksa apakah konfirmasi password terisi
      passwordInput.value === confirmPasswordInput.value && // Memeriksa apakah password dan konfirmasi cocok
      acceptTermsInput.checked; // Memeriksa apakah syarat dan ketentuan diterima

    // Mengaktifkan atau menonaktifkan tombol Sign Up berdasarkan validitas form
    signUpButton.disabled = !isFormValid;
  }

  // Fungsi untuk menampilkan pesan kesalahan
  function showError(input, message) {
    const errorElement = document.createElement("div"); // Membuat elemen div untuk pesan kesalahan
    errorElement.className = "text-danger small"; // Menambahkan kelas untuk styling
    errorElement.innerText = message; // Mengatur teks pesan kesalahan

    // Jika input adalah checkbox, tambahkan pesan kesalahan di bawahnya
    if (input === acceptTermsInput) {
      const termsContainer = document.querySelector(".form-check");
      if (!termsContainer.querySelector(".text-danger")) {
        termsContainer.appendChild(errorElement); // Menambahkan elemen kesalahan ke container
      }
    } else {
      input.classList.add("is-invalid"); // Menambahkan kelas untuk menandai input tidak valid
      input.parentElement.appendChild(errorElement); // Menambahkan elemen kesalahan ke parent input
    }
  }

  // Fungsi untuk menghapus pesan kesalahan untuk input tertentu
  function clearErrors(input) {
    const errorElements = input.parentElement.querySelectorAll(".text-danger"); // Mencari semua elemen kesalahan
    errorElements.forEach((element) => element.remove()); // Menghapus setiap elemen kesalahan
    input.classList.remove("is-invalid"); // Menghapus kelas tidak valid dari input
  }

  // Fungsi untuk memvalidasi email menggunakan regex
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Pola regex untuk validasi email
    return regex.test(email); // Mengembalikan true jika email valid, false jika tidak
  }

  // Menambahkan event listener untuk setiap input agar memvalidasi saat terjadi perubahan
  usernameInput.addEventListener("input", () => validateInput(usernameInput));
  emailInput.addEventListener("input", () => validateInput(emailInput));
  passwordInput.addEventListener("input", () => validateInput(passwordInput));
  confirmPasswordInput.addEventListener("input", () =>
    validateInput(confirmPasswordInput)
  );
  acceptTermsInput.addEventListener("change", () =>
    validateInput(acceptTermsInput)
  );
});
