// 1723287504.243215
$(document).ready(function() {
    // DataTableの初期化
    $('#example').DataTable({
        //data: jsonData,
        ajax: { url: "results.json", dataSrc: '' },
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
        ]
    });
});

