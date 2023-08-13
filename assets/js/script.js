new gridjs.Grid({
  columns: [
    {
      name: "Rex",
      formatter: (cell) => {
        return gridjs.html(`${cell}<i class="ri-file-info-fill text-primary"></i>`)
      },
      width: "100px"
    },
    { name: "İsim/Soyisim", width: "250px" },
    {
      name: "Online",
      formatter: (cell) => {
        return gridjs.html(`<i class="ri-customer-service-2-fill text-success"></i>`)
      },
      width: "150px"
    },
    { name: "Şube", width: "120px" },
    { name: "Tesis Adı", width: "200px" },
    { name: "Rez Tarihi", width: "150px" },
    { name: "Kişi", width: "150px" },
    { name: "Giriş", width: "120px" },
    { name: "Çıkış", width: "120px" },
    {
      name: "Ödeme",
      formatter: (cell) => {
        return gridjs.html(cell === 'Ödendi' ? '<button type="button" class="btn btn-success waves-effect waves-light">Ödendi</button>' : '<button type="button" class="btn btn-danger waves-effect waves-light">Ödenmedi</button>')
      },
      width: "140px"
    },
    { name: "Rez Tipi", width: "150px" },
    {
      name: "Durum", formatter: (cell) => {
        return gridjs.html(`<button class="btn btn-warning">Konfirme Bek.</button>`);
      }, width: "200px"
    },
    {
      name: "İşlemler", formatter: (cell) => {
        return gridjs.html(`<button class="btn btn-primary me-2">Konfirme</button><button class="btn btn-danger">Konfireme Değil</button>`);
      }, width: "300px"
    }
  ],
  sort: true,
  data: [
    ["26007", "Test Müşterisi", "", "Berivan Akk.", "Toka Bodrum Hotel & Beach Cl.", "17.7.2023 / 17:18", "2 Yt", "18.7/2023", "20.7.2023", "Ödendi", "Sejour", "", " "],
    ["26006", "Test Müşterisi", "", "Büşra Gök.", "Venosa Beach Resort & Spa", "17.5.2023 / 13:18", "2 Yt", "18.7/2023", "20.7.2023", "Ödendi", "Sejour", "", " "],
    ["26005", "Test Müşterisi", "", "Berivan Akk.", "Akra Hotel", "17.9.2023 / 19:36", "2 Yt", "18.7/2023", "20.7.2023", "Ödendi", "Sejour", "", " "],
    ["26004", "Test Müşterisi", "", "Emir Ahm.", "Crystal Flora Beach Resort", "17.7.2023 / 17:18", "2 Yt", "18.7/2023", "20.7.2023", "Ödenmedi", "Sejour", "", " "],
    ["26003", "Test Müşterisi", "", "Ferhan Özb.", "Merit Royal Diamond Hotel & Spa", "21.3.2023 / 17:10", "3+1", "18.7/2023", "20.7.2023", "Ödendi", "Sejour", "", " "],
    ["26002", "Test Müşterisi", "", "Nurten Gül.", "Sultan Sipahi Resort Hotel", "11.4.2023 / 17:18", "2 Yt", "18.7/2023", "20.7.2023", "Ödendi", "Sejour", "", " "],
    ["26001", "Test Müşterisi", "", "Berivan Akk.", "Hattuşa Vacation Beach Hotel", "28.4.2023 / 21:18", "2 Yt", "18.7/2023", "20.7.2023", "Ödenmedi", "Sejour", "", " "],
    ["26000", "Test Müşterisi", "", "Ferhat Asl.", "Toka Bodrum Hotel & Beach Cl.", "1.7.2023 / 10:18", "5+2", "18.7/2023", "20.7.2023", "Ödendi", "Sejour", "", " "],
    ["25982", "Test Müşterisi", "", "Berivan Akk.", "Akra Hotel", "16.8.2023 / 20:18", "2 Yt", "18.7/2023", "20.7.2023", "Ödendi", "Sejour", "", " "],
    ["26980", "Test Müşterisi", "", "Cansu Kot.", "Toka Bodrum Hotel & Beach Cl.", "17.7.2023 / 17:18", "2 Yt", "18.7/2023", "20.7.2023", "Ödenmedi", "Sejour", "", " "],
    ["26975", "Test Müşterisi", "", "Emir Ahm", "Hattuşa Vacation Beach Hotel", "12.7.2023 / 17:18", "2+1", "18.7/2023", "20.7.2023", "Ödendi", "Sejour", "", " "],
    ["26974", "Test Müşterisi", "", "Nurten Gül.", "Merit Royal Diamond Hotel & Spa", "17.6.2023 / 17:18", "2 Yt", "18.7/2023", "20.7.2023", "Ödendi", "Sejour", "", " "],

  ],
  style: {
    table: {
      width: "100%",

    },
    th: {
      'text-align': 'center',
    },
    td: {
      'text-align': 'center'
    }
  }
}).render(document.getElementById("wrapper"));


// select2

$('#prepend-text-multiple-field').select2({
  theme: "bootstrap-5",
  width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
  placeholder: $(this).data('placeholder'),
  closeOnSelect: false,
});
$('#prepend-text-multiple-field2').select2({
  theme: "bootstrap-5",
  width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
  placeholder: $(this).data('placeholder'),
  closeOnSelect: false,
});
$('#prepend-text-multiple-field3').select2({
  theme: "bootstrap-5",
  width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
  placeholder: $(this).data('placeholder'),
  closeOnSelect: false,
});


const toggleButton = document.getElementById("toogle_btn_dropdown");
const contentDiv = document.getElementById("contentDiv");
contentDiv.style.display = "none"
toggleButton.addEventListener("click", () => {
  if (contentDiv.style.display === "none") {
    contentDiv.style.display = "block";
  } else {
    contentDiv.style.display = "none";
  }
});

const select2DOM = document.getElementById("select2_dropdown");
const dateDOM = document.getElementById("date_dropdown");
const toggleFilterButton = document.getElementById("filter_toggle");
select2DOM.style.display = "none"
dateDOM.style.display = "none"
toggleFilterButton.addEventListener("click", () => {
  if (select2DOM.style.display === "none" && dateDOM.style.display === "none") {
    select2DOM.style.display = "block"
    dateDOM.style.display = "block"
  } else {
    select2DOM.style.display = "none"
    dateDOM.style.display = "none"
  }
});