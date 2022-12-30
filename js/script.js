const data = "data.json";
const listMhs = document.querySelector("#mhs-list");
var urlParams = new URLSearchParams(window.location.search);
var jk = urlParams.get("jk");

const getListMhs = () => {
  //ambil data dari data.json
  fetch(data)
    .then((response) => response.json())
    .then((resJSON) => {
      //menampilkan list mahasiswa di console
      console.log(resJSON.mahasiswa);
      if (jk === null) {
        showListMhs(resJSON.mahasiswa);
      } else {
        showListByGender(resJSON.mahasiswa);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const showListMhs = (mhs) => {
  listMhs.innerHTML = "";
  mhs.forEach((item) => {
    listMhs.innerHTML += `
  <div class="col s12 s12 m6 l4">
      <div class="card">
          <div class="card-image">
              <img src="${item.foto}" />
              <span class="card-title">${item.nim}</span>
          </div>
          <div class="card-content">
              <div><span>Nama  : ${item.nama}</span></div>
              <div><span>Asal  : ${item.alamat_asal}</span></div>
              <div><span>Alamat: ${item.alamat_mlg}</span></div>
          </div>
      </div>
  </div>
  `;
  });
};

const showListByGender = (mhs) => {
  listMhs.innerHTML = "";
  if (jk === "L") {
    jk = "Laki - laki";
  } else {
    jk = "Perempuan";
  }
  mhs.forEach((item) => {
    if (item.jk === jk) {
      listMhs.innerHTML += `
        <div class="col s12 s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="${item.foto}" />
                    <span class="card-title">${item.nim}</span>
                </div>
                <div class="card-content">
                    <div><span>Nama  : ${item.nama}</span></div>
                    <div><span>Asal  : ${item.alamat_asal}</span></div>
                    <div><span>Alamat: ${item.alamat_mlg}</span></div>
                </div>
            </div>
        </div>
        `;
    }
  });
};

document.addEventListener("DOMContentLoaded", getListMhs);
var elems = document.querySelectorAll(".sidenav");
var instances = M.Sidenav.init(elems);
