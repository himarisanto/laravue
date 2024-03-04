<template>
    <div class="container">
        <h2 class="text-center">Tambah Siswa</h2>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'DataIndex' }"
                    class="btn btn-primary btn-sm float-right mb-2">Kembali</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <form>
                    <div class="form-group">
                        <label>Nama</label>
                        <input type="text" class="form-control" v-model="newSiswa.nama">
                    </div>
                    <div class="form-group">
                        <label>No. Absen</label>
                        <input type="number" class="form-control" v-model="newSiswa.noAbsen">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="newSiswa.email">
                    </div>
                    <div class="form-group">
                        <label>Alamat</label>
                        <input type="text" class="form-control" v-model="newSiswa.alamat">
                    </div>
                    <button type="button" class="btn btn-primary" @click="createSiswa()">Tambah Siswa</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newSiswa: {
                nama: '',
                noAbsen: '',
                email: '',
                alamat: '',
            },
        };
    },
    methods: {
        createSiswa() {
            this.axios.post('http://127.0.0.1:8000/api/siswas', this.newSiswa)
                .then(response => {
                    this.$router.push({ name: 'DataIndex' });
                })
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        }
    }
}
</script>
