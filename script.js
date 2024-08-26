
const functionName = () => {
    const table = document.querySelector("tbody");
    const rows = table.rows;
    const columnIndex = 0;

    for (let i = 0; i < rows.length; i++) {
        const currentCell = rows[i].cells[columnIndex];
        const prevCell = i > 0 ? rows[i - 1].cells[columnIndex] : null;
        const nextCell = i < rows.length - 1 ? rows[i + 1].cells[columnIndex] : null;

        if ((prevCell && currentCell.innerText === prevCell.innerText) ||
            (nextCell && currentCell.innerText === nextCell.innerText)) {
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
        initComplete:function() {
            functionName();
        }
    });

    fetch('https://befoot1242.github.io/table1/teamResults.json')
        .then(response => response.json())
        .then(data => {
            let ar = []
            Object.keys(data).forEach((value,index,arr) => ar.push([data[value],value]));
            ar.sort((a, b) => b[0] - a[0]);
            ar.forEach((data,index) => {
                let newParagraph = document.createElement("p");
                newParagraph.textContent = `${index+1} ${data[0]} ${data[1]}`;
                var target = document.querySelector(".modal-content");
                target.appendChild(newParagraph);
            });
        })
        .catch(error => console.error('Error:', error)); // エラー処理
});
// モーダル背景をクリックしたときにモーダルを閉じる
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('clickArea').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal').style.zIndex = -10;
    document.getElementById('clickArea').style.zIndex = -10;
  });
});

function tmp(){
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('example_wrapper').style.zIndex = -10;
    document.getElementById('clickArea').style.zIndex = 10;
};