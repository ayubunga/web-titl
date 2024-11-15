// Data siswa yang diperbarui
const students = [
    { nis: '30247', name: 'A.A. MADE BISMA ARIMBAWA' },
    { nis: '30248', name: 'ACHMAD ALI MUZAKHIR' },
    { nis: '30249', name: 'ANAK AGUNG BAGUS ADIT WIBAWA PUTRA' },
    { nis: '30250', name: 'ANDRE JULIAWAN PUTRA MAMESAH' },
    { nis: '30251', name: 'FAIDHAL ULUMI ACHMAD' },
    { nis: '30252', name: 'GUSTI AYU AMELIA PUTRI' },
    { nis: '30253', name: 'I GEDE AGUS RIDO NICOLA PUTRA' },
    { nis: '30254', name: 'I GEDE DENI SATRIA WIGUNA' },
    { nis: '30255', name: 'I GEDE PUTRA WAHYU NARAYANA' },
    { nis: '30256', name: 'I GEDE WIDNYANA' },
    { nis: '30257', name: 'I GUSTI NGURAH BAGUS JUNEAU MAHENDRA' },
    { nis: '30258', name: 'I GUSTI NGURAH PUTRA RAMAYKA' },
    { nis: '30259', name: 'I KADEK AGUS SAPUTRA' },
    { nis: '30261', name: 'I KADEK SASTRA WIGUNA' },
    { nis: '30262', name: 'I KADEK SATRIA WIBAWA' },
    { nis: '30263', name: 'I KETUT AMERTHA NADI JAYA' },
    { nis: '30264', name: 'I KETUT YOGA ADI WINATA' },
    { nis: '30265', name: 'I KOMANG ADI PUTRA WIJAYA' },
    { nis: '30266', name: 'I KOMANG AGUS MARDIKA' },
    { nis: '30267', name: 'I MADE ADI WIGUNA' },
    { nis: '30268', name: 'I MADE AGUS DWI PRADNYANA' },
    { nis: '30269', name: 'I MADE ARIMBAWA' },
    { nis: '30270', name: 'I MADE BAGIADA' },
    { nis: '30271', name: 'I MADE MELAH SUPANG' },
    { nis: '30272', name: 'I NYOMAN YUDI ANGGARA' },
    { nis: '30273', name: 'I PUTU ELGA MAHARDIKA PUTRA' },
    { nis: '30274', name: 'I PUTU SATRIYA ARYA KUSUMA' },
    { nis: '30275', name: 'I PUTU YOGA SUADNYANA' },
    { nis: '30276', name: 'I WAYAN ADIT KURNIAWAN' },
    { nis: '30277', name: 'IDA BGS. KOMANG SILA PRAMANA' },
    { nis: '30278', name: 'KADEK MAHADI PUTRA' },
    { nis: '30279', name: 'KADEK YUDA ARTIKA' },
    { nis: '30280', name: 'KOMANG BISMA MAHA PUTRA' },
    { nis: '30281', name: 'MADE ANDY PERMANA' },
    { nis: '30282', name: 'MAHATMA HARJADINATA RAJIANTO PUTRA' },
    { nis: '30283', name: 'MAS BAGUS PUTRA ASMARANANTA BADUNGGAWA' },
    { nis: '30284', name: 'MUHAMMAD IKHSAN PRATAMA' },
    { nis: '30285', name: 'NGURAH PUTU ARMAN YULIANA' },
    { nis: '30286', name: 'QOLBI FADHIL' },
    { nis: '30287', name: 'RADITYA DHANANJAYA' },
    { nis: '30288', name: 'RASIANUS RISKI FIRDAUS' },
    { nis: '30289', name: 'RIZKY JANUAR AFFANDI' },
    { nis: '30290', name: 'SATRIA AGUNG MAULANA' },
    { nis: '30291', name: 'SATRIA ARYA WIBAWA' },
    { nis: '30292', name: 'SI NGURAH PUTU ARYA DANI PRADNYA PRAMANA' },
];

// Fungsi untuk menambahkan data siswa ke tabel
function populateTable() {
    const tableBody = document.querySelector('#students-table tbody');
    
    students.forEach(student => {
        const row = document.createElement('tr');
        
        const nisCell = document.createElement('td');
        nisCell.textContent = student.nis;
        
        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;
        
        row.appendChild(nisCell);
        row.appendChild(nameCell);
        
        tableBody.appendChild(row);
    });
}

// Memanggil fungsi untuk mengisi tabel setelah halaman dimuat
document.addEventListener('DOMContentLoaded', populateTable);  
