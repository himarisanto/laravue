<template>
    <div>
        <h1>Daftar Siswa</h1>


        <form @submit.prevent="createSiswa">
            <label for="nama">Nama:</label>
            <input type="text" v-model="newSiswa.nama" required>


            <label for="noAbsen">No. Absen:</label>
            <input type="number" v-model="newSiswa.noAbsen" required>


            <label for="email">Email:</label>
            <input type="email" v-model="newSiswa.email" required>


            <label for="alamat">Alamat:</label>
            <input type="text" v-model="newSiswa.alamat" required>


            <button type="submit">Tambah Siswa</button>
        </form>


        <ul>
            <li v-for="siswa in siswas" :key="siswa.id">
                {{ siswa.nama }} - {{ siswa.noAbsen }} - {{ siswa.email }} - {{ siswa.alamat }}
                <button @click="editSiswa(siswa)">Edit</button>
                <button @click="deleteSiswa(siswa.id)">Hapus</button>
            </li>
        </ul>


        <div v-if="editingSiswa">
            <h2>Edit Siswa</h2>
            <form @submit.prevent="updateSiswa">
                <label for="editNama">Nama:</label>
                <input type="text" v-model="editingSiswa.nama" required>


                <label for="editNoAbsen">No. Absen:</label>
                <input type="number" v-model="editingSiswa.noAbsen" required>


                <label for="editEmail">Email:</label>
                <input type="email" v-model="editingSiswa.email" required>


                <label for="editAlamat">Alamat:</label>
                <input type="text" v-model="editingSiswa.alamat" required>


                <button type="submit">Simpan Perubahan</button>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            siswas: [],
            newSiswa: {
                nama: '',
                noAbsen: '',
                email: '',
                alamat: '',
            },
            editingSiswa: null,
        };
    },
    mounted() {
        this.fetchSiswas();
    },
    methods: {
        async fetchSiswas() {
            try {
                const response = await axios.get('/api/siswas');
                this.siswas = response.data.siswas;
            } catch (error) {
                console.error('Error fetching siswas:', error);
            }
        },
        async createSiswa() {
            try {
                const response = await axios.post('/api/siswas', this.newSiswa);
                this.siswas.push(response.data.siswa);


                this.newSiswa = {
                    nama: '',
                    noAbsen: '',
                    email: '',
                    alamat: '',
                };
            } catch (error) {
                console.error('Error creating siswa:', error);
            }
        },
        editSiswa(siswa) {
            this.editingSiswa = { ...siswa };
        },
        async updateSiswa() {
            try {
                const response = await axios.put(`/api/siswas/${this.editingSiswa.id}`, this.editingSiswa);
                const index = this.siswas.findIndex(siswa => siswa.id === response.data.siswa.id);
                if (index !== -1) {
                    this.siswas.splice(index, 1, response.data.siswa);
                }


                this.editingSiswa = null;
            } catch (error) {
                console.error('Error updating siswa:', error);
            }
        },
        async deleteSiswa(siswaId) {
            try {
                await axios.delete(`/api/siswas/${siswaId}`);
                this.siswas = this.siswas.filter(siswa => siswa.id !== siswaId);
            } catch (error) {
                console.error('Error deleting siswa:', error);
            }
        },
    },
};
</script>

<style scoped></style>