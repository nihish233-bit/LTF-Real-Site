/* Liderlik Tablosu Sıralama */
function sortLeaderboard(){
    let table = document.getElementById("leaderboard").getElementsByTagName('tbody')[0];
    let rows = Array.from(table.rows);
    rows.sort((a,b) => parseInt(b.cells[2].innerText) - parseInt(a.cells[2].innerText));
    rows.forEach((row, index) => { row.cells[0].innerText = index+1; table.appendChild(row); });
}

