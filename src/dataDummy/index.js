const tableData = [
  {
    checkbox: "uncheck",
    name: "Wulan",
    username: "Wulan12",
    address:
      "Sasak Panjang, Tajur Halang, Sasak Panjang, Tajur Halang, Bogor, Jawa Barat 16320",
    actions: "delete"
  },
  {
    checkbox: "uncheck",
    name: "Raharjo",
    username: "R4harj0",
    address:
      "Jl. Raya Korelet, Ranca Kalapa, Kec. Panongan, Tangerang, Banten 15710",
    actions: "delete"
  },
  {
    checkbox: "uncheck",
    name: "Widya",
    username: "Widyaaaa",
    address:
      "cluster, Jl. Mutiara Panongan 2, Serdang Kulon, Kec. Panongan, Tangerang, Banten 15710",
    actions: "delete"
  },
  {
    checkbox: "uncheck",
    name: "Yuda",
    username: "Yuda1234",
    address:
      "Jl. Masjid Nurul Fajri I, Pd. Jaya, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15224",
    actions: "delete"
  },
  {
    checkbox: "uncheck",
    name: "Cinta",
    username: "CintaCinta",
    address:
      "Jl. Perum Graha Prima Desa. Bendungan Kampung. Kebon Kelapa, RT.005/RW.013, Satriajaya, Kec. Tambun Utara, Bekasi, Jawa Barat 17510",
    actions: "delete"
  },
  {
    checkbox: "uncheck",
    name: "Iskandar",
    username: "Iskandar34",
    address:
      "Jl. Raya Tapos, Cimpaeun, Kec. Tapos, Kota Depok, Jawa Barat 16459",
    actions: "delete"
  },
  {
    checkbox: "uncheck",
    name: "Hidayat",
    username: "Hidayat14",
    address:
      "perum mekarsari permai cluster sirih gading blokf2 e no1, Gandoang, Kec. Cileungsi, Bogor, Jawa Barat 16820",
    actions: "delete"
  },
  {
    checkbox: "uncheck",
    name: "Kusuma",
    username: "hehe1234",
    address:
      "Jl. H. Yasin, RT.003/RW.006, Jatiluhur, Kec. Jatiasih, Kota Bks, Jawa Barat 17425",
    actions: "delete"
  },
  {
    checkbox: "uncheck",
    name: "Indah",
    username: "Indah234",
    address:
      "Jl. Boulevard Raya Gading Serpong, Blok M5 No. 3, Pakulonan Barat, Kelapa Dua, Pakulonan Bar., Kec. Klp. Dua, Tangerang, Banten 15810",
    actions: "delete"
  },
  {
    checkbox: "uncheck",
    name: "Jusuf",
    username: "Jusuf31",
    address: "Jl. Allogio, Medang, Kec. Pagedangan, Tangerang, Banten 15334",
    actions: "delete"
  },
  {
    checkbox: "uncheck",
    name: "Xavier",
    username: "xavier1234",
    address: "Perumahan Mutiara Tajurhalang",
    actions: "delete"
  },
  {
    checkbox: "uncheck",
    name: "Alvin",
    username: "alivin1",
    address:
      "Jl. Klp. Gading Raya, Bojong Nangka, Kec. Klp. Dua, Tangerang, Banten 15810",
    actions: "delete"
  }
];

const columns = [
  {
    field: "checkbox",
    title: "Check",
    width: 60,
    titleAlign: "center",
    componentName: "checkbox",
    isResize: true
  },
  {
    field: "name",
    title: "Name",
    width: 150,
    titleAlign: "center",
    componentName: "other",
    orderBy: "",
    isResize: true
  },
  {
    field: "username",
    title: "Username",
    width: 150,
    titleAlign: "center",
    componentName: "other",
    orderBy: "",
    isResize: true
  },
  {
    field: "address",
    title: "Address",
    width: 300,
    titleAlign: "center",
    columnAlign: "left",
    isResize: true
  },
  {
    field: "actions",
    title: "Actions",
    width: 150,
    titleAlign: "center",
    componentName: "actions",
    isResize: true
  }
];

export default {
  tableData,
  columns
};
