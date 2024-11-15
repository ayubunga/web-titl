// Data siswa yang diperbarui
const students = [
    { nis: '31995', name: 'ANAK AGUNG DIKA PRAMANA PUTRA' },
    { nis: '31996', name: 'ANDRY RITZ PATIH' },
    { nis: '31997', name: 'I DEWA GEDE AGUNG DALEM PRAJANATA' },
    { nis: '31998', name: 'I GEDE ARI SUPUTRA JAYA' },
    { nis: '31999', name: 'I GEDE DIPTA WARDANA' },
    { nis: '32000', name: 'I GEDE ENJIE PRADNYA ADINATHA' },
    { nis: '32001', name: 'I GEDE LANANG ARTA JAGAT' },
    { nis: '32002', name: 'I GUSTI NGURAH ADITYA PRAMANA PUTRA' },
    { nis: '32003', name: 'I KADEK AGUS DARMAWAN' },
    { nis: '32004', name: 'I KADEK ARIL VALEN PRAMATA' },
    { nis: '32005', name: 'I KADEK DWI PUTRA WIJAYA' },
    { nis: '32006', name: 'I KADEK SURYA WIJAYA' },
    { nis: '32007', name: 'I KADEK WAHYU MAHESA KARANG' },
    { nis: '32008', name: 'I KOMANG ADINANTA' },
    { nis: '32009', name: 'I KOMANG BAGUS PRABA NUGRAHA' },
    { nis: '32010', name: 'I KOMANG TRISTAN DANDIYAKSA SETIADIARTA' },
    { nis: '32011', name: 'I KOMANG WIRA WISASTRA' },
    { nis: '32012', name: 'I MADE ADHITYA BUDHI UTAMA' },
    { nis: '32013', name: 'I MADE DENNY MARTHA WIJAYA' },
    { nis: '32014', name: 'I MADE JANENDRA' },
    { nis: '32015', name: 'I MADE JULIANA' },
    { nis: '32016', name: 'I MADE NESTA PRADANA' },
    { nis: '32017', name: 'I MADE WIYOGA MERTA SWARA' },
    { nis: '32018', name: 'I PUTU AGUS ADI WIRANATA' },
    { nis: '32019', name: 'I PUTU ARYA SUWATAMA' },
    { nis: '32020', name: 'I PUTU SATRIA ARYA DINATA' },
    { nis: '32021', name: 'IDA BAGUS GEDE WIBAWA JUNGUTAN' },
    { nis: '32022', name: 'KADEK FABYAN DANA PRAMULYA' },
    { nis: '32023', name: 'NI MADE ARI ARTATI' },
    { nis: '32024', name: 'NI PUTU AMELIA CAHYANINGRUM EKA PUTRI DARMA ASIH' },
    { nis: '32025', name: 'NYOMAN EDI WIPAMARTA NOVANTARA' },
    { nis: '32026', name: 'PUTU ARIUS ARYADI' }
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
