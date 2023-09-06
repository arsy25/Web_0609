<template>
  <q-page class="q-pa-md bg-white">
    <div class="q-gutter-sm">
      <div class="row">
        <q-card class="col-8 cardinput q-pa-md">
          <div class="text-h5 text-center">
            Silahkan masukkan artikel yang ingin anda buat
          </div>
        </q-card>
        <q-space />
        <q-card class="col-3"> sample </q-card>
      </div>
      <div class="row q-pa-sm">
        <q-card class="col-8 q-pa-md q-gutter-sm cardinput">
          <q-input
            standout
            dense
            label="HEADER BERITA"
            label-color="black"
            class="bg-grey-8"
          ></q-input>
          <q-input
            standout
            hint="Cantumkan Gambar Berita"
            type="file"
            label-color="black"
            class="bg-grey-8"
          ></q-input>
          <q-input
            standout
            hint="Ketik berita anda"
            type="textarea"
            label-color="black"
            class="bg-grey-8"
          ></q-input>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style>
.cardinput {
  background: #91c8e4;
}
</style>
