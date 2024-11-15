// Data siswa yang diperbarui
const students = [
    { nis: '32027', name: 'ANAK AGUNG GEDE BAYU SUTHANAYA PUTRA' },
    { nis: '32028', name: 'BHUJANGGA WERDHA SANJAYA' },
    { nis: '32029', name: 'DAVA OCTAVIANO CAESAR' },
    { nis: '32030', name: 'DIKY NOVAADIPUTRA' },
    { nis: '32031', name: 'HENRY YANSYAH' },
    { nis: '32032', name: 'I GEDE BAGUS WIRA WIGUNA' },
    { nis: '32033', name: 'I GUSTI AGUNG BAYU SUHARTA' },
    { nis: '32034', name: 'I GUSTI NGURAH RADEA ARI RESWARA' },
    { nis: '32035', name: 'I KADEK DIKA PRALANA SUMERTA' },
    { nis: '32036', name: 'I KADEK REHANDIKA DWI PRATAMA' },
    { nis: '32037', name: 'I KADEK RISKI ADITIA' },
    { nis: '32038', name: 'I KADEK RIZKY PALGUNA ADINATA' },
    { nis: '32039', name: 'I KOMANG DIMAS ADIPUTRA SENTANA' },
    { nis: '32040', name: 'I KOMANG KINAN DANA' },
    { nis: '32041', name: 'I MADE RAKA ADITYA PRADNYANA' },
    { nis: '32042', name: 'I MADE SADHU SAPUTRA' },
    { nis: '32043', name: 'I MADE SANJAYA DINATA' },
    { nis: '32044', name: 'I NYOMAN ADE DARMADI JUNIARTA' },
    { nis: '32045', name: 'I NYOMAN DIDIA TEJA PRABAWANTA' },
    { nis: '32046', name: 'I PUTU ARIEF SATYA DHARMA YOGA' },
    { nis: '32047', name: 'I PUTU DHIKA ARTA PRADITYA GAUTAMA' },
    { nis: '32048', name: 'I PUTU DUTA PRATAMA' },
    { nis: '32049', name: 'I PUTU GEDE ADITA MAHA WIKAN' },
    { nis: '32050', name: 'I PUTU GEDE RADITYA PRATAMA' },
    { nis: '32051', name: 'I PUTU KRISNA SASTRA WIJAYA' },
    { nis: '32052', name: 'I PUTU RESA ANDIKA YANA' },
    { nis: '32053', name: 'I PUTU ROI KESUMA' },
    { nis: '32054', name: 'KADEK ASTINA' },
    { nis: '32055', name: 'MUHAMAD HAIKAL ZIDNI NUR HUDA' },
    { nis: '32056', name: 'NAHDIAN AROYAN' },
    { nis: '32057', name: 'NGAKAN NYOMAN RADITYA ARTA DANA' },
    { nis: '32058', name: 'PUTU WIDIARTA' }
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
