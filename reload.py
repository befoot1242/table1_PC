import json
import time

with open('results.json', 'r', encoding='utf-8') as file:
    results = json.load(file)

out = ""
out += "// " + str(time.time()) + '\n'
out += '$(document).ready(function() {\n' + '// JSONデータ\n' + 'var jsonData = [\n'
out += str(results[0])
for i in range(1,len(results)):
    out += "," + str(results[i]) + '\n'
out += "        // 他のデータ...\n"
out += "    ];\n"
out += "    // DataTableの初期化\n"
#out += "debugger;"
out += "    $('#example').DataTable({\n"
out += "        data: jsonData,\n"
out += "        displayLength: 101,\n"
out += "        order: [ [ 0, \"desc\" ] ],\n"
out += "        columns: [\n"
out += "            { title: \"Column\" },\n"
out += "            { title: \"バサラ大将\" },\n"
out += "            { title: \"坂本\" },\n"
out += "            { title: \"尊敬ラーメン屋\" },\n"
out += "            { title: \"ゆっけ\" },\n"
out += "            { title: \"voter\" }\n"
out += "        ]\n"
out += "    });\n"
out += "});\n"

print(out)