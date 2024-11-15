// Data siswa yang diperbarui
const students = [
    { nis: '31166', name: 'ALBERTUS I MADE DWI KURNIAWAN' },
    { nis: '31167', name: 'ANAK AGUNG NGURAH KESAWA PUTRA' },
    { nis: '31168', name: 'DARWISY FAKHRI ALBAR' },
    { nis: '31169', name: 'GEDE ARGA SUTRA LAKSANA' },
    { nis: '31170', name: 'GUSTI PUTU PUTRA KRISNANDA' },
    { nis: '31171', name: 'I GEDE ANANTHA KUSUMA ARSA' },
    { nis: '31172', name: 'I GEDE WISMA KUSUMA' },
    { nis: '31173', name: 'I KADEK ADITYA' },
    { nis: '31174', name: 'I KADEK HENDRA DARMA PUTRA' },
    { nis: '31175', name: 'I KOMANG DANGUL SUDARSANA' },
    { nis: '31176', name: 'I MADE DANI ERLANGGA' },
    { nis: '31177', name: 'I MADE YUDA JONIARTHA' },
    { nis: '31178', name: 'I PUTU AGUS SUARDANA YASA' },
    { nis: '31179', name: 'I PUTU CEZA BUDIANA PUTRA' },
    { nis: '31180', name: 'I PUTU DIMAS PUTRA PALGUNA' },
    { nis: '31181', name: 'I PUTU RISKI PRAYANA PUTRA' },
    { nis: '31182', name: 'I PUTU TASKARA MAGUNA' },
    { nis: '31183', name: 'I WAYAN SUMANTRA' },
    { nis: '31184', name: 'KADEK ABDY WISMARA' },
    { nis: '31185', name: 'KADEK CITRA RENDHANA' },
    { nis: '31186', name: 'MADE DWI SATYA GUNA' }
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
