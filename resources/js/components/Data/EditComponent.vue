<template>
    <div class="container">
        <h2 class="text-center">Update Siswa</h2>
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
                        <input type="text" class="form-control" v-model="editingSiswa.nama">
                    </div>
                    <div class="form-group">
                        <label>No. Absen</label>
                        <input type="number" class="form-control" v-model="editingSiswa.noAbsen">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="editingSiswa.email">
                    </div>
                    <div class="form-group">
                        <label>Alamat</label>
                        <input type="text" class="form-control" v-model="editingSiswa.alamat">
                    </div>
                    <button type="button" class="btn btn-primary" @click="updateSiswa()">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editingSiswa: {
                nama: '',
                noAbsen: '',
                email: '',
                alamat: '',
            },
        };
    },
    mounted() {
        this.editSiswa(this.$route.params.siswaId);
    },
    methods: {
        editSiswa(siswaId) {
            axios.get(`http://127.0.0.1:8000/api/siswas/${siswaId}`)
                .then((res) => {
                    this.editingSiswa = res.data;
                })
                .catch((error) => {
                    console.error('Error fetching siswa:', error);
                });
        },
        updateSiswa() {
            axios.patch(`http://127.0.0.1:8000/api/siswas/${this.$route.params.siswaId}`, this.editingSiswa)
                .then((res) => {
                    this.$router.push({ name: 'DataIndex' });
                })
                .catch((error) => {
                    console.error('Error updating siswa:', error);
                });
        },
    },
};
</script>
