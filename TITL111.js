// Data siswa yang diperbarui
const students = [
    { nis: '31143', name: 'A. A. KETUT JAGADITA PRASETYA' },
    { nis: '31144', name: 'ANDRE BIMA PASARIBU' },
    { nis: '31145', name: 'FRANSISKUS HENDRA SETIAWAN' },
    { nis: '31146', name: 'I GEDE KOMANG ANOM MERTA NADI PUTRA' },
    { nis: '31148', name: 'I GUSTI AGUNG DIVA SAPUTRA' },
    { nis: '31149', name: 'I KADEK ADI KRISNAWAN' },
    { nis: '31150', name: 'I KADEK DHARMA WIJAYA' },
    { nis: '31151', name: 'I KADEK DWI ADNYANA PUTRA' },
    { nis: '31152', name: 'I KADEK MAHARDIKA' },
    { nis: '31153', name: 'I KADEK SIWA NANDA' },
    { nis: '31154', name: 'I KOMANG DANA MERTA' },
    { nis: '31155', name: 'I KOMANG OKA DIANA' },
    { nis: '31156', name: 'I MADE JAZZ WIJAYA' },
    { nis: '31157', name: 'I MADE MARTIN WIRATAMA' },
    { nis: '31158', name: 'I MADE RISKY ADI PUTRA' },
    { nis: '31159', name: 'I MADE WIDYA DWI NANDIKA' },
    { nis: '31160', name: 'I PUTU GEDE DHARMA NATA' },
    { nis: '31161', name: 'I PUTU PRASETYA WIGUNA' },
    { nis: '31162', name: 'I PUTU SATWIKA PRAMANA' },
    { nis: '31163', name: 'I WAYAN ADITYA DINATA' },
    { nis: '31164', name: 'MOCH HALIM ADLI HARPIANSYAH' },
    { nis: '31165', name: 'RAMADENI PUTRA PRIYATNA' }
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
