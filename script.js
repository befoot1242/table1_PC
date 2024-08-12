
const functionName = () => {
    const table = document.querySelector("tbody");
    const rows = table.rows;
    const columnIndex = 0;
    debugger;

    for (let i = 0; i < rows.length; i++) {
        const currentCell = rows[i].cells[columnIndex];
        const prevCell = i > 0 ? rows[i - 1].cells[columnIndex] : null;
        const nextCell = i < rows.length - 1 ? rows[i + 1].cells[columnIndex] : null;

        if ((prevCell && currentCell.innerText === prevCell.innerText) ||
            (nextCell && currentCell.innerText === nextCell.innerText)) {
            //currentCell.classList.add("highlight");
            currentCell.style.backgroundColor = "yellow";
        }
    }
};

// 1723287504.243215
$(document).ready(function() {
    // DataTableの初期化
    $('#example').DataTable({
        //data: jsonData,
        ajax: { url: "https://befoot1242.github.io/table1/results.json", dataSrc: '' },
        scrollY: "70vh",
        displayLength: 101,
        order: [ [ 0, "desc" ] ],
        columns: [
            { title: "Column" },
            { title: "バサラ大将" },
            { title: "坂本" },
            { title: "尊敬ラーメン屋" },
            { title: "ゆっけ" },    
            { title: "voter" }
        ],
        initComplete:function(settings) {
            functionName(); // テーブル描画後に関数を呼び出す
        }
    });
});
