// JQuerry FOR FAQ PAGE
// Data FAQ tetap sama
const faqData = [
  {
    question: "Apa itu Skripsi<sup>+</sup>?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste delectus quos dolores deserunt atque ullam eos, quo debitis maxime voluptatibus aut adipisci odit fuga",
  },
  {
    question: "Bagaimana cara mendaftar di Skripsi<sup>+</sup>?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste delectus quos dolores deserunt atque ullam eos, quo debitis maxime voluptatibus aut adipisci odit fuga",
  },
  {
    question: "Apa keunggulan Skripsi<sup>+</sup>?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste delectus quos dolores deserunt atque ullam eos, quo debitis maxime voluptatibus aut adipisci odit fuga",
  },
  {
    question: "Bimbingan online menggunaka platform apa?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste delectus quos dolores deserunt atque ullam eos, quo debitis maxime voluptatibus aut adipisci odit fuga",
  },
];

// Fungsi untuk membuat elemen FAQ menggunakan jQuery
function createFaqItem(faq) {
  // Membuat elemen div baru untuk setiap item FAQ
  const $item = $("<div>").addClass("faq-item");

  // Membuat elemen h3 untuk pertanyaan
  const $question = $("<h3>").addClass("faq-question").html(faq.question); // Menggunakan .html agar tag <sup> berfungsi

  // Membuat elemen hr sebagai garis pemisah
  const $separator = $("<hr>").addClass("faq-separator").hide(); // Menyembunyikan separator di awal

  // Membuat elemen p untuk jawaban
  const $answer = $("<p>").addClass("faq-answer").text(faq.answer).hide(); // Menyembunyikan jawaban di awal

  // Event listener untuk toggle dengan animasi slide
  $question.on("click", function () {
    const isActive = $item.toggleClass("active").hasClass("active");
    // Menggunakan slideToggle untuk animasi yang mulus
    $separator.slideToggle(isActive ? 300 : 200); // Durasi animasi bisa disesuaikan
    $answer.slideToggle(isActive ? 300 : 200); // Menggunakan slideToggle untuk jawaban
  });

  // Memasukkan pertanyaan, separator, dan jawaban ke dalam div item
  $item.append($question, $separator, $answer);

  return $item;
}

// Fungsi untuk render FAQ ke dalam container menggunakan jQuery
function renderFaqs() {
  const $faqContainer = $("#faq-container"); // Mengambil elemen container dengan jQuery

  faqData.forEach((faq) => {
    const $faqItem = createFaqItem(faq); // Membuat item FAQ menggunakan jQuery
    $faqContainer.append($faqItem); // Menambahkannya ke container
  });
}

// Memastikan DOM siap, lalu render FAQ
$(document).ready(renderFaqs);

// JQuerry FOR MENTORS PAGE
$(document).ready(function () {
  // Memastikan bahwa script berjalan setelah halaman selesai dimuat.
  // Array object berisi informasi mentor
  const mentors = [
    {
      src: "../assets/img/dosen.png",
      title: "Nur Cahaya Hikari",
      text: "Experienced Data Scientist with a passion for teaching.",
      rating: "4.9",
    },
    {
      src: "../assets/img/dosen.png",
      title: "Ahmad Yani",
      text: "Front-end Developer with a knack for problem solving.",
      rating: "4.8",
    },
    {
      src: "../assets/img/dosen.png",
      title: "Siti Aisyah",
      text: "AI Engineer focusing on cutting-edge machine learning technologies.",
      rating: "5.0",
    },
    {
      src: "../assets/img/dosen.png",
      title: "Dewi Pratiwi",
      text: "Cybersecurity expert with 10+ years of experience.",
      rating: "4.7",
    },
    {
      src: "../assets/img/dosen.png",
      title: "Ahmad Yani",
      text: "Front-end Developer with a knack for problem solving.",
      rating: "4.8",
    },
    {
      src: "../assets/img/dosen.png",
      title: "Siti Aisyah",
      text: "AI Engineer focusing on cutting-edge machine learning technologies.",
      rating: "5.0",
    },
    {
      src: "../assets/img/dosen.png",
      title: "Ahmad Yani",
      text: "Front-end Developer with a knack for problem solving.",
      rating: "4.8",
    },
    {
      src: "../assets/img/dosen.png",
      title: "Siti Aisyah",
      text: "AI Engineer focusing on cutting-edge machine learning technologies.",
      rating: "5.0",
    },
  ];

  // Fungsi untuk render card mentor
  function renderMentors(mentorsList) {
    $("#mentor-cards").empty(); // Mengosongkan div dengan id 'mentor-cards' sebelum melakukan render ulang.

    mentorsList.forEach(function (mentor) {
      //Loop untuk setiap mentor
      const card = `
        <div class="col-lg-3 col-md-6 mt-3">
          <div class="card h-100" style="width: 100%">
            <div class="image-zoom">
              <div class="image-zoom-wrapper">
                <img src="${mentor.src}" class="card-img-top" alt="${mentor.title}" />
              </div>
            </div>
            <div class="card-body d-flex flex-column text-center">
              <h5 class="card-title">${mentor.title}</h5>
              <p class="card-text flex-grow-1">${mentor.text}</p>
              <div class="mt-auto d-flex justify-content-between align-items-center">
                <div class="rating d-flex align-items-center">
                  <i class="bi bi-star-fill"></i>
                  <span class="ml-2">${mentor.rating}</span>
                </div>
                <a href="#" class="btn btn-brand">Read More</a>
              </div>
            </div>
          </div>
        </div>
      `;

      $("#mentor-cards").append(card); // Menambahkan card ke dalam div dengan id 'mentor-cards'.
    });
  }

  // Render semua mentor saat halaman pertama kali dimuat
  renderMentors(mentors); // Memanggil fungsi renderMentors untuk menampilkan semua mentor di awal

  // Fungsi pencarian berdasarkan nama atau rating
  $("#searchBtn").on("click", function () {
    const searchQuery = $("#searchInput").val().toLowerCase();
    // Mengambil nilai dari input search, mengubahnya menjadi huruf kecil agar pencarian tidak case-sensitive.

    const filteredMentors = mentors.filter(function (mentor) {
      // Melakukan filter pada array 'mentors' berdasarkan input pencarian.
      // Jika nama mentor atau rating mengandung kata yang diinput, mentor tersebut akan dimasukkan dalam hasil pencarian.
      return (
        mentor.title.toLowerCase().includes(searchQuery) ||
        mentor.rating.includes(searchQuery)
      );
    });

    // Render ulang mentor berdasarkan hasil pencarian.
    renderMentors(filteredMentors);
  });
});

// JQuerry FOR COURSES PAGE
$(document).ready(function () {
  // Array object berisi informasi course
  const courses = [
    {
      src: "../assets/img/course.jpg",
      title: "Metode Penelitian",
      text: "Kursus ini mencakup metode dan teknik yang digunakan dalam penelitian ilmiah.",
      price: "Rp 500.000,- / Month",
    },
    {
      src: "../assets/img/course.jpg",
      title: "Pemrograman Web",
      text: "Pelajari cara membangun website dari dasar hingga mahir.",
      price: "Rp 450.000,- / Month",
    },
    {
      src: "../assets/img/course.jpg",
      title: "Machine Learning",
      text: "Pengenalan tentang pembelajaran mesin dan algoritma AI.",
      price: "Rp 600.000,- / Month",
    },
    {
      src: "../assets/img/course.jpg",
      title: "Desain UI/UX",
      text: "Kursus lengkap untuk membangun antarmuka yang intuitif dan ramah pengguna.",
      price: "Rp 400.000,- / Month",
    },
    {
      src: "../assets/img/course.jpg",
      title: "Pemrograman Web",
      text: "Pelajari cara membangun website dari dasar hingga mahir.",
      price: "Rp 450.000,- / Month",
    },
    {
      src: "../assets/img/course.jpg",
      title: "Machine Learning",
      text: "Pengenalan tentang pembelajaran mesin dan algoritma AI.",
      price: "Rp 600.000,- / Month",
    },
    {
      src: "../assets/img/course.jpg",
      title: "Metode Penelitian",
      text: "Kursus ini mencakup metode dan teknik yang digunakan dalam penelitian ilmiah.",
      price: "Rp 500.000,- / Month",
    },
    {
      src: "../assets/img/course.jpg",
      title: "Pemrograman Web",
      text: "Pelajari cara membangun website dari dasar hingga mahir.",
      price: "Rp 450.000,- / Month",
    },
    {
      src: "../assets/img/course.jpg",
      title: "Machine Learning",
      text: "Pengenalan tentang pembelajaran mesin dan algoritma AI.",
      price: "Rp 600.000,- / Month",
    },
  ];

  // Fungsi untuk render card course
  function renderCourses(courseList) {
    $("#course-cards").empty(); // Kosongkan konten sebelum render
    courseList.forEach(function (course) {
      const card = `
        <div class="col-lg-3 col-md-6 mt-3">
          <div class="card h-100" style="width: 100%">
            <div class="image-zoom">
              <div class="image-zoom-wrapper">
                <img src="${course.src}" class="card-img-top" alt="${course.title}" />
              </div>
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${course.title}</h5>
              <p class="card-text flex-grow-1">${course.text}</p>
              <hr>
              <div class="mt-auto d-flex justify-content-between align-items-center">
                <div class="price">
                  <span class="ml-2">${course.price}</span>
                </div>
                <a href="#" class="btn btn-brand">Beli</a>
              </div>
            </div>
          </div>
        </div>
      `;

      $("#course-cards").append(card);
    });
  }

  // Render all courses on page load
  renderCourses(courses);

  // Fungsi pencarian berdasarkan nama atau harga
  $("#searchBtn").on("click", function () {
    const searchQuery = $("#searchInput").val().toLowerCase();
    const filteredCourses = courses.filter(function (course) {
      return (
        course.title.toLowerCase().includes(searchQuery) ||
        course.price.includes(searchQuery)
      );
    });
    renderCourses(filteredCourses);
  });
});

// ----------JQuery FOR SIGN IN PAGE----------
function togglePasswordIn() {
  const passwordInput = $("#input-password"); // elemen input
  const togglePassword = $("#toggle-password-in"); // elemen tombol

  if (passwordInput.attr("type") === "password") {
    // tampilkan password
    passwordInput.attr("type", "text");
    // ubah icon toggle menjadi eye
    togglePassword.removeClass("bi-eye-slash").addClass("bi-eye");
  } else {
    // sembunyikan password
    passwordInput.attr("type", "password");
    // ubah icon toggle menjadi eye-slash
    togglePassword.removeClass("bi-eye").addClass("bi-eye-slash");
  }
}

// ----------JQuery FOR SIGN UP PAGE----------
// fungsi toggle show password
function togglePasswordUp() {
  const passwordInput = $("#input-password-sign-up"); // elemen input
  const togglePassword = $("#toggle-password-sign-up"); // elemen tombol

  if (passwordInput.attr("type") === "password") {
    // tampilkan password
    passwordInput.attr("type", "text");
    // ubah icon toggle menjadi eye
    togglePassword.removeClass("bi-eye-slash").addClass("bi-eye");
  } else {
    // sembunyikan password
    passwordInput.attr("type", "password");
    // ubah icon toggle menjadi eye-slash
    togglePassword.removeClass("bi-eye").addClass("bi-eye-slash");
  }
}

// fungsi toggle show confirm password
function toggleConfirmPasswordUp() {
  const passwordInput = $("#input-confirm-password-sign-up"); // elemen input
  const togglePassword = $("#toggle-confirm-password-sign-up"); // elemen tombol

  if (passwordInput.attr("type") === "password") {
    // tampilkan password
    passwordInput.attr("type", "text");
    // ubah icon toggle menjadi eye
    togglePassword.removeClass("bi-eye-slash").addClass("bi-eye");
  } else {
    // sembunyikan password
    passwordInput.attr("type", "password");
    // ubah icon toggle menjadi eye-slash
    togglePassword.removeClass("bi-eye").addClass("bi-eye-slash");
  }
}

// fungsi utama validasi form sign up
function initSignUpForm() {
  $(document).ready(function () {
    // mendapatkan referensi ke elemen input
    const usernameInput = $("#input-username-sign-up");
    const emailInput = $("#input-email-sign-up");
    const passwordInput = $("#input-password-sign-up");
    const confirmPasswordInput = $("#input-confirm-password-sign-up");
    const acceptTermsInput = $("#accept-terms");
    const signUpButton = $("#btn-sign-up");

    // fungsi validasi tiap input
    function validateInput(input) {
      clearErrors(input); // menghapus pesan kesalahan sebelumnya

      let isValid = true; // menyimpan status validasi input
      let errorMessage = ""; // menyimpan pesan kesalahan jika ada

      // validasi username
      if (input.is(usernameInput)) {
        if (input.val().trim() === "") {
          errorMessage = "Username is required"; // pesan kesalahan username
          isValid = false; // menandai input tidak valid
        }
      }
      // validasi email
      else if (input.is(emailInput)) {
        if (input.val().trim() === "" || !validateEmail(input.val())) {
          errorMessage = "Valid email is required"; // pesan kesalahan email
          isValid = false; // menandai input tidak valid
        }
      }
      // validasi password
      else if (input.is(passwordInput)) {
        if (input.val().trim() === "") {
          errorMessage = "Password is required"; // pesan kesalahan password
          isValid = false; // menandai input tidak valid
        }
      }
      // validasi confirm password
      else if (input.is(confirmPasswordInput)) {
        if (input.val().trim() === "" || input.val() !== passwordInput.val()) {
          errorMessage = "Passwords must match"; // pesan kesalahan jika password tidak cocok
          isValid = false; // menandai input tidak valid
        }
      }
      // validasi checkbox
      else if (input.is(acceptTermsInput)) {
        if (!input.is(":checked")) {
          errorMessage = "You must accept the terms and conditions"; // pesan kesalahan jika tidak menyetujui syarat dan ketentuan
          isValid = false; // menandai input tidak valid
        }
      }

      //jika input tidak valid, tampilkan pesan kesalahan
      if (!isValid) {
        showError(input, errorMessage);
      }

      // cek apakah semua input valid untuk mengaktifkan sign up btn
      checkFormValidity();
    }

    // fungsi cek apakah seluruh input valid
    function checkFormValidity() {
      const isFormValid =
        usernameInput.val().trim() !== "" && // cek username apakah terisi
        emailInput.val().trim() !== "" && // cek email apakah terisi
        validateEmail(emailInput.val()) && // cek email apakah valid
        passwordInput.val().trim() !== "" && // cek password apakah terisi
        confirmPasswordInput.val().trim() !== "" && // cek confirm password apakah terisi
        confirmPasswordInput.val() === passwordInput.val() && // cek confirm password apakah cocok
        acceptTermsInput.is(":checked"); // cek apakah checkbox diterima

      // mengaktifkan atau menonaktifkan sign up btn berdasarkan validitas form
      signUpButton.prop("disabled", !isFormValid);
    }

    // fungsi menampilkan pesan kesalahan
    function showError(input, message) {
      const errorDiv = $("<div></div>"); // membuat elemen div untuk pesan kesalahan
      errorDiv.addClass("text-danger small"); // menambahkan kelas untuk styling
      errorDiv.text(message); // mengatur teks pesan kesalahan

      // jika input adalah checkbox, tambahkan pesan kesalahan di bawahnya
      if (input.is(acceptTermsInput)) {
        const termsContainer = $(".form-check");
        if (!termsContainer.find(".text-danger").length) {
          termsContainer.append(errorDiv); // menambahkan elemen kesalahan ke container
        }
      } else {
        input.addClass("is-invalid"); // menandai input tidak valid
        input.parent().append(errorDiv); // menambahkan elemen kesalahan ke parent input
      }
    }

    // fungsi menghapus pesan kesalahan
    function clearErrors(input) {
      input.parent().find(".text-danger").remove(); // menghapus elemen kesalahan
      input.removeClass("is-invalid"); // menghapus kelas tidak valid
    }

    // fungsi validasi email menggunakan regex
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // pola regex untuk validasi email
      return regex.test(email); // mengembalikan true jika email valid, false jika tidak
    }

    // menambahkan event listener pada setiap input
    [usernameInput, emailInput, passwordInput, confirmPasswordInput].forEach(
      (item) => {
        item.on("input", () => validateInput(item));
      }
    );
    acceptTermsInput.on("change", () => validateInput(acceptTermsInput));
  });
}

// inisialisasi fungsi validasi form sign up
initSignUpForm();
